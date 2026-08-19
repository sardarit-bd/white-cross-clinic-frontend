'use client';

import { FaFlask } from "react-icons/fa";
import { ThyroidFunctionTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function ThyroidFunctionPage() {
    return (
        <BloodTestDetailPage
            title="Thyroid Function Tests"
            subtitle="Thyroid Health Assessment London"
            description="Thyroid function tests measure hormones produced by the thyroid gland — including TSH, T3, and T4 — to diagnose conditions such as hypothyroidism (underactive) and hyperthyroidism (overactive thyroid)."
            descriptionSecondary="Thyroid imbalances can affect energy, weight, mood, and metabolism. Our comprehensive thyroid panels provide the detailed insights needed for accurate diagnosis and monitoring."
            accentColor="#0891B2"
            accentColorLight="#ECFEFF"
            gradientFrom="#0891B2"
            gradientTo="#22D3EE"
            icon={FaFlask}
            testData={ThyroidFunctionTestingData}
            sectionTitle="Thyroid Diagnostic Options"
            sectionBadge="Thyroid Profiles"
            faqs={[
                ["What do thyroid function tests measure?", "Standard thyroid panels measure TSH (thyroid-stimulating hormone), Free T4 (thyroxine), and Free T3 (triiodothyronine). Extended panels may include thyroid antibodies."],
                ["What are symptoms of thyroid problems?", "Symptoms may include unexplained weight changes, fatigue, hair loss, feeling too hot or cold, mood changes, and irregular heart rate."],
                ["Do I need to fast for a thyroid test?", "Fasting is generally not required. However, the test is best done in the morning as TSH levels naturally fluctuate throughout the day."],
                ["How common are thyroid problems?", "Thyroid disorders affect approximately 1 in 20 people in the UK, and are more common in women. Many cases go undiagnosed."],
                ["How quickly will I get results?", "Thyroid function test results are typically available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}
