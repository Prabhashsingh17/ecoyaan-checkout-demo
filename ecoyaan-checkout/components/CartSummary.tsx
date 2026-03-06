import Link from "next/link";
import type { MockCart } from "@/lib/mockCart";

type Props = {
  cart: MockCart;
};

export function CartSummary({ cart }: Props) {
  const subtotal = cart.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0,
  );
  const shipping = cart.shipping_fee;
  const total = subtotal + shipping - cart.discount_applied;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-5 shadow-card">
        <h1 className="mb-4 text-xl font-semibold tracking-tight">
          Your Cart
        </h1>
        <ul className="divide-y divide-slate-200">
          {cart.cartItems.map((item) => (
            <li key={item.product_id} className="flex gap-4 py-4">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {item.product_name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  ₹{item.product_price * item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-card">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Order Summary
        </h2>
        <dl className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Subtotal</dt>
            <dd className="font-medium text-slate-900">₹{subtotal}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Standard shipping</dt>
            <dd className="font-medium text-slate-900">₹{shipping}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Discount</dt>
            <dd className="font-medium text-emerald-600">
              -₹{cart.discount_applied}
            </dd>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
            <dt className="text-sm font-semibold text-slate-900">
              Grand total
            </dt>
            <dd className="text-lg font-semibold text-brand">
              ₹{total.toLocaleString("en-IN")}
            </dd>
          </div>
        </dl>
        <div className="mt-5">
          <Link
            href="/checkout/shipping"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            Proceed to checkout
          </Link>
        </div>
      </section>
    </div>
  );
}

