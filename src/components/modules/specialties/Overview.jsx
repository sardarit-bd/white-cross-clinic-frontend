import { ArrowRight } from 'lucide-react';
const specialties = [
    "Anaesthetics",
    "Cardiology",
    "ENT",
    "Eye Surgery",
    "Gastroenterology",
    "General Surgery",
    "Mens Health",
    "Oral Surgery",
    "Orthopaedics",
    "Pain Management",
    "Urology",
    "Womens Health",
];
export default function Overview() {
    return (
        <main className="flex-1 bg-white p-6 border border-gray-100">
            <h1 className="text-4xl font-extrabold text-[var(--textDark)] mb-6">
                Specialties
            </h1>

            <p className="text-[var(--textLight)] leading-relaxed max-w-3xl mb-10">
                At White Cross Clinic, we offer a range of specialist services to address specific health concerns and needs. Our team of experienced healthcare professionals has expertise in various areas.
            </p>
            <p className="text-[var(--textLight)] leading-relaxed max-w-3xl mb-10">
                Our specialist services are designed to provide comprehensive care for your specific needs, ensuring that you receive the best possible treatment and support. Whether you’re managing a chronic condition, seeking advice on men’s or women’s health, or need travel vaccinations, our team is here to help.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                {specialties.map((s, i) => (
                    <div
                        key={i}
                        href={`/specialties/${s.toLowerCase().replace(/ /g, "-")}`}
                        className="bg-gray-100 border border-[var(--borderLight)] p-6 transition group flex justify-between items-center"
                    >
                        <span className="font-semibold text-[var(--textDark)] text-lg group-hover:text-[var(--brandColor)]">
                            {s}
                        </span>
                        <ArrowRight
                            size={22}
                            className="text-[var(--textLight)] group-hover:text-[var(--brandColor)] transition"
                        />
                    </div>
                ))}

            </div>
        </main>
    )
}
