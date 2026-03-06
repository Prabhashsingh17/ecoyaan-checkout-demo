"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/app/CheckoutProvider";
import { fetchMockCart } from "@/lib/mockCart";
import { useEffect, useState } from "react";

export function PaymentContent() {
  const router = useRouter();
  const { address } = useCheckout();
  const [isPaying, setIsPaying] = useState(false);
  const [orderTotal, setOrderTotal] = useState<number | null>(null);

  useEffect(() => {
    async function loadCartTotal() {
      const cart = await fetchMockCart();
      const subtotal = cart.cartItems.reduce(
        (sum, item) => sum + item.product_price * item.quantity,
        0,
      );
      const total = subtotal + cart.shipping_fee - cart.discount_applied;
      setOrderTotal(total);
    }
    loadCartTotal();
  }, []);

  useEffect(() => {
    if (!address) {
      router.replace("/checkout/shipping");
    }
  }, [address, router]);

  const handlePay = () => {
    if (isPaying) return;
    setIsPaying(true);
    router.push("/checkout/success");
  };

  if (!address) {
    return null;
  }

  return (
    <div className="space-y-4">
      <section className="rounded-2xl bg-white p-5 shadow-card">
        <h1 className="mb-2 text-xl font-semibold tracking-tight">
          Payment
        </h1>
        <p className="mb-4 text-sm text-slate-600">
          Review your details and complete your secure payment.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Shipping to
            </h2>
            <div className="mt-2 text-sm text-slate-800">
              <p className="font-medium">{address.fullName}</p>
              <p>{address.city}</p>
              <p>
                {address.state} – {address.pinCode}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {address.email} · {address.phone}
              </p>
            </div>
            <Link
              href="/checkout/shipping"
              className="mt-3 inline-flex text-xs font-medium text-brand hover:text-brand-dark"
            >
              Edit address
            </Link>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Payment method
            </h2>
            <p className="mt-2 text-sm text-slate-800">
              This is a demo flow. Click the button below to simulate a
              secure payment.
            </p>
            {orderTotal !== null && (
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Amount payable:{" "}
                <span className="text-brand">
                  ₹{orderTotal.toLocaleString("en-IN")}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            Back to cart
          </Link>
          <button
            type="button"
            onClick={handlePay}
            disabled={isPaying}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand/70 md:w-auto"
          >
            {isPaying ? "Processing payment..." : "Pay securely"}
          </button>
        </div>
      </section>
    </div>
  );
}

