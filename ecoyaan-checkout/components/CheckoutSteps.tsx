"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { id: 1, label: "Cart", href: "/" },
  { id: 2, label: "Shipping", href: "/checkout/shipping" },
  { id: 3, label: "Payment", href: "/checkout/payment" },
  { id: 4, label: "Success", href: "/checkout/success" },
];

export function CheckoutSteps() {
  const pathname = usePathname();

  const currentIndex =
    steps.findIndex((step) =>
      pathname === "/"
        ? step.href === "/"
        : pathname.startsWith(step.href),
    ) || 0;

  return (
    <nav
      aria-label="Checkout steps"
      className="mb-4 flex flex-wrap items-center gap-3 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-200/60 backdrop-blur"
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <div key={step.id} className="flex items-center gap-2">
            <Link
              href={step.href}
              className={[
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition",
                isCurrent
                  ? "bg-brand text-white shadow-sm"
                  : isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-500",
              ].join(" ")}
            >
              {isCompleted ? "✓" : step.id}
            </Link>
            <span
              className={[
                "text-xs font-medium",
                isCurrent
                  ? "text-slate-900"
                  : isCompleted
                  ? "text-slate-600"
                  : "text-slate-400",
              ].join(" ")}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <span className="mx-1 hidden h-px w-6 rounded bg-slate-200/80 sm:block" />
            )}
          </div>
        );
      })}
    </nav>
  );
}

