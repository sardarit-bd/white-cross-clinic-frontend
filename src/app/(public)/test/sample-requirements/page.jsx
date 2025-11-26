"use client";
import React from "react";

export default function SampleRequirements() {
  return (
    <div className="container pt-48 mx-auto px-4 py-10">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-[var(--brandColor)] mb-6">
        Sample Requirements
      </h1>

      {/* ----------------------------- */}
      {/* VACUTAINER TABLE */}
      {/* ----------------------------- */}

      <h2 className="text-2xl font-semibold mb-3">Vacutainer</h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-[var(--borderLight)]">
        <table className="w-full text-left">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="p-3">Sample type</th>
              <th className="p-3">Vacutainer</th>
              <th className="p-3">Anticoagulant</th>
              <th className="p-3">Capacity</th>
            </tr>
          </thead>

          <tbody className="text-[var(--textDark)]">
            {[
              ["A", "Lavender", "EDTA", "4ml/6ml*"],
              ["B", "Gold", "SST/Gel", "5ml"],
              ["C", "Light Blue", "Citrate", "4.5ml"],
              ["F", "Red", "None", "6ml"],
              ["G", "Grey", "Fluoride oxalate", "2ml, 4ml"],
              ["H", "Green", "Lithium heparin", "6ml"],
              ["K", "Dark blue", "Trace metal", "7ml"],
            ].map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-[var(--borderLight)] hover:bg-[var(--brandColorLight)] transition"
              >
                {row.map((cell, i) => (
                  <td key={i} className="p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-[var(--textLight)] mt-2">
        * 6ml EDTA tubes are used for specific PCR assays
      </p>

      {/* ----------------------------- */}
      {/* OTHER SAMPLE TYPES */}
      {/* ----------------------------- */}

      <h2 className="text-2xl font-semibold mt-10 mb-4">Other Sample Types</h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-[var(--borderLight)]">
        <table className="w-full text-left">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="p-3">Sample type</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>

          <tbody className="text-[var(--textDark)]">
            {[
              ["BC", "Blood culture bottle: contact laboratory"],
              ["J", "Contact laboratory for advice on sample taking"],
              ["X", "Test by appointment"],
              ["RF", "Random Faeces"],
              ["LF", "Faecal Collection"],
              ["RU", "Random Urine"],
              ["MSU", "Mid stream urine"],
              ["FCRU", "First catch random urine (for DL12/Chlamydia, etc.)"],
              ["CU", "30ml aliquot from a 24 hour urine collection – state total volume"],
              ["PU", "30ml aliquot with 10ml of 0.1N hydrochloric acid added – state total volume"],
              ["EMU", "Early morning urine (1st sample of the day)"],
              ["SC", "60ml container"],
              ["TPV", "Cytcy thin prep vial"],
              ["STM", "Orange/Blue swab for culture – swab in transport medium"],
              ["CS", "Black charcoal swab"],
              ["VS", "Green viral swab"],
              ["PCR", "PCR swab for Chlamydia/PCR Infection Screening"],
              ["MW", "Tap/bottled water mouth wash – 20mls"],
              ["AF", "Amniotic fluid (5mls PCR – 10mls Karyotype)"],
              ["CVS", "Chorionic villus (medium provided by laboratory)"],
              ["UCYT", "Urine cytology container"],
            ].map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-[var(--borderLight)] hover:bg-[var(--brandColorLight)] transition"
              >
                <td className="p-3 font-semibold">{row[0]}</td>
                <td className="p-3">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
