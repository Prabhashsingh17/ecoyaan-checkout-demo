import { CartSummary } from "@/components/CartSummary";
import { fetchMockCart } from "@/lib/mockCart";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const cart = await fetchMockCart();

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Review your cart items before proceeding to secure checkout.
      </p>
      <CartSummary cart={cart} />
    </div>
  );
}

