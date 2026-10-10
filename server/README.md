# Contact API: Render + Brevo

GitHub Pages serves the portfolio frontend. Render runs the Express API, and Brevo sends the email through HTTPS. SMTP passwords and API keys belong only in private environment settings; never commit `.env`.

## 1. Set up Brevo

1. Create a Brevo account and register/verify a sender email address in its sender settings.
2. Create a Brevo API key. Do not put it in frontend code or share it in chat.
3. The message recipient is configured separately as `CONTACT_TO` on the API server.

## 2. Deploy the API to Render

1. Push this repository to GitHub so Render can access the backend code.
2. In Render, create a new **Blueprint** and select this repository. Render will read the root `render.yaml` and create the API web service. Alternatively, create a Node web service with build command `npm ci`, start command `npm run server`, and health check path `/api/health`.
3. During Blueprint creation, enter the private values for `BREVO_API_KEY`, `CONTACT_TO`, `MAIL_FROM`, and `CORS_ORIGINS`. `MAIL_FROM` must exactly match the sender email verified in Brevo. Set `CORS_ORIGINS` to the portfolio's exact website origin, such as `https://your-site.example`. The origin is public routing information, not a password; keep it in Render's configuration if you don't want the exact value in the repo.
4. Wait for deployment, then use Render's generated service URL to open `/api/health`; it should return `{"ok":true}`.

Render's free web service may sleep when idle, so the first form submission after inactivity can take longer while the API wakes up.

## 3. Point the portfolio at Render

Set `VITE_CONTACT_API_URL` in the local ignored `.env` to the full endpoint, for example `https://your-render-service.onrender.com/api/contact`. Then run `npm run deploy` to build and publish the frontend. The API URL and CORS origin are public routing information; `BREVO_API_KEY` and `CONTACT_TO` remain private on Render.

For local testing, set the Brevo variables in `.env`, run `npm run server` in one terminal and `npm run dev` in another. The form submits the visitor's name, phone, email, and message; replies are addressed to the visitor's email.

The API validates submissions, limits each client to five messages per 15 minutes, and exposes `GET /api/health` and `POST /api/contact`.
