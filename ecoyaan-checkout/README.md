## Ecoyaan Checkout Demo

A simplified, multi-step checkout flow inspired by Ecoyaan, built with **Next.js 14 (App Router)**, **React**, and **Tailwind CSS**.

The flow guides a user from reviewing their cart to entering a shipping address, choosing a payment method, and seeing an order success state.

### Architecture

- **Next.js App Router** with server components.
- **Server-side data fetching** is demonstrated on the cart page (`app/page.tsx`) by asynchronously loading mock cart data from `lib/mockCart.ts`.
- **State management**:
  - A lightweight **Context API** provider (`app/CheckoutProvider.tsx`) stores the shipping address and makes it available across steps.
  - Cart data is read on the server on each relevant page from a shared mock source.
- **Styling**:
  - Tailwind CSS for a clean, responsive, modern UI.
  - Mobile-friendly layout with a centered, constrained content column.

### Screens / Flow

- **Cart / Order Summary (`/`)**
  - Server component fetches mock cart data during SSR.
  - `CartSummary` component displays items, subtotal, shipping, and grand total.
  - CTA button: **"Proceed to checkout"** → `/checkout/shipping`.
- **Shipping Address (`/checkout/shipping`)**
  - Client component `ShippingForm` with controlled fields:
    - Full Name, Email, Phone Number, PIN Code, City, State.
  - Basic validation:
    - Required fields.
    - Email format check.
    - 10-digit phone number.
  - On success, address is stored in context and user is navigated to `/checkout/payment`.
- **Payment / Confirmation (`/checkout/payment`)**
  - Client component `PaymentContent`:
    - Redirects back to shipping if no address is stored.
    - Displays shipping address summary and order total (recomputed from mock cart).
    - Simulated **"Pay securely"** button; shows a short loading state and then navigates to `/checkout/success`.
- **Success (`/checkout/success`)**
  - Simple confirmation card with a success icon and a button to go back home.

### Running the Project Locally

1. **Install dependencies**

```bash
npm install
```

2. **Start the development server**

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

### Deployment

This project is ready to be deployed to any Next.js-compatible hosting provider, such as **Vercel**:

1. Push this repository to GitHub or GitLab.
2. On Vercel:
   - Create a new project.
   - Import your repository.
   - Use the default Next.js build settings (`npm install`, `npm run build`, `npm start`).

No special environment variables are required.

