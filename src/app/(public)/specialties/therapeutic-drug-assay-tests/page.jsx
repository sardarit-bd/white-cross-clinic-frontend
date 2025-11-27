"use client";

import { useState } from "react";



export default function Page() {
    const [search, setSearch] = useState("")
    const allTests = [
        "Amitriptyline",
        "Anafranil (Clomipramine)",
        "Carbamazepine (Tegretol)",
        "Clobazam",
        "Clomipramine (Anafranil)",
        "Diazepam (Valium)",
        "Digoxin",
        "Epanutin (Phenytoin)",
        "FK506 (Tacrolimus/Prograf)",
        "Flecainide (Tambocor)",
        "Fluoxetine (Prozac)",
        "Gabapentin",
        "Imipramine",
        "Lamotrigine",
        "Levetiracetam (Keppra)",
        "Lithium",
        "Lorazepam",
        "Methotrexate",
        "Mycophenolic Acid (Cellcept)",
        "Mysoline (Primidone)",
        "Olanzapine",
        "Paracetamol",
        "Phenobarbitone",
        "Phenytoin (Epanutin)",
        "Primidone (Mysoline)",
        "Risperidone",
        "Sinequan (Doxepin)",
        "Sirolimus",
        "Streptomycin Levels",
        "Sulpiride",
        "Tacrolimus/Prograf (FK506)",
        "Tegretol (Carbamazepine)",
        "Temazepam",
        "Theophylline",
        "Trimipramine",
        "Valium (Diazepam)",
        "Vigabatrin (Sabril)",
        "Valproic Acid (Epilim)",
    ];



    const filtered = allTests.filter((test) =>
        test.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full bg-[var(--bgLight)] py-12 px-4">
            <div className="max-w-6xl mx-auto">

                {/* PAGE HEADER */}
                <div className="bg-[var(--bgWhite)] p-6 shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] mb-6">
                    <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
                        Therapeutic Drug Assay Tests
                    </h1>

                    <p className="text-[var(--textLight)] mb-4">
                        Please use the search box below to filter this list
                    </p>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
              w-full max-w-sm
              p-2 border border-[var(--borderLight)]
              rounded-[var(--radius-md)]
              outline-none
              focus:border-[var(--brandColor)]
              transition-all
            "
                    />
                </div>

                {/* RESULTS TABLE */}
                <div className="bg-[var(--bgWhite)] p-6 shadow-[var(--shadowCard)] rounded-[var(--radius-lg)]">
                    <table className="w-full border border-[var(--borderLight)]">
                        <thead>
                            <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                                <th className="p-3 text-left font-semibold">
                                    Test Name
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtered.map((name, i) => (
                                <tr key={i} className="border-b border-[var(--borderLight)]">
                                    <td className="p-3">
                                        <a
                                            href="#"
                                            className="
                        text-[var(--textDark)]
                        hover:text-[var(--brandColor)]
                        hover:underline underline-offset-2
                        transition-all
                      "
                                        >
                                            {name}
                                        </a>
                                    </td>
                                </tr>
                            ))}

                            {filtered.length === 0 && (
                                <tr>
                                    <td className="p-4 text-center text-[var(--textLight)]">
                                        No matching tests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
