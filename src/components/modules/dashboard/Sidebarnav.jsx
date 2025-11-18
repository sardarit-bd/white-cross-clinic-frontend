import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ items }) {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col px-4 py-6 space-y-2 text-[var(--textDark)] w-full">

            {items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
                            ${isActive
                                ? "bg-[var(--brandColor)] text-white shadow-md"
                                : "hover:bg-[var(--brandColorLight)] hover:text-[var(--brandColor)]"
                            }
                        `}
                    >
                        {Icon && (
                            <Icon
                                size={18}
                                className={`transition-colors 
                                    ${isActive ? "text-white" : "group-hover:text-[var(--brandColor)]"}
                                `}
                            />
                        )}
                        <span>{item.title}</span>
                    </Link>
                );
            })}

            {/* Logout Button */}
            <Link
                href="/"
                className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all 
                    border border-[var(--borderLight)]
                    hover:bg-[var(--brandColorLight)] hover:text-[var(--brandColor)]
                "
            >
                <LogOut size={18} />
                <span>Logout</span>
            </Link>
        </nav>
    );
}
