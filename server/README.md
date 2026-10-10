# Contact API: Render + Gmail SMTP

GitHub Pages serves the portfolio frontend. Render runs the Express API, and Gmail SMTP sends the email through a private server-side configuration. SMTP credentials, sender addresses, and recipient emails belong only in private environment settings; never commit `.env`.

## 1. Set up Gmail SMTP

1. Sign in to your Gmail account that you want to use for sending contact emails.
2. Enable 2-Step Verification if it is not already enabled.
3. Generate an App Password for Gmail.
4. Use the Gmail address as the SMTP user and the App Password as the SMTP password.
5. Keep `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, and `CONTACT_TO` in Render or your local ignored `.env` file only.

## 2. Deploy the API to Render

1. Push this repository to GitHub so Render can access the backend code.
2. In Render, create a new **Blueprint** and select this repository. Render will read the root `render.yaml` and create the API web service. Alternatively, create a Node web service with build command `npm ci`, start command `npm run server`, and health check path `/api/health`.
3. During Blueprint creation, enter the private values for `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, `MAIL_FROM`, and `CORS_ORIGINS`.
   - `SMTP_HOST` should be `smtp.gmail.com`
   - `SMTP_PORT` should be `587`
   - `SMTP_USER` should be your Gmail address
   - `SMTP_PASS` should be your Gmail App Password
   - `MAIL_FROM` should match the Gmail sender address you want to use
   - `CONTACT_TO` should be the email where you receive messages
   - `CORS_ORIGINS` should be the frontend origin, such as `https://your-site.example`
4. Wait for deployment, then use Render's generated service URL to open `/api/health`; it should return `{"ok":true}`.

Render's free web service may sleep when idle, so the first form submission after inactivity can take longer while the API wakes up.

## 3. Point the portfolio at Render

Set `VITE_CONTACT_API_URL` in the local ignored `.env` to the full endpoint, for example `https://your-render-service.onrender.com/api/contact`. Then run `npm run deploy` to build and publish the frontend. The API URL and CORS origin are public routing information; `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, and `CONTACT_TO` remain private on Render.

For local testing, set the SMTP variables in `.env`, run `npm run server` in one terminal and `npm run dev` in another. The form submits the visitor's name, phone, email, and message; replies are addressed to the visitor's email.

The API validates submissions, limits each client to five messages per 15 minutes, and exposes `GET /api/health` and `POST /api/contact`.
