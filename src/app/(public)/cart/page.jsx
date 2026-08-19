"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Tag,
  Truck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Full Body Health Screening",
      subtitle: "Self Collect Kit • Fast 24-48h Results",
      category: "Health Screening",
      price: 149.0,
      quantity: 1,
    },
    {
      id: "2",
      name: "Private Vitamin D & B12 Profile",
      subtitle: "Venous Blood Sample • Complete Lab Report",
      category: "Blood & Lab Tests",
      price: 89.0,
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "WHITE10") {
      setDiscount(15);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'WHITE10' for a discount!");
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - discount);

  return (
    <div className="min-h-screen bg-slate-50 pt-6 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-9 space-y-6">
        {/* Banner Header */}
        <div className="bg-[#0A111E] text-white p-6 sm:p-8 border-b-2 border-[var(--brandColor)] space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[var(--brandColor)]/20 text-[var(--brandColor)] text-[11px] font-bold uppercase tracking-wider">
            <ShoppingBag size={14} />
            <span>Healthcare Shopping Cart</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Your Selected Tests & Medical Kits
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Review your healthcare tests, quantity, and applied vouchers before proceeding to instant checkout.
          </p>
        </div>

        {/* Main Cart Content Grid */}
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Items Table & Voucher (2/3 width) */}
            <div className="flex-1 w-full space-y-6">
              {/* Items Table */}
              <div className="bg-white border border-gray-200 shadow-xs overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#0A111E] text-white text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4">Item & Details</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Total</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-800 font-medium">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="p-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brandColor)] bg-blue-50 px-2 py-0.5">
                              {item.category}
                            </span>
                            <h3 className="font-bold text-sm text-gray-900 leading-snug">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500">{item.subtitle}</p>
                          </div>
                        </td>
                        <td className="p-4 font-bold text-gray-900">£{item.price.toFixed(2)}</td>
                        <td className="p-4">
                          <div className="flex items-center border border-gray-300 w-fit">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 font-bold text-xs text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </td>
                        <td className="p-4 font-extrabold text-[var(--brandColor)] text-base">
                          £{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon Code Input Box */}
              <div className="bg-white border border-gray-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-[var(--brandColor)] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Have a Promo Code?
                    </p>
                    <p className="text-[11px] text-gray-500">Enter your code to claim instant discount</p>
                  </div>
                </div>

                <form onSubmit={handleApplyCoupon} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code (e.g. WHITE10)"
                    className="border border-gray-300 px-3 py-2 text-xs text-gray-900 uppercase font-semibold focus:outline-none focus:border-[var(--brandColor)] flex-1 sm:w-48"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2 cursor-pointer transition-colors shrink-0"
                  >
                    Apply
                  </button>
                </form>
              </div>

              {couponApplied && (
                <div className="bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Promo code "WHITE10" applied! You saved £15.00 on your order.</span>
                </div>
              )}
            </div>

            {/* Right Summary & Checkout Panel (1/3 width) */}
            <div className="w-full lg:w-96 shrink-0 space-y-4">
              <div className="bg-white border border-gray-200 p-6 space-y-5 shadow-xs">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900">
                    Order Summary
                  </h3>
                  <p className="text-[11px] text-gray-400">Total order price including kit dispatch</p>
                </div>

                <div className="space-y-2.5 text-xs text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">£{subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-center text-emerald-600">
                      <span>Discount (WHITE10)</span>
                      <span className="font-bold">- £{discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <Truck size={13} className="text-gray-400" />
                      Standard Kit Shipping
                    </span>
                    <span className="font-bold text-emerald-600 uppercase">Free</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-gray-400 pt-1">
                    <span>VAT / Taxes</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
                    Total Amount
                  </span>
                  <span className="text-2xl font-extrabold text-[var(--brandColor)]">
                    £{finalTotal.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Actions */}
                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/get-book"
                    className="w-full bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/onlineshop"
                    className="w-full border border-gray-300 hover:border-gray-400 bg-gray-50 text-gray-700 text-center font-semibold text-xs py-3 px-4 block transition-colors"
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      <ArrowLeft size={14} />
                      <span>Continue Shopping</span>
                    </span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-3 border-t border-gray-100 space-y-2 text-[11px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                    <span>100% CQC Regulated Healthcare Provider</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck size={16} className="text-[var(--brandColor)] shrink-0" />
                    <span>Discrete & Confidential Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-16 text-center space-y-4 max-w-lg mx-auto shadow-xs">
            <ShoppingBag size={56} className="mx-auto text-gray-300 stroke-1" />
            <h2 className="text-xl font-bold text-gray-900">Your Shopping Cart is Empty</h2>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              You haven't added any tests or medical screening packages to your cart yet.
            </p>
            <div className="pt-2">
              <Link
                href="/onlineshop"
                className="inline-flex items-center gap-2 bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white text-xs font-semibold px-6 py-3 transition-colors cursor-pointer"
              >
                <span>Browse Online Shop</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
