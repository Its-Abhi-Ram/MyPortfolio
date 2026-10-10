import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const app = express();
const port = Number(process.env.PORT) || 3001;
const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Origin is not allowed'));
  }
}));
app.use(express.json({ limit: '12kb' }));

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.post('/api/contact', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please try again later.' }
}), async (request, response) => {
  const { name, phone, email, message } = request.body ?? {};
  const fields = [name, phone, email, message];

  if (fields.some((field) => typeof field !== 'string' || !field.trim())) {
    response.status(400).json({ error: 'Please complete every field.' });
    return;
  }

  const cleaned = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    message: message.trim()
  };

  if (
    cleaned.name.length > 120 ||
    cleaned.phone.length > 50 ||
    cleaned.email.length > 254 ||
    cleaned.message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)
  ) {
    response.status(400).json({ error: 'Please check the form fields and try again.' });
    return;
  }

  // Email delivery is temporarily disabled until SMTP credentials are configured.
  // const smtpHost = process.env.SMTP_HOST;
  // const smtpPort = Number(process.env.SMTP_PORT || 587);
  // const smtpUser = process.env.SMTP_USER;
  // const smtpPass = process.env.SMTP_PASS;
  // const contactTo = process.env.CONTACT_TO;
  // const mailFrom = process.env.MAIL_FROM || smtpUser;

  // if (!smtpHost || !smtpUser || !smtpPass || !contactTo) {
  //   response.status(503).json({ error: 'Email delivery is not configured on the server.' });
  //   return;
  // }

  // const escapeHtml = (value) => value
  //   .replaceAll('&', '&amp;')
  //   .replaceAll('<', '&lt;')
  //   .replaceAll('>', '&gt;')
  //   .replaceAll('"', '&quot;')
  //   .replaceAll("'", '&#039;');
  // const safeName = cleaned.name.replace(/[\r\n]+/g, ' ');
  // const safeMessage = escapeHtml(cleaned.message).replace(/\r?\n/g, '<br>');

  // try {
  //   const transporter = nodemailer.createTransport({
  //     host: smtpHost,
  //     port: smtpPort,
  //     secure: smtpPort === 465,
  //     auth: {
  //       user: smtpUser,
  //       pass: smtpPass
  //     }
  //   });

  //   await transporter.sendMail({
  //     from: `"Portfolio Contact" <${mailFrom}>`,
  //     to: contactTo,
  //     replyTo: cleaned.email,
  //     subject: `Portfolio message from ${safeName}`,
  //     text: `Name: ${cleaned.name}\nPhone: ${cleaned.phone}\nEmail: ${cleaned.email}\n\nMessage:\n${cleaned.message}`,
  //     html: `<h2>New message from your portfolio</h2><p><strong>Name:</strong> ${escapeHtml(cleaned.name)}</p><p><strong>Phone:</strong> ${escapeHtml(cleaned.phone)}</p><p><strong>Email:</strong> ${escapeHtml(cleaned.email)}</p><p><strong>Message:</strong><br>${safeMessage}</p>`
  //   });

  //   response.status(200).json({ ok: true, message: 'Message sent.' });
  // } catch (error) {
  //   console.error('Contact email delivery failed:', error.message);
  //   response.status(502).json({ error: 'Email delivery failed. Please try again later.' });
  // }

  response.status(200).json({ ok: true, message: 'Message received. Email delivery is temporarily disabled.' });
});

app.use((error, _request, response, _next) => {
  void _next;
  if (error instanceof SyntaxError && 'body' in error) {
    response.status(400).json({ error: 'Invalid request body.' });
    return;
  }
  if (error.message === 'Origin is not allowed') {
    response.status(403).json({ error: 'Request origin is not allowed.' });
    return;
  }
  console.error('Contact API error:', error.message);
  response.status(500).json({ error: 'Unexpected server error.' });
});

app.listen(port, () => {
  console.log(`Contact API listening on port ${port}`);
});
