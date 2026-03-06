# Ecoyaan Checkout Demo (MVP)
A simplified checkout flow inspired by Ecoyaan, built with **React** + **Next.js (App Router)** + **Tailwind CSS**.
It demonstrates a clean, responsive user flow:
**Cart → Shipping Address → Payment → Success**
---
### Tech Stack
- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
---
### Key Requirements Coverage
- **Server-Side Rendering data fetching**
  - The cart is rendered using **Server Components** and async server-side data loading in `app/page.tsx` via `fetchMockCart()` from `lib/mockCart.ts`.
- **Mock data**
  - Cart items, shipping fee, and discount are sourced from local mock data (as provided in the assignment).
- **State persistence across steps**
  - Shipping address is stored using **React Context** in `app/CheckoutProvider.tsx`, available across all checkout screens.
- **Form validation**
  - Shipping form validates required fields, email format, and a 10-digit phone number.
---
### Routes / Screens
- **`/` (Cart / Order Summary)**
  - Lists products (image, name, price, quantity)
  - Shows subtotal, shipping fee, discount, and grand total
  - Button: **Proceed to checkout**
- **`/checkout/shipping` (Shipping Address)**
  - Fields:
    - Full Name, Email, Phone Number, PIN Code, City, State
  - Validations:
    - Required fields
    - Valid email format
    - 10-digit phone number
  - Button: **Continue to payment**
- **`/checkout/payment` (Payment / Confirmation)**
  - Shows final order summary and entered address
  - Button: **Pay securely** (simulated)
- **`/checkout/success` (Success)**
  - “Order successful!” confirmation screen
---
### Project Structure (high level)
- `app/` – pages (App Router) + providers + global layout
- `components/` – reusable UI components (cart summary, stepper)
- `lib/` – mock cart data + fetch function
---
### Running Locally
1. Install dependencies:
```bash
npm install
Run dev server:
npm run dev
Open:
http://localhost:3000




<img width="1387" height="882" alt="image" src="https://github.com/user-attachments/assets/0b758bb7-f480-4f52-b6b3-bc3e28d14855" />
<img width="1592" height="731" alt="image" src="https://github.com/user-attachments/assets/66033d19-8777-4d16-8ada-e9216e81bae2" />
<img width="1410" height="910" alt="image" src="https://github.com/user-attachments/assets/f800763e-9ee4-4521-96cb-7d19ba03cebb" />
<img width="1406" height="709" alt="image" src="https://github.com/user-attachments/assets/fc623441-25c8-4a50-bb00-3683ef7f8970" />
<img width="1143" height="749" alt="image" src="https://github.com/user-attachments/assets/e13ce161-c8f8-414e-8ac6-da2e336a3758" />
