"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import SidebarNav from "./Sidebarnav";
import { getDashboardSideMenu } from "@/app/helpers/getDashboardSidebarMenu";

export function DashboardSidebar() {
    const user = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const sidebarNavItems = getDashboardSideMenu(user?.role);

    return (
        <section>

            {/* =======================
                DESKTOP SIDEBAR
            ======================== */}
            <aside className="hidden sticky top-0 md:flex flex-col bg-[var(--bgLight)] text-[var(--textDark)] 
                             border-r border-[var(--borderLight)] 
                             min-h-screen w-[250px] shadow-[var(--shadowCard)]">

                {/* Top Branding */}
                <div className="flex items-center justify-center h-16 
                                border-b border-[var(--borderLight)] 
                                font-semibold text-lg text-[var(--brandColor)] tracking-wide">
                    Dashboard
                </div>

                <SidebarNav items={sidebarNavItems} />
            </aside>


            {/* =======================
                MOBILE OVERLAY
            ======================== */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            ></div>


            {/* =======================
                MOBILE DRAWER SIDEBAR
            ======================== */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 
                            bg-[var(--bgLight)] text-[var(--textDark)]
                            border-r border-[var(--borderLight)]
                            shadow-xl transform transition-transform duration-300 z-40
                            ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                            md:hidden`}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 
                                border-b border-[var(--borderLight)]">
                    <h2 className="text-lg font-semibold text-[var(--brandColor)]">Menu</h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-[var(--brandColor)] hover:text-[var(--brandColorDark)]"
                    >
                        <X size={26} />
                    </button>
                </div>

                <SidebarNav items={sidebarNavItems} />
            </aside>


            {/* =======================
                MOBILE TOP BAR
            ======================== */}
            <div className="md:hidden px-4 flex justify-between h-16 items-center 
                            bg-[var(--bgLight)] sticky top-0 z-20 w-full 
                            border-b border-[var(--borderLight)]
                            shadow-sm">

                <h2 className="font-semibold text-[var(--brandColor)] tracking-wide">
                    Hi, {user?.name || "User"}
                </h2>

                {/* Menu Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 rounded-lg bg-[var(--brandColor)] 
                               text-white shadow-md hover:bg-[var(--brandColorDark)] 
                               transition-colors"
                >
                    <Menu size={22} />
                </button>
            </div>
        </section>
    );
}
