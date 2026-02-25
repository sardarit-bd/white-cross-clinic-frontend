const cards = [
  {
    title: "Careers",
    text: "WCPC eViewPlus allows practices without a linked practice management system to create customised patient request forms and search results."
  },
  {
    title: "Consultants",
    text: "Each department in the laboratory is consultant-led."
  },
  {
    title: "Contacts",
    text: "Contact information for Patient Reception, and for the main London (Halo) and Manchester laboratories."
  },
  {
    title: "Corporate information",
    text: "Our policies, terms and conditions, and corporate reports."
  },
  {
    title: "Executive Board",
    text: "Our activities are managed by a leadership team made up of senior managers from across the organisation."
  },
  {
    title: "Our customers",
    text: "We work with healthcare providers and organisations across the UK and overseas."
  },
  {
    title: "Publications",
    text: "The latest WCPC Laboratory Guide, and supporting documents."
  },
  {
    title: "Quality Assurance",
    text: "The quality of results is of fundamental importance, and the laboratory operates to stringent technical and administrative standards."
  },
  {
    title: "WCPC Customer Charter",
    text: "As a dynamic, rapidly-expanding organisation, WCPC is always looking for ambitious, well-qualified, experienced medical laboratory staff."
  },
  {
    title: "WCPC News",
    text: "Latest corporate updates."
  },
  {
    title: "Our core values",
    text: "Our Core Values act as guiding principles for how we conduct ourselves as an organization."
  },
];

export default function CardsGrid() {
  return (
    <div className="container my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col"
        >
          <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
            {card.title}
          </h3>

          <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
            {card.text}
          </p>

          <span
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] cursor-pointer"
          >
            Read More →
          </span>
        </div>
      ))}
    </div>
  );
}