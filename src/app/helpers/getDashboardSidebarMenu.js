import {
    Home,
    Users,
    User,
    UserCheck,
    Shield,
    Search,
    CalendarCheck,
    ShoppingBag,
    BarChart3,
    CreditCard,
    FileText,
    BookOpen,
    Tag,
    MessageSquare,
    FolderTree,
    BriefcaseMedical,
    Inbox,
} from "lucide-react";

// ================================
// PATIENT MENU
// ================================

const patientMenu = [
    { title: "Dashboard", href: "/dashboard", icon: Home },
    { title: "Search Medical Info", href: "/dashboard/search", icon: Search },
    { title: "My Appointments", href: "/dashboard/appointments", icon: CalendarCheck },
    { title: "Purchase History", href: "/dashboard/purchase-history", icon: ShoppingBag },
    { title: "Profile", href: "/dashboard/profile", icon: User },
];


// ================================
// DOCTOR MENU
// ================================

const doctorMenu = [
    { title: "Dashboard", href: "/dashboard", icon: Home },

    {
        title: "Patients",
        href: "/dashboard/doctor/patients",
        icon: Users,
    },

    {
        title: "Appointments",
        href: "/dashboard/doctor/appointments",
        icon: CalendarCheck
    },
    {
        title: "Inbox",
        href: "/dashboard/doctor/chat",
        icon: Inbox
    },

    {
        title: "Write a Post",
        href: "/dashboard/doctor/write-post",
        icon: FileText
    },

    {
        title: "My Posts",
        href: "/dashboard/doctor/posts",
        icon: BookOpen
    },

    {
        title: "My Schedule",
        href: "/dashboard/doctor/my-schedule",
        icon: BriefcaseMedical
    },

    {
        title: "Profile",
        href: "/dashboard/doctor/profile",
        icon: User
    },
];



// ================================
// ADMIN MENU
// ================================

const adminMenu = [
    { title: "Dashboard", href: "/dashboard", icon: Home },

    // User Management
    { title: "Manage Patients", href: "/dashboard/admin/patients", icon: Users },
    { title: "Manage Doctors", href: "/dashboard/admin/doctors", icon: UserCheck },
    { title: "Manage Admins", href: "/dashboard/admin/admins", icon: Shield },

    // Unified Category + Department Page
    { title: "Categories & Departments", href: "/dashboard/admin/categories", icon: FolderTree },

    // Blog System
    { title: "All Blog Posts", href: "/dashboard/admin/blog/posts", icon: FileText },

    // System Features
    { title: "Appointments", href: "/dashboard/admin/appointments", icon: CalendarCheck },
    { title: "Search Settings", href: "/dashboard/admin/search-settings", icon: Search },
    { title: "Coupons", href: "/dashboard/admin/coupons", icon: Tag },
    { title: "Transactions", href: "/dashboard/admin/transactions", icon: ShoppingBag },
    //   { title: "Reports & Analytics", href: "/dashboard/admin/reports", icon: BarChart3 },

    // Live Chat Support
    { title: "Live Chat Support", href: "/dashboard/admin/live-chat", icon: MessageSquare },

    // Settings
    //   { title: "Settings", href: "/dashboard/admin/settings", icon: CreditCard },
];


// ================================
// EXPORT FUNCTION
// ================================

export function getDashboardSideMenu(role) {
    if (role === "admin") return adminMenu;
    if (role === "doctor") return doctorMenu;
    return patientMenu;
}
