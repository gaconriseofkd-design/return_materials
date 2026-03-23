# Return Materials System

A web-based system for managing material returns using QR codes.

## Features
- Production tab for scanning and sending materials to inventory.
- Warehouse tab for confirming pending returns.
- Lookup and Reporting functionality.

## Deployment
This project is set up for [Vercel](https://vercel.com). Just connect your GitHub repository to Vercel and it will be deployed as a static site.

### Important Note for Vercel Deployment
The current implementation uses `google.script.run`, which is specifically designed for Google Apps Script environments. If you want this project to work fully on Vercel, the `google.script.run` calls must be replaced with `fetch` calls to a backend API (like a Google Apps Script web app URL or a Vercel Serverless Function).
