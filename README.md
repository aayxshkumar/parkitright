# ParkItRight

![CI](https://github.com/aayxshkumar/parkitright/actions/workflows/ci.yml/badge.svg)

A parking spot booking app. Owners list parking places with photos, perks and a price; drivers search by address, pick a date range and book. It is a React client with a Node.js and Express API backed by MongoDB.

## Features

- Register and log in with email and password, or with Google; the API issues a JWT stored in a cookie and also accepted as a Bearer token
- Browse all places, search places by address, and open a place page with a photo gallery
- Add and edit your own places, with photos uploaded from your device or by URL (stored on Cloudinary)
- Book a place for a date range; the total is the nightly price times the number of nights
- View your bookings and each booking's details

The API also contains a report model and controller, and the client a report page, but they are not connected to any route yet.

## Tech stack

- Client: React 18, Vite 4, React Router 6, Tailwind CSS, Radix UI primitives, Axios, `@react-oauth/google`, React Toastify
- API: Node.js, Express 4, Mongoose 7, JSON Web Tokens, bcryptjs, Multer, Cloudinary

## Project structure

```
api/        Express API (routes, controllers, Mongoose models)
client/     React front end (Vite)
ml_codes/   Exploratory Python scripts exported from Colab (price regression, naive Bayes); not used by the app
```

## Getting started

Requires Node.js 22 and a MongoDB database. Photo uploads also need a Cloudinary account.

```bash
git clone https://github.com/aayxshkumar/parkitright.git
cd parkitright
```

API:

```bash
cd api
cp .env.example .env   # then fill in the values
npm ci
npm start              # runs index.js with nodemon, default port 8000
```

| Variable | Purpose |
| --- | --- |
| `PORT` | Port for the API (default 8000) |
| `DB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign JWTs |
| `JWT_EXPIRY` | JWT lifetime, for example `7d` |
| `COOKIE_TIME` | Cookie lifetime in days |
| `SESSION_SECRET` | Key for `cookie-session` |
| `CLOUDINARY_URL` | Cloudinary credentials, read by the Cloudinary SDK |

Client:

```bash
cd client
cp .env.example .env   # then fill in the values
npm ci
npm run dev
npm run build
```

| Variable | Purpose |
| --- | --- |
| `VITE_BASE_URL` | URL of the API, for example `http://localhost:8000` |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID for Google login |
