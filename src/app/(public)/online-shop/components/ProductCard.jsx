"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
import { formatPrice } from "../utils";
import QuantityStepper from "./QuantityStepper";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const href = `/online-shop/${product.slug}`;

  return (
    <div className="flex flex-col">
      <div className="h-8">
        {product.isNew && (
          <span className="inline-block bg-[var(--brandColor)] px-3 py-1 text-xs font-semibold text-white">
            Just Arrived!
          </span>
        )}
      </div>

      <Link
        href={href}
        className="relative block aspect-[4/3] overflow-hidden bg-[var(--bgLight)]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 50vw"
          className="object-cover"
        />
      </Link>

      <button
        type="button"
        onClick={() => {
          addItem(product, qty);
          setQty(1);
        }}
        className="mt-2 w-full rounded-lg bg-[var(--brandColor)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Add to Cart
      </button>

      <Link
        href={href}
        className="mt-4 text-sm text-[var(--textDark)] hover:text-[var(--brandColor)]"
      >
        {product.name}
      </Link>
      <p className="mt-1 text-sm text-[var(--textLight)]">
        {formatPrice(product.price)}
      </p>

      <QuantityStepper value={qty} onChange={setQty} className="mt-3 w-full" />
    </div>
  );
}