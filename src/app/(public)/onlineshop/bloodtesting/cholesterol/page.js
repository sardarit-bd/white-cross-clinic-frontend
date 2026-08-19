'use client';

import { FaHeartbeat } from "react-icons/fa";
import { CholesterolTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function CholesterolPage() {
    return (
        <BloodTestDetailPage
            title="Cholesterol Testing"
            subtitle="Lipid Profile Assessment London"
            description="Cholesterol tests measure your lipid levels — including total cholesterol, HDL (good), LDL (bad), and triglycerides — to assess your cardiovascular risk. Early detection allows for timely lifestyle and medical intervention."
            descriptionSecondary="Our comprehensive lipid profiles provide a detailed breakdown of your cholesterol markers, helping you and your healthcare provider make informed decisions about heart health."
            accentColor="#7C3AED"
            accentColorLight="#F5F3FF"
            gradientFrom="#7C3AED"
            gradientTo="#A78BFA"
            icon={FaHeartbeat}
            testData={CholesterolTestingData}
            sectionTitle="Cholesterol Diagnostic Options"
            sectionBadge="Lipid Profiles"
            faqs={[
                ["What does a cholesterol test measure?", "A full lipid profile measures total cholesterol, HDL cholesterol, LDL cholesterol, non-HDL cholesterol, and triglycerides."],
                ["Do I need to fast before a cholesterol test?", "Fasting for 10-12 hours before the test is recommended for the most accurate triglyceride and LDL readings. Water is permitted during fasting."],
                ["How often should cholesterol be checked?", "Adults should have cholesterol checked every 4-5 years. If you have risk factors (family history, diabetes, hypertension), more frequent testing is recommended."],
                ["What are healthy cholesterol levels?", "Ideal total cholesterol is below 5 mmol/L, with LDL below 3 mmol/L and HDL above 1 mmol/L. Your clinician will interpret results in context of your overall health."],
                ["How quickly will I get results?", "Cholesterol test results are typically available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}
