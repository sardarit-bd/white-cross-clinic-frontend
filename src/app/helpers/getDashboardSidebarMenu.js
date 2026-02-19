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
    { title: "My Appointments", href: "/dashboard/patient/appointments", icon: CalendarCheck },
    { title: "Purchase History", href: "/dashboard/purchase-history", icon: ShoppingBag },
    { title: "Profile", href: "/dashboard/profile", icon: User },
];


// ================================
// DOCTOR MENU
// ================================

const doctorMenu = [
    { title: "Dashboard", href: "/dashboard", icon: Home },

    {
        title: "Appointments",
        href: "/dashboard/doctor/appointments",
        icon: CalendarCheck
    },
    // {
    //     title: "Inbox",
    //     href: "/dashboard/doctor/chat",
    //     icon: Inbox
    // },

    // {
    //     title: "Write a Post",
    //     href: "/dashboard/doctor/write-post",
    //     icon: FileText
    // },

    // {
    //     title: "My Posts",
    //     href: "/dashboard/doctor/posts",
    //     icon: BookOpen
    // },

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

    // Unified Category + Department Page
    { title: "Categories", href: "/dashboard/admin/categories", icon: FolderTree },
    // { title: "Departments", href: "/dashboard/admin/departments", icon: BriefcaseMedical },

    // Blog System
    { title: "All Blog Posts", href: "/dashboard/admin/blog/posts", icon: FileText },

    // System Features
    { title: "Doctor Appointments", href: "/dashboard/admin/appointments", icon: CalendarCheck },
    { title: "Test Appointments", href: "/dashboard/admin/test-appointments", icon: CalendarCheck },
    { title: "Coupons", href: "/dashboard/admin/coupons", icon: Tag },
    { title: "Transactions", href: "/dashboard/admin/transactions", icon: ShoppingBag },

    // Live Chat Support
    { title: "Live Chat Support", href: "/dashboard/doctor/chat", icon: MessageSquare },
    { title: "Manage Admins", href: "/dashboard/admin/admins", icon: Shield },

];


// ================================
// EXPORT FUNCTION
// ================================

export function getDashboardSideMenu(role) {
    console.log("Determining sidebar menu for role:", role);
    if (role === "admin" || role === "super_admin") return adminMenu;
    if (role === "doctor") return doctorMenu;
    return patientMenu;
}
