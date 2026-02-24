"use client";

export default function GallerySection() {
  const images = [
    "/images/gallery/1.webp",
    "/images/gallery/2.webp",
    "/images/gallery/3.webp",
    "/images/gallery/4.webp",
    "/images/gallery/5.webp",
    "/images/gallery/6.webp",
    "/images/gallery/7.webp",
    "/images/gallery/8.webp",
    "/images/gallery/9.webp",
  ];

  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto space-y-8">
        {/* Top Content Card */}
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)]">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--brandColor)" }}
          >
            Experience The White Cross Clinic Difference
          </h1>

          <p className="text-[var(--textDark)] leading-relaxed">
            At White Cross Clinic, we pride ourselves on offering exceptional private medical services tailored to meet your individual needs. Our gallery showcases the state-of-the-art facilities, dedicated healthcare professionals, and welcoming environment that set us apart. Discover how our commitment to personalised attention and prompt care is revolutionising the way you approach your health and well-being. Explore our spaces and see why your health is our top priority.
          </p>
        </div>

        {/* Gallery Title Card */}
        <div className="bg-white shadow-sm rounded-lg p-6 border border-[var(--borderLight)]">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--brandColor)" }}
          >
            Gallery
          </h2>
        </div>

        {/* Images Grid Card */}
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-8 border border-[var(--borderLight)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-md border border-[var(--borderLight)] bg-gray-50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
