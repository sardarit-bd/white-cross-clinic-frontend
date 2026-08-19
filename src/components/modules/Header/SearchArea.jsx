"use client";

import { useAuth } from "@/hooks/useAuth";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../../../public/logos/logo.png";
import mobileLogo from "../../../../public/logos/navLogo.png";

const SearchArea = ({ onOpenCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    } else {
      router.push("/search");
      setSearchTerm('');
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 lg:gap-8 w-full">
      {/* 1. LEFT: BIGGER & CLEAN LOGO */}
      <Link href="/" className="flex md:hidden items-center shrink-0 transition-opacity py-0.5">
        <Image
          src={mobileLogo}
          width={50}
          height={50}
          alt="White Cross Clinic Logo"
          className="object-contain"
          priority
        />
      </Link>

      <Link href="/" className="hidden md:flex items-center shrink-0 transition-opacity py-0.5">
        <Image
          src={logo}
          width={270}
          height={200}
          alt="White Cross Clinic Logo"
          className="object-contain"
          priority
        />
      </Link>

      {/* 2. MIDDLE: PREMIUM SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-2xl mx-auto flex items-center  hover:bg-[#EEF1F5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[var(--brandColor)]/20 border border-gray-200/90 overflow-hidden transition-all duration-200 bg-[#F5F7FA] shadow-xs"
      >
        <div className="pl-1 md:pl-3.5 text-gray-400 flex items-center justify-center pointer-events-none">
          <Search size={19} className="text-gray-400" />
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tests, doctors, services..."
          className="w-full py-1.5 md:py-2.5 px-1 md:px-3 bg-transparent text-gray-800 text-sm placeholder:text-gray-400 outline-none font-medium"
        />

        <button
          type="submit"
          aria-label="Search"
          className="bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white px-2 md:px-5 py-1.5 md:py-2.5 h-full flex items-center justify-center font-medium transition-colors cursor-pointer shrink-0 border border-[var(--brandColor)]"
        >
          <Search size={18} />
        </button>
      </form>

      {/* 3. RIGHT: CLEAN ICONS (CART & ACCOUNT) */}
      <div className="hidden lg:flex items-center gap-4 md:gap-5 shrink-0 pl-2">
        {/* Cart Icon Button (Triggers Cart Drawer) */}
        <button
          type="button"
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center group relative text-gray-700 hover:text-[var(--brandColor)] transition-colors py-0.5 cursor-pointer focus:outline-none"
          title="View Shopping Cart"
        >
          <div className="relative p-1.5 group-hover:bg-slate-100 transition-colors">
            <ShoppingCart size={25} className="stroke-[1.8] text-gray-700 group-hover:text-[var(--brandColor)] transition-colors" />
            <span className="absolute -top-1 -right-1 bg-[var(--brandColor)] text-white text-[12px] font-bold w-5 h-5 flex items-center justify-center border-2 border-white shadow-xs rounded-full">
              1
            </span>
          </div>
          <span className="text-[11px] font-medium text-gray-600 group-hover:text-[var(--brandColor)] transition-colors leading-none mt-0.5">
            Cart
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="h-7 w-[1px] bg-gray-200 hidden sm:block" />

        {/* Account Icon (Connects to Login Page) */}
        <Link
          href={user ? "/dashboard" : "/login"}
          className="flex flex-col items-center justify-center group text-gray-700 hover:text-[var(--brandColor)] transition-colors py-0.5"
          title={user ? "My Dashboard" : "Sign In / Account"}
        >
          <div className="p-1.5 group-hover:bg-slate-100 transition-colors">
            <User size={27} className="stroke-[1.8] text-gray-700 group-hover:text-[var(--brandColor)] transition-colors" />
          </div>
          <span className="text-[11px] font-medium text-gray-600 group-hover:text-[var(--brandColor)] transition-colors leading-none mt-0.5">
            Account
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SearchArea;