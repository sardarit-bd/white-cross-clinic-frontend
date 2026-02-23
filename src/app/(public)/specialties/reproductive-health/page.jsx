
"use client";

import Link from "next/link";

export default function ReproductiveHealthPage() {
    return (
        <div className="w-full min-h-screen bg-[var(--bgLight)] pb-20">

            {/* =========================================================
          HERO SECTION
      ========================================================== */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-[var(--textDark)] text-4xl font-bold mb-4">
                    Reproductive Health
                </h1>

                <p className="text-[var(--textLight)] text-lg leading-relaxed">
                    The tests in this section cover puberty, menstrual cycle/pregnancy,
                    infertility and ageing, and are drawn from all disciplines of diagnostic pathology.
                </p>
            </div>

            {/* =========================================================
          REPRODUCTIVE HEALTH CARD
      ========================================================== */}
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">
                    <h2 className="text-[var(--textDark)] text-xl font-semibold mb-2">
                        Reproductive Health Tests
                    </h2>

                    <p className="text-[var(--textLight)] mb-4">
                        Including tests for hormones, infection, genetics,
                        PCOS, unexplained infertility, and sperm health
                    </p>

                    <button
                        className="text-[var(--brandColor)] hover:text-[var(--brandColorDark)] font-medium flex items-center gap-1 transition-all"
                    >
                        <Link href='/specialties/reproductive-health-tests'>
                            Read More →
                        </Link>

                    </button>
                </div>
            </div>

            {/* =========================================================
          PUBERTY
      ========================================================== */}
            <SectionWrapper title="Puberty">
                <p className="text-[var(--textLight)] mb-4">
                    The beginning of the reproductive cycle of life – diagnosis tests may include:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-[var(--textLight)]">
                    <li>Oestradiol</li>
                    <li>FSH</li>
                    <li>LH</li>
                    <li>Progesterone</li>
                    <li>Androstenedione</li>
                    <li>DHEA sulphate</li>
                    <li>Testosterone</li>
                    <li>SHBG</li>
                    <li>Prolactin</li>
                </ul>
            </SectionWrapper>

            {/* =========================================================
          MENSTRUAL CYCLE / PREGNANCY
      ========================================================== */}
            <SectionWrapper title="The Menstrual Cycle/Pregnancy">
                <p className="text-[var(--textLight)] mb-6">
                    This cycle controls female fertility and is influenced by hormone levels
                    which impact bone health and many other aspects of female physiology.
                    Pregnancy lasts 40 weeks and is divided into trimesters.
                </p>

                {/* FIRST TRIMESTER */}
                <SubTitle title="First Trimester (week 0–13)" />

                <List items={[
                    "Pregnancy test (urine)",
                    "Quantitated Beta HCG (serum)",
                    "Ectopic Pregnancy assessment (Beta HCG and Progesterone)",
                    "Recurrent Miscarriage Profile",
                    "Antenatal Screen",
                    "Nuchal Scan with Free Beta HCG and PAPP-A",
                    "Chorionic Villus Sampling (CVS)",
                    "Toxoplasma/Varicella Zoster/Parvovirus/CMV"
                ]} />

                {/* SECOND TRIMESTER */}
                <SubTitle title="Second Trimester (week 14–26)" />

                <List items={[
                    "Downs Risk Profile (Triple Test +)",
                    "Amniocentesis for chromosomal analysis",
                    "Glucose and Protein (urine or serum)",
                    "Pre-eclampsia Screen"
                ]} />

                {/* THIRD TRIMESTER */}
                <SubTitle title="Third Trimester (week 27–40)" />

                <List items={[
                    "Glucose and Protein (urine or serum)",
                    "Toxoplasma",
                    "Atypical antibody screening",
                    "Group B Strep (From 35 weeks)",
                    "Chlamydia"
                ]} />
            </SectionWrapper>

            {/* =========================================================
          INFERTILITY
      ========================================================== */}
            <SectionWrapper title="Infertility">
                <p className="text-[var(--textLight)] mb-6">
                    Infertility and its management is increasingly implicated in growing numbers of clinical
                    disciplines. Greater emphasis is being given to male infertility. Testing at the outset
                    can reduce emotional and financial costs.
                </p>

                <List items={[
                    "Hormones",
                    "Infection",
                    "Lifestyle/Environmental",
                    "Chromosomes/Genetics",
                    "Ovarian Reserve",
                    "Polycystic Ovary Syndrome",
                    "Unexplained Infertility/Implantation failure",
                    "Recurrent/Spontaneous miscarriage",
                    "Male Factors"
                ]} />
            </SectionWrapper>

            {/* =========================================================
          AGEING
      ========================================================== */}
            <SectionWrapper title="Ageing">
                <p className="text-[var(--textLight)] mb-6">
                    Reaching menopause and andropause is a gradual process with modulating hormones.
                    Testing may include:
                </p>

                <List items={[
                    "Hormones (Menopause/Andropause Profile)",
                    "Testosterone/Free testosterone/Bioavailable testosterone",
                    "SHBG",
                    "DHEAs",
                    "Thyroid function",
                    "Osteoporosis/Bone Markers"
                ]} />
            </SectionWrapper>
        </div>
    );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const SectionWrapper = ({ title, children }) => (
    <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">
            <h2 className="text-[var(--textDark)] text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    </div>
);

const SubTitle = ({ title }) => (
    <h3 className="text-[var(--textDark)] text-xl font-semibold mb-2">
        {title}
    </h3>
);

const List = ({ items }) => (
    <ul className="list-disc pl-6 space-y-1 text-[var(--textLight)] mb-6">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

