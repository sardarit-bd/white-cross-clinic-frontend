"use client";

import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <TopBar />
      <Navbar />
    </header>
  );
}
