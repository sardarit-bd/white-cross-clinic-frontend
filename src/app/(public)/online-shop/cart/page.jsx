"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/providers/CartProvider";
import { formatPrice, SHIPPING_FEE } from "../utils";
import QuantityStepper from "../components/QuantityStepper";

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const shipping = items.length ? SHIPPING_FEE : 0;

  return (
    <div className="min-h-screen bg-white px-4 pt-48 pb-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold text-[var(--textDark)]">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[var(--borderSoft)] bg-[var(--bgLight)] p-10 text-center">
            <p className="text-[var(--textDark)]">Your cart is empty.</p>
            <Link
              href="/online-shop"
              className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="divide-y divide-[var(--borderSoft)] border-y border-[var(--borderSoft)]">
              {items.map((item) => (
                <div key={item.id} className="flex flex-wrap items-center gap-4 py-5">
                  <Link
                    href={`/online-shop/${item.slug}`}
                    className="relative h-20 w-24 shrink-0 overflow-hidden bg-[var(--bgLight)]"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="min-w-[160px] flex-1">
                    <Link
                      href={`/online-shop/${item.slug}`}
                      className="text-sm text-[var(--textDark)] hover:text-[var(--brandColor)]"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-[var(--textLight)]">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <QuantityStepper
                    value={item.qty}
                    onChange={(q) => updateQty(item.id, q)}
                    className="w-28"
                  />

                  <p className="w-24 text-right text-sm font-semibold text-[var(--textDark)]">
                    {formatPrice(item.price * item.qty)}
                  </p>

                  <button
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeItem(item.id)}
                    className="text-[var(--textMuted)] hover:text-[var(--brandRed)]"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-2xl border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)]">
              <h2 className="text-lg font-bold text-[var(--textDark)]">Order Summary</h2>
              <div className="mt-4 space-y-3 text-sm text-[var(--textDark)]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between border-t border-[var(--borderSoft)] pt-3 text-base font-bold">
                  <span>Total</span>
                  <span>{formatPrice(subtotal + shipping)}</span>
                </div>
              </div>

              <Link
                href="/online-shop/checkout"
                className="mt-6 block rounded-lg bg-[var(--brandColor)] py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/online-shop"
                className="mt-3 block text-center text-sm font-semibold text-[var(--brandColor)] hover:underline"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}