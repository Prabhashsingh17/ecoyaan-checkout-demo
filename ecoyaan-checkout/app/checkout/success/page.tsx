import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          ✓
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Order successful!
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Thank you for choosing sustainable products. A confirmation email
          would be on its way in a real checkout.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

