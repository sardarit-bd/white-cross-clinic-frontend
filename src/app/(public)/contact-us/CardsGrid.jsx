import Link from "next/link";

export default function CardsGrid() {
    return (
        <div className="container my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
                className="bg-white border border-gray-200 p-6 flex flex-col"
            >
                <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
                    Convenient Location - Easy Access to Quality Healthcare
                </h3>

                <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
                    At White Cross Clinic, we understand that accessing quality healthcare shouldn’t be a hassle. That’s why we’re conveniently located in the heart of Meanwhile Garden Medical Centre Westbourne Park 5 Elkstone Rd, London W105NT Trains and Buses Hammersmith & City line (buses 23, 28,31,7), with easy access to public transportation and ample parking. Our clinic is situated in a quiet and discreet area, ensuring that your visit is private and confidential. You can expect:
                    <ul className="my-5 list-disc ml-5">
                        <li>Easy access to our clinic by car, bus, or train</li>
                        <li>Ample parking and wheelchair accessibility</li>
                        <li>A quiet and discreet location for your privacy</li>
                    </ul>
                    We've made it easy for you to prioritise your health and well-being, without the hassle of long commutes or inconvenient locations
                </p>

                <Link
                    href="https://maps.app.goo.gl/ukR4ju8hweJF9LMb7"
                    target="_black"
                    className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
                >
                    Get Directions →
                </Link>
            </div>
            <div
                className="bg-white border border-gray-200 p-6 flex flex-col"
            >
                <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
                    Opening Hours - Flexible Appointments to Suit Your Schedule
                </h3>

                <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
                    At White Cross Clinic, we understand that your time is valuable, and that’s why we offer flexible appointment scheduling to suit your busy schedule. Our opening hours are designed to accommodate early risers, busy professionals, and families with children, ensuring that you can access quality healthcare at a time that works for you. Our opening hours are: <ul className="my-5 list-disc ml-5">
                        <li>Monday to Saturday: 09 AM – 10 PM</li>
                        <li>Saturday: 10 AM – 06PM</li>
                    </ul>  We also offer extended hours for urgent appointments and emergencies, because we know that health issues don’t always follow a 9-to-5 schedule.
                </p>

                <span
                    className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
                >
                    Read More →
                </span>
            </div>

            <div
                className="bg-white border border-gray-200 p-6  flex flex-col"
            >
                <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
                    Booking an Appointment - Easy and Convenient
                </h3>

                <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
                    At White Cross Clinic, we make it easy and convenient to book an appointment that suits your schedule. You can book an appointment:  <ul className="my-5 list-disc ml-5">
                        <li>Online: through our website or patient portal</li>
                        <li> Phone: by calling our friendly reception team</li>
                        <li> In-person: by visiting our clinic during opening hours</li>
                    </ul>  We offer same-day appointments for urgent cases, and we’ll do our best to accommodate your preferred time and doctor. Simply let us know your availability, and we’ll take care of the rest.
                </p>

                <span
                    className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
                >
                    Book An Appointment →
                </span>
            </div>

            <div
                className="bg-white border border-gray-200 p-6 flex flex-col"
            >
                <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
                    Our Team - Experienced and Caring Healthcare Professionals
                </h3>

                <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
                    At White Cross Clinic, our team of experienced and caring healthcare professionals is dedicated to providing you with the best possible care. Our team includes: <ul className="my-5 list-disc ml-5">
                        <li>General Practitioners (GPs)</li>
                        <li>Specialist Doctors</li>
                        <li>Nurses and Healthcare Assistants</li>
                        <li>Administrative and Support Staff</li>
                    </ul>  Our team is passionate about delivering high-quality, patient-centered care, and we’re committed to ongoing training and professional development to ensure we stay up-to-date with the latest medical knowledge and
                </p>

                <span
                    className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
                >
                    Read More →
                </span>
            </div>
        </div>
    );
}