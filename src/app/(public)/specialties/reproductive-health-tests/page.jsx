export default function ReproductiveHealthTests() {
  const items = [
    { title: "Hormones", link: "#" },
    { title: "Infection", link: "#" },
    { title: "Lifestyle/Environment", link: "#" },
    { title: "Chromosomes/Genetics", link: "#" },
    {
      title: "Unexplained Infertility/Implantation Failure/Recurrent Miscarriage",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Reproductive Health Tests
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-[var(--bgWhite)]
                shadow-sm
                border border-[var(--borderLight)]
                rounded-[var(--radius-md)]
                p-5
                hover:shadow-[var(--shadowHover)]
                transition-all duration-200
                flex flex-col justify-between
              "
            >
              <h3 className="text-[var(--textDark)] font-semibold text-lg mb-6">
                {item.title}
              </h3>

              <a
                href={item.link}
                className="
                  text-[var(--brandColor)]
                  hover:text-[var(--brandColorDark)]
                  font-medium
                  text-sm
                  transition-all
                  flex items-center gap-1
                "
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
