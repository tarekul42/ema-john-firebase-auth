# Ema John E-Commerce

An e-commerce SPA built with React and Firebase, featuring product browsing, cart management, checkout flow, and Firebase authentication.

## Features

- **Product catalog**: Browse products with cart persistence via localStorage
- **Cart management**: Add/remove items with localStorage-backed persistence
- **Checkout flow**: Complete purchase flow with order confirmation
- **Firebase authentication**: Email/password and Google sign-in
- **Protected routes**: Auth-guarded checkout and order pages
- **Data loaders**: React Router loader pattern for efficient data fetching
- **Firebase hosting**: Deployed and ready for Firebase Hosting

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 4 |
| Routing | React Router DOM 6 |
| Auth | Firebase 10 |
| Styling | FontAwesome 6 |
| Deployment | Firebase Hosting |

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
src/
├── components/       # UI components
├── FIrebase/         # Firebase configuration
├── loaders/          # Data loaders (cartProductsLoader)
├── Providers/        # AuthProvider context
├── Routes/           # Route definitions + PrivateRoute
├── utilities/        # localStorage helpers (fakedb)
└── fakeData/         # Mock product data
```
