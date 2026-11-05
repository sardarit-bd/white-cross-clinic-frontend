"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import { useCart } from "@/providers/CartProvider";
import { products, MORE_INFO } from "../data/products";
import { formatPrice } from "../utils";
import QuantityStepper from "../components/QuantityStepper";
import CartLink from "../components/CartLink";

export default function ProductDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const { addItem, toggleWishlist, isWished } = useCart();
  const [qty, setQty] = useState(1);
  const [infoOpen, setInfoOpen] = useState(false);

  const index = products.findIndex((p) => p.slug === slug);
  const product = products[index];

  if (!product) {
    return (
      <div className="min-h-screen bg-[var(--bgLight)] px-4 pt-48 pb-24">
        <div className="container mx-auto rounded-2xl border border-[var(--borderSoft)] bg-white p-8 text-center">
          <p className="text-[var(--textDark)]">We could not find this product.</p>
          <Link
            href="/online-shop"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const prev = products[index - 1];
  const next = products[index + 1];
  const wished = isWished(product.id);

  const buyNow = () => {
    addItem(product, qty);
    router.push("/online-shop/checkout");
  };

  const navLink =
    "flex items-center gap-1 text-sm text-[var(--textDark)] hover:text-[var(--brandColor)]";
  const navOff = "flex items-center gap-1 text-sm text-[var(--textMuted)]";

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="bg-[var(--brandColor)] px-4 pt-40 pb-12">
        <h1 className="container mx-auto text-4xl font-extrabold text-white md:text-5xl">
          Product Description
        </h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--textDark)]">
            <Link href="/" className="hover:text-[var(--brandColor)]">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/online-shop" className="hover:text-[var(--brandColor)]">
              All Products
            </Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </nav>

          <div className="flex items-center gap-6">
            <CartLink />
            <div className="flex items-center gap-3">
              {prev ? (
                <Link href={`/online-shop/${prev.slug}`} className={navLink}>
                  <ChevronLeft size={14} /> Prev
                </Link>
              ) : (
                <span className={navOff}>
                  <ChevronLeft size={14} /> Prev
                </span>
              )}
              <span className="h-4 w-px bg-[var(--borderSoft)]" />
              {next ? (
                <Link href={`/online-shop/${next.slug}`} className={navLink}>
                  Next <ChevronRight size={14} />
                </Link>
              ) : (
                <span className={navOff}>
                  Next <ChevronRight size={14} />
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-10 pt-4 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative aspect-[16/9] overflow-hidden border border-[var(--borderSoft)] bg-[var(--bgLight)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width:768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--textDark)]">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-[var(--textDark)]">{product.name}</h2>
            <p className="mt-6 text-sm text-[var(--textLight)]">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 mb-2 text-sm text-[var(--textDark)]">Quantity *</p>
            <QuantityStepper value={qty} onChange={setQty} className="w-28" />

            <div className="mt-8 flex items-stretch gap-2">
              <button
                type="button"
                onClick={() => addItem(product, qty)}
                className="h-11 flex-1 rounded-full bg-[var(--brandColor)] text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
              <button
                type="button"
                aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                aria-pressed={wished}
                onClick={() => toggleWishlist(product)}
                className="flex h-11 w-11 items-center justify-center border border-[var(--brandColor)] text-[var(--brandColor)]"
              >
                <Heart size={20} fill={wished ? "currentColor" : "none"} />
              </button>
            </div>

            <button
              type="button"
              onClick={buyNow}
              className="mt-3 h-11 w-full rounded-full bg-[var(--textDark)] text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Buy Now
            </button>

            <div className="mt-8 border-t border-[var(--borderSoft)] pt-4">
              <button
                type="button"
                onClick={() => setInfoOpen(!infoOpen)}
                className="flex w-full items-center justify-between text-sm text-[var(--textDark)]"
              >
                More Info
                {infoOpen ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              {infoOpen && (
                <p className="mt-3 text-sm leading-6 text-[var(--textLight)]">
                  {MORE_INFO}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}