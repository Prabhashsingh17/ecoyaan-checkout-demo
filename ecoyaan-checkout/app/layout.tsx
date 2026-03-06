import "./globals.css";
import type { Metadata } from "next";
import { CheckoutProvider } from "./CheckoutProvider";
import { CheckoutSteps } from "@/components/CheckoutSteps";

export const metadata: Metadata = {
  title: "Ecoyaan Checkout Demo",
  description: "Simplified checkout flow inspired by Ecoyaan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <CheckoutProvider>
          <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6">
            <header className="mb-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white font-semibold">
                  E
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  Ecoyaan Checkout
                </span>
              </div>
              </div>
              <CheckoutSteps />
            </header>
            <main className="flex-1">{children}</main>
            <footer className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
              Built as a demo checkout flow.
            </footer>
          </div>
        </CheckoutProvider>
      </body>
    </html>
  );
}

