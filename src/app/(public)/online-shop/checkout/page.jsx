"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/providers/CartProvider";
import { formatPrice, SHIPPING_FEE } from "../utils";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postcode: "",
  country: "",
  notes: "",
};

const REQUIRED = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  address: "Address",
  city: "City",
  postcode: "Postcode",
  country: "Country",
};

function validate(form) {
  const errors = {};
  Object.entries(REQUIRED).forEach(([key, label]) => {
    if (!form[key].trim()) errors[key] = `${label} is required`;
  });
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  return errors;
}

function Field({ label, name, form, errors, onChange, type = "text", className = "" }) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-bold uppercase tracking-widest text-[var(--textMuted)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={form[name]}
        onChange={onChange}
        className={`w-full rounded-lg border bg-[var(--bgLight)] px-3 py-3 text-sm text-[var(--textDark)] outline-none focus:border-[var(--brandColor)] ${
          errors[name] ? "border-[var(--brandRed)]" : "border-[var(--borderSoft)]"
        }`}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-[var(--brandRed)]">{errors[name]}</p>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const shipping = items.length ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO (backend): POST the order to the API and start payment here.
    setOrder({
      id: `WCC-${Date.now().toString().slice(-8)}`,
      items,
      subtotal,
      shipping,
      total,
      customer: form,
    });
    clearCart();
  };

  if (order) {
    return (
      <div className="min-h-screen bg-[var(--bgLight)] px-4 pt-48 pb-24">
        <div className="container mx-auto max-w-2xl rounded-2xl border border-[var(--borderLight)] bg-white p-8 text-center shadow-[var(--shadowCard)]">
          <CheckCircle2 size={48} className="mx-auto text-[var(--brandColor)]" />
          <h1 className="mt-4 text-3xl font-extrabold text-[var(--textDark)]">
            Order Placed
          </h1>
          <p className="mt-2 text-sm text-[var(--textLight)]">
            Thank you, {order.customer.firstName}. Your order number is{" "}
            <span className="font-bold text-[var(--textDark)]">{order.id}</span>.
          </p>

          <div className="mt-6 divide-y divide-[var(--borderSoft)] border-y border-[var(--borderSoft)] text-left text-sm">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 py-3">
                <span className="text-[var(--textDark)]">
                  {item.name} × {item.qty}
                </span>
                <span className="text-[var(--textDark)]">
                  {formatPrice(item.price * item.qty)}
                </span>
              </div>
            ))}
            <div className="flex justify-between py-3 font-bold text-[var(--textDark)]">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>

          <Link
            href="/online-shop"
            className="mt-6 inline-block rounded-lg bg-[var(--brandColor)] px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bgLight)] px-4 pt-48 pb-24">
        <div className="container mx-auto rounded-2xl border border-[var(--borderSoft)] bg-white p-8 text-center">
          <p className="text-[var(--textDark)]">Your cart is empty.</p>
          <Link
            href="/online-shop"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bgLight)] px-4 pt-48 pb-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--textDark)]">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"
        >
          <div className="rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] md:p-8">
            <h2 className="mb-6 text-lg font-bold text-[var(--textDark)]">
              Delivery Details
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="First name" name="firstName" form={form} errors={errors} onChange={handleChange} />
              <Field label="Last name" name="lastName" form={form} errors={errors} onChange={handleChange} />
              <Field label="Email" name="email" type="email" form={form} errors={errors} onChange={handleChange} />
              <Field label="Phone" name="phone" type="tel" form={form} errors={errors} onChange={handleChange} />
              <Field label="Address" name="address" form={form} errors={errors} onChange={handleChange} className="md:col-span-2" />
              <Field label="City" name="city" form={form} errors={errors} onChange={handleChange} />
              <Field label="Postcode" name="postcode" form={form} errors={errors} onChange={handleChange} />
              <Field label="Country" name="country" form={form} errors={errors} onChange={handleChange} className="md:col-span-2" />
              <div className="md:col-span-2">
                <label
                  htmlFor="notes"
                  className="mb-1 block text-xs font-bold uppercase tracking-widest text-[var(--textMuted)]"
                >
                  Order notes (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[var(--borderSoft)] bg-[var(--bgLight)] px-3 py-3 text-sm text-[var(--textDark)] outline-none focus:border-[var(--brandColor)]"
                />
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)]">
            <h2 className="text-lg font-bold text-[var(--textDark)]">Order Summary</h2>

            <div className="mt-4 divide-y divide-[var(--borderSoft)]">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 py-3">
                  <div className="relative h-14 w-16 shrink-0 overflow-hidden bg-[var(--bgLight)]">
                    <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 text-sm text-[var(--textDark)]">
                    <p>{item.name}</p>
                    <p className="text-[var(--textLight)]">Qty {item.qty}</p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--textDark)]">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3 border-t border-(--borderSoft) pt-4 text-sm text-(--textDark)">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-(--brandColor) py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Place Order
            </button>
            <Link
              href="/online-shop/cart"
              className="mt-3 block text-center text-sm font-semibold text-(--brandColor) hover:underline"
            >
              Back to cart
            </Link>
          </aside>
        </form>
      </div>
    </div>
  );
}