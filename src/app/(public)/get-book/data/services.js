import {
  Stethoscope,
  Clock,
  Syringe,
  Plane,
  HeartPulse,
  Activity,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Offering Mobile Clinics",
    duration: 60,
    price: 60,
    icon: Stethoscope,
    category: "Mobile Clinics",
  },
  {
    id: 2,
    title: "Out Of Hours Services",
    duration: 80,
    price: 80,
    icon: Clock,
    category: "General Care",
  },
  {
    id: 3,
    title: "Immunisation",
    duration: 90,
    price: 60,
    icon: Syringe,
    category: "Vaccination",
  },
  {
    id: 4,
    title: "Travel Health",
    duration: 90,
    price: 60,
    icon: Plane,
    category: "Travel",
  },
  {
    id: 5,
    title: "Family Planning Services",
    duration: 120,
    price: 60,
    icon: HeartPulse,
    category: "Family Planning",
  },
  {
    id: 6,
    title: "Deep Veins Thrombosis Testing",
    duration: 120,
    price: 60,
    icon: Activity,
    category: "Diagnostics",
  },
];
