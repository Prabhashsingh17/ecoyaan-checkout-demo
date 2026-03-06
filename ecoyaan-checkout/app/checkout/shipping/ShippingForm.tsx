"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckout, Address } from "@/app/CheckoutProvider";

type Errors = Partial<Record<keyof Address, string>>;

const initialState: Address = {
  fullName: "",
  email: "",
  phone: "",
  pinCode: "",
  city: "",
  state: "",
};

export function ShippingForm() {
  const router = useRouter();
  const { address, setAddress } = useCheckout();
  const [values, setValues] = useState<Address>(address ?? initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: Address): Errors => {
    const nextErrors: Errors = {};

    if (!data.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    if (!data.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      nextErrors.phone = "Phone number must be 10 digits.";
    }
    if (!data.pinCode.trim()) {
      nextErrors.pinCode = "PIN code is required.";
    }
    if (!data.city.trim()) {
      nextErrors.city = "City is required.";
    }
    if (!data.state.trim()) {
      nextErrors.state = "State is required.";
    }

    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setAddress(values);
      router.push("/checkout/payment");
    }
  };

  const fieldClasses =
    "mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40";

  const errorClasses = "mt-1 text-xs text-red-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-5 shadow-card"
      noValidate
    >
      <h1 className="mb-2 text-xl font-semibold tracking-tight">
        Shipping address
      </h1>
      <p className="mb-4 text-sm text-slate-600">
        We&apos;ll use this information to deliver your eco-friendly
        products.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Full name
            <input
              type="text"
              name="fullName"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.fullName && (
            <p className={errorClasses}>{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.email && (
            <p className={errorClasses}>{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Phone number
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.phone && (
            <p className={errorClasses}>{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            PIN code
            <input
              type="text"
              name="pinCode"
              inputMode="numeric"
              value={values.pinCode}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.pinCode && (
            <p className={errorClasses}>{errors.pinCode}</p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            City
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.city && (
            <p className={errorClasses}>{errors.city}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">
            State
            <input
              type="text"
              name="state"
              value={values.state}
              onChange={handleChange}
              className={fieldClasses}
              required
            />
          </label>
          {errors.state && (
            <p className={errorClasses}>{errors.state}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:w-auto"
        >
          Continue to payment
        </button>
      </div>
    </form>
  );
}

