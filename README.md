# HELPINGSIDE MARKETINGS — Phase 1 Website

This is a responsive React + Vite public website starter for `helpingsidemarketing.in`.

## Included
- Home, About, Services, Partner interest, Contact sections
- English/Hindi language toggle
- Service category cards
- Contact details and WhatsApp enquiry form
- Mobile responsive layout
- Supplied logo image in `public/helpingside-logo.jpg`

## Run locally
1. Install Node.js (LTS) on your computer.
2. Extract this ZIP.
3. Open the extracted folder in Terminal / Command Prompt.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Create production build
```bash
npm run build
```
The production website is generated in the `dist` folder.

## GoDaddy deployment
For GoDaddy cPanel hosting:
1. Run `npm run build` on your computer.
2. Open GoDaddy cPanel → File Manager → `public_html`.
3. Upload the *contents* of the `dist` folder into `public_html`.
4. Confirm that `index.html` is directly inside `public_html`.
5. Enable SSL/HTTPS in GoDaddy.

If your GoDaddy plan is Website Builder rather than cPanel/Web Hosting, the deployment steps are different.

## Important Phase 1 notes
- The enquiry form opens a pre-filled WhatsApp message. The visitor reviews and sends it; this starter does not store enquiries in a database.
- Partner CTA currently opens the enquiry flow. Automatic partner account creation needs the secure Supabase authentication, database tables, approval/role rules and email verification integration in Phase 2.
- No GST number is displayed because the number was not provided. Add it only after confirming the exact registered details.
- Do not put Supabase service-role keys, payment secrets, or other private credentials in frontend code.
- Online payment checkout, customer login, staff/owner dashboards, partner accounts, invoice storage and document uploads are Phase 2/3 integrations.
- Confirm the final legal company details, service eligibility, privacy policy, terms, refund policy and regulatory disclosures before public launch.
