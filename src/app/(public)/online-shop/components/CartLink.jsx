"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/providers/CartProvider";

export default function CartLink() {
  const { count } = useCart();

  return (
    <Link
      href="/online-shop/cart"
      className="relative flex items-center gap-2 text-sm font-semibold text-[var(--textDark)] hover:text-[var(--brandColor)]"
    >
      <ShoppingCart size={20} />
      Cart
      {count > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--brandColor)] px-1 text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}