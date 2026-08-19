"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }) {
  // Sample/Initial Cart Item
  const cartItems = [
    {
      id: "1",
      name: "Full Body Health Screening",
      subtitle: "Self Collect Kit • Fast Results",
      price: 149.0,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-xs cursor-pointer"
          />

          {/* SIDE DRAWER PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white z-[1000] shadow-2xl flex flex-col border-l border-gray-200"
          >
            {/* DRAWER HEADER */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#0A111E] text-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-[var(--brandColor)]" />
                <h3 className="font-bold text-lg tracking-wide uppercase">Your Shopping Cart</h3>
                <span className="bg-[var(--brandColor)] text-white text-xs font-bold px-2 py-0.5">
                  {cartItems.length}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Shopping Cart Drawer"
              >
                <X size={22} />
              </button>
            </div>

            {/* DRAWER BODY: CART ITEMS LIST */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 border border-gray-200 shadow-xs flex justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-gray-900 leading-snug">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                      <p className="text-sm font-semibold text-[var(--brandColor)] pt-1">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between items-end shrink-0">
                      <button
                        onClick={() => {}}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                      <span className="text-xs text-gray-600 font-medium">Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center text-gray-500 space-y-3">
                  <ShoppingBag size={48} className="mx-auto text-gray-300 stroke-1" />
                  <p className="text-base font-medium">Your shopping cart is empty.</p>
                  <Link
                    href="/cart"
                    onClick={onClose}
                    className="inline-block bg-[var(--brandColor)] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[var(--brandColorDark)]"
                  >
                    View Full Cart
                  </Link>
                </div>
              )}
            </div>

            {/* DRAWER FOOTER */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-gray-200 bg-white space-y-4 shadow-lg">
                {/* Subtotal & Delivery Note */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-base font-bold text-gray-900">
                    <span>Subtotal:</span>
                    <span className="text-lg text-[var(--brandColor)]">£{subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Taxes and shipping calculated at checkout.
                  </p>
                </div>

                {/* Buttons */}
                <div className="space-y-2 pt-1">
                  <Link
                    href="/get-book"
                    onClick={onClose}
                    className="w-full bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white font-semibold text-sm py-3 px-4 flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/cart"
                    onClick={onClose}
                    className="w-full border border-gray-300 hover:border-gray-400 bg-gray-50 text-gray-800 text-center font-semibold text-xs py-2.5 px-4 block transition-colors"
                  >
                    View Full Cart & Shop
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
