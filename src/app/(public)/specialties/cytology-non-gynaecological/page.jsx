"use client";

export default function CytologyNonGynaecological() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
          Cytology (Non-Gynaecological)
        </h1>

        {/* INTRO */}
        <p className="text-[var(--textDark)] mb-8 leading-relaxed">
          WCC’s Cytology team carries out microscopical examination of cells or crystals   
          on a range of non-gynaecological body fluids, including urine, sputum and CSF.
        </p>

        {/* SECTION 1 — URINES */}
        <h2 className="text-2xl font-semibold text-[var(--textDark)] mt-6 mb-3">Urines</h2>
        <div className="space-y-4 text-[var(--textDark)] leading-relaxed">
          <p>
            To prevent cell degeneration, it is advisable to collect urine samples in a sample pot 
            containing preservative (available from WCC Supplies). Use of preservative will ensure that 
            the cellular material is preserved for up to 48 hours.
          </p>
          <p>
            Ideally, 10ml (excluding preservative) from a freshly fully voided urine (when the bladder 
            is emptied) mid-morning sample should be submitted for cytological assessment. If microbiology 
            or chemistry investigations are also required, please submit separate urine samples and 
            mark the vials accordingly.
          </p>
          <p>
            A mid-stream urine sample is NOT recommended for cytological assessment, as it could lead 
            to a low cellular yield. If a delay of greater than 24 hours in reaching the laboratory 
            is anticipated, samples should be refrigerated at 4°C.
          </p>
        </div>

        {/* SECTION 2 — SPUTUM */}
        <h2 className="text-2xl font-semibold text-[var(--textDark)] mt-8 mb-3">Sputum</h2>
        <div className="space-y-4 text-[var(--textDark)] leading-relaxed">
          <p>
            Sputum should be collected on at least three occasions if underlying lung carcinoma 
            is suspected. A single sputum is sufficient for microbiological assessment. Sputum 
            should be sent to the laboratory immediately following production, or stored in a 
            universal container containing cytolyt cell fixative if there is likely to be a delay.
          </p>
          <p>
            Please note that this is only acceptable if sputum is only for Cytology. Microbiology 
            cannot be performed on fixed material. Early morning sputum is ideal, but contamination 
            with food, toothpaste and tobacco should be avoided.
          </p>
        </div>

        {/* SECTION 3 — FLUIDS */}
        <h2 className="text-2xl font-semibold text-[var(--textDark)] mt-8 mb-3">Fluids</h2>
        <div className="space-y-4 text-[var(--textDark)] leading-relaxed">
          <p>
            All available material should be submitted in a sterile container without fixative as 
            quickly as possible. If any delay is anticipated, the material should be submitted in 
            cytolyt fixative.
          </p>
        </div>

        {/* SECTION 4 — CSF */}
        <h2 className="text-2xl font-semibold text-[var(--textDark)] mt-8 mb-3">
          Cerebrospinal Fluid (CSF)
        </h2>
        <div className="space-y-4 text-[var(--textDark)] leading-relaxed">
          <p>
            Ideally, CSF should be submitted fresh or as an air-dried cytospin slide, unstained and 
            in a plastic transport slide box. A minimum of 3ml should be submitted, either in fresh 
            form or spun on multiple slides for cytopathologists’ review and opinion.
          </p>
        </div>
      </div>
    </div>
  );
}
