"use client";

export default function NonInvasivePrenatalTesting() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 text-[var(--textDark)]">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-[var(--brandColor)]">
        Non-Invasive Prenatal Testing
      </h1>

      <h2 className="text-xl font-semibold mb-3">
        Genetic Testing During Pregnancy
      </h2>

      <p className="mb-4">
        Non-invasive prenatal testing (NIPT) screens for the presence of specific chromosome disorders in the developing fetus. The test analyses fragments of DNA in maternal plasma that have been released from both maternal and placental cells.
      </p>

      <p className="mb-4">
        NIPT requires a single blood draw, which poses no threat to the fetus, and can be done as early as 10 weeks’ gestation. By analysing the proportions of DNA fragments derived from different chromosomes or chromosome regions, NIPT can screen for the presence or absence of specific chromosome disorders.
      </p>

      <p className="mb-6">
        NIPT is more accurate than first trimester maternal serum screening and ultrasound in identifying pregnancies with or without these disorders.
      </p>

      {/* ABOUT THE TEST */}
      <h2 className="text-2xl font-bold mt-10 mb-4">About The Test</h2>

      <p className="mb-4">
        DNA from the fetus circulates in the mother’s blood. Cell-free DNA (cfDNA) results from the natural breakdown of fetal cells (presumed to be mostly placental) and clears from the maternal system within hours of giving birth.
      </p>

      <p className="mb-4">
        During pregnancy, cfDNA can be tested to give the most accurate screening approach in estimating risk of a fetus having a chromosome condition (trisomy). This occurs when there are three copies of a chromosome instead of the expected two.
      </p>

      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Trisomy 21</strong> (Down syndrome) – most common at birth; associated with intellectual disabilities and health complications.</li>
        <li><strong>Trisomy 18</strong> (Edwards syndrome) & <strong>Trisomy 13</strong> (Patau syndrome) – associated with high miscarriage rate and congenital abnormalities.</li>
        <li><strong>Sex chromosome conditions</strong> – missing, extra, or incomplete X or Y chromosomes (e.g., Turner syndrome, Klinefelter syndrome).</li>
      </ul>

      <p className="mb-6">
        NIPT can also assess fetal sex (optional). It does not screen for non-chromosome disorders, fetal growth issues, or viability.
      </p>

      {/* RISK */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Risk</h2>

      <p className="mb-6">
        NIPT is non-invasive: only a blood sample is taken. It poses no increased risk of miscarriage or complications, unlike invasive testing (CVS or amniocentesis).
      </p>

      {/* ACCURACY */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Accuracy</h2>

      <p className="mb-4">
        NIPT provides fewer false positives/negatives than first trimester screening for trisomies 21, 18 and 13.
      </p>

      <p className="mb-6">
        NIPT is a screening test—not diagnostic. Confirmatory invasive testing is required for high-probability results.
      </p>

      {/* Accuracy Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="p-3 border">Accuracy (T21, T18, T13)</th>
              <th className="p-3 border">Sensitivity</th>
              <th className="p-3 border">False-Positive Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Combined first trimester screening</td>
              <td className="p-3 border">82%</td>
              <td className="p-3 border">1 in 26</td>
            </tr>
            <tr className="bg-[var(--brandColorLight)]">
              <td className="p-3 border">NIPT</td>
              <td className="p-3 border">&gt;99%</td>
              <td className="p-3 border">&lt;1 in 1,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Screening performance */}
      <h3 className="text-xl font-semibold mb-4">NIPT performance data (general screening population)</h3>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border text-sm">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="p-3 border">Condition</th>
              <th className="p-3 border">Detection Rate</th>
              <th className="p-3 border">Specificity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Trisomy 21</td>
              <td className="p-3 border">&gt;99.9% (95% CI: 97.1%)</td>
              <td className="p-3 border">&gt;99.90%</td>
            </tr>
            <tr className="bg-[var(--brandColorLight)]">
              <td className="p-3 border">Trisomy 18</td>
              <td className="p-3 border">&gt;99.9% (95% CI: 91.4%)</td>
              <td className="p-3 border">&gt;99.90%</td>
            </tr>
            <tr>
              <td className="p-3 border">Trisomy 13</td>
              <td className="p-3 border">&gt;99.9% (95% CI: 87.1%)</td>
              <td className="p-3 border">&gt;99.90%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Who Can Have This Test */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Who Can Have This Test?</h2>

      <p className="mb-4">
        NIPT can be ordered for pregnancies of at least 10 weeks. Works for single or twin pregnancy.  
      </p>

      <p className="mb-4">
        Sex chromosome analysis is possible in twins but not sex chromosome conditions.
      </p>

      <p className="mb-6">
        NIPT does not assess mosaicism, partial trisomies, translocations.
      </p>

      {/* Limitations */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Limitations Of NIPT</h2>

      <p className="mb-4">
        Not validated for use in pregnancies with more than two fetuses, fetal demise, mosaicism, triploidy, or maternal malignancy.
      </p>

      <p className="mb-6">
        NIPT does not detect neural tube defects or rare genetic abnormalities.
      </p>

      {/* Results */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Results</h2>

      <p className="mb-4">
        Results available in 2–4 days. High probability results require confirmation via CVS or amniocentesis.
      </p>

      {/* Example Results Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full border text-sm">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="p-3 border">Chromosome</th>
              <th className="p-3 border">Result</th>
              <th className="p-3 border">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Trisomy 21</td>
              <td className="p-3 border">High probability</td>
              <td className="p-3 border">Genetic counselling & additional testing</td>
            </tr>
            <tr className="bg-[var(--brandColorLight)]">
              <td className="p-3 border">Trisomy 18</td>
              <td className="p-3 border">Low probability</td>
              <td className="p-3 border">Review with patient</td>
            </tr>
            <tr>
              <td className="p-3 border">Trisomy 13</td>
              <td className="p-3 border">Low probability</td>
              <td className="p-3 border">Review with patient</td>
            </tr>
            <tr className="bg-[var(--brandColorLight)]">
              <td className="p-3 border">Fetal sex</td>
              <td className="p-3 border">Male</td>
              <td className="p-3 border">Review with patient</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Repeat Samples */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Repeat Samples</h2>

      <p className="mb-6">
        2% of samples may contain insufficient fetal DNA. A repeat blood sample may be necessary at no additional charge.
      </p>

      {/* Assessment Cannot Be Provided */}
      <h2 className="text-2xl font-bold mt-10 mb-4">If An Assessment Cannot Be Provided</h2>

      <p className="mb-6">
        Additional sample may be required if there is not enough fetal DNA.
      </p>

      {/* Process */}
      <h2 className="text-2xl font-bold mt-10 mb-4">What Is The Process?</h2>

      <p className="mb-6">
        Patient signs consent → blood sample taken → sample submitted to TDL Genetics.
      </p>

      {/* Mother Need Additional Tests */}
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Will The Mother Need Any Other Tests?
      </h2>

      <p className="mb-6">
        Additional ultrasound or invasive tests may be required if other abnormalities are detected.
      </p>

      {/* Sample Stability */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Sample Stability</h2>

      <p className="mb-20">
        Samples must be taken in special tubes and received within 5 days. They must not be refrigerated.
      </p>
    </div>
  );
}
