"use client";

import { useAuth } from "@/hooks/useAuth";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";
import Navbar from "./Navbar";
import SearchArea from "./SearchArea";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white md:relative md:border-t-6 border-[var(--brandColor)] shadow-md">
        {/* ROW 1: TOP HEADER */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">

            {/* SEARCH AREA (Logo on Left, Search Bar in Middle, Cart & Account on Right) */}
            <div className="w-full">
              <SearchArea onOpenCart={() => setCartOpen(true)} />
            </div>

            {/* MOBILE QUICK ICONS & HAMBURGER BUTTON */}
            <div className="flex lg:hidden items-center gap-0 shrink-0">
              {/* Cart Icon Mobile (Triggers Cart Drawer) */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="p-2 text-gray-700 hover:text-[var(--brandColor)] relative transition-colors cursor-pointer focus:outline-none"
                aria-label="Cart"
              >
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 bg-[var(--brandColor)] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center shadow-xs rounded-full">
                  1
                </span>
              </button>

              {/* Account Icon Mobile (Navigates to Login/Dashboard) */}
              <Link
                href={user ? "/dashboard" : "/login"}
                className="p-2 text-gray-700 hover:text-[var(--brandColor)] transition-colors"
                aria-label="Account"
              >
                <User size={22} />
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[var(--brandColor)] focus:outline-none cursor-pointer transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: NAVBAR (BECOMES STICKY FIXED AT TOP-0 WHEN SCROLLING) */}
        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isSticky={isSticky}
        />

        {/* SPACER TO PREVENT LAYOUT SHIFT WHEN NAVBAR IS FIXED */}
        {isSticky && <div className="hidden lg:block h-[52px]" />}
      </header>

      {/* SHOPPING CART SIDE DRAWER */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
