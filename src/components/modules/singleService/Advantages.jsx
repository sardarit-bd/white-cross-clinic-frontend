"use client";

const advantages = [
  {
    title: "Convenience",
    desc: "For individuals living in rural or underserved areas, accessing healthcare services can be challenging. Our Mobile Clinic helps bridge this gap by bringing quality healthcare directly to communities that may not have easy access to traditional medical facilities."
  },
  {
    title: "Accessibility",
    desc: "For individuals living in rural or underserved areas, accessing healthcare services can be challenging. Our Mobile Clinic helps bridge this gap by bringing quality healthcare directly to communities that may not have easy access to traditional medical facilities."
  },
  {
    title: "Cost-Effective",
    desc: "Visiting a traditional clinic can often involve expenses such as transportation costs and time off work. Our Mobile Clinic eliminates these additional costs, making healthcare more affordable and accessible for everyone."
  },
  {
    title: "Comprehensive Care",
    desc: "Our Mobile Clinic offers personalized attention and care from experienced healthcare professionals who are dedicated to meeting your individual needs. You'll receive the same high-quality care and attention that you would expect from a traditional clinic setting."
  },
  {
    title: "Personalized Attention",
    desc: "By bringing healthcare directly to communities, our Mobile Clinic fosters community engagement and empowerment. We work closely with local organizations and leaders to understand the unique healthcare needs of each community and tailor our services accordingly."
  },
  {
    title: "Community Engagement",
    desc: "Visiting a traditional clinic can often involve expenses such as transportation costs and time off work. Our Mobile Clinic eliminates these additional costs, making healthcare more affordable and accessible for everyone."
  }
];

export default function MobileClinicAdvantages() {
  return (
    <section className="container mx-auto px-4 py-20">

      {/* Subtitle */}
      <p className="text-center text-sm text-gray-500 uppercase tracking-wide">
        What You Will Get
      </p>

      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0C2A5A] mt-2 mb-12">
        Advantages Of Mobile Clinics Services
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="bg-[#0C2A5A] text-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
