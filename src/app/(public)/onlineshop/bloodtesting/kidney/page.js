'use client';

import { FaFilter } from "react-icons/fa";
import { kidneyTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function KidneyPage() {
    return (
        <BloodTestDetailPage
            title="Kidney Function Tests"
            subtitle="Renal Health Assessment London"
            description="Kidney function tests evaluate how well your kidneys filter waste and maintain electrolyte balance. Early detection of renal impairment is critical for preventing chronic kidney disease progression."
            descriptionSecondary="Our comprehensive renal panels measure key biomarkers including creatinine, urea, and eGFR to provide a clear picture of your kidney health."
            accentColor="#2563EB"
            accentColorLight="#EFF6FF"
            gradientFrom="#2563EB"
            gradientTo="#60A5FA"
            icon={FaFilter}
            testData={kidneyTestingData}
            sectionTitle="Kidney Diagnostic Options"
            sectionBadge="Renal Profiles"
            faqs={[
                ["What do kidney function tests measure?", "Kidney function tests measure creatinine, urea, electrolytes (sodium, potassium), and estimated glomerular filtration rate (eGFR) to assess how well your kidneys are filtering."],
                ["Who should get kidney function tests?", "Anyone with diabetes, high blood pressure, family history of kidney disease, or those taking medications that may affect kidney function should consider regular testing."],
                ["Do I need to fast?", "Fasting is generally not required for kidney function tests, though your clinician may advise otherwise for specific panels."],
                ["How often should I be tested?", "If you have risk factors, annual kidney function testing is recommended. Your clinician may advise more frequent monitoring."],
                ["How quickly will I get results?", "Most kidney function test results are available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}