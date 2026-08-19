'use client';

import { FaVial } from "react-icons/fa";
import { diabetesTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function DiabetesPage() {
    return (
        <BloodTestDetailPage
            title="Diabetes Testing"
            subtitle="Glycaemic Monitoring London"
            description="Diabetes Mellitus is a clinical condition characterized by chronic hyperglycaemia. In the United Kingdom, healthcare providers monitor glycaemic status to assist in the identification of Type 1, Type 2, and Gestational diabetes."
            descriptionSecondary="Early assessment through laboratory diagnostics allows for a clear clinical baseline to be established. No GP referral required."
            accentColor="#0E7C6B"
            accentColorLight="#E6F7F4"
            gradientFrom="#0E7C6B"
            gradientTo="#14B8A6"
            icon={FaVial}
            testData={diabetesTestingData}
            sectionTitle="Diabetes Diagnostic Options"
            sectionBadge="Glycaemic Profiles"
            faqs={[
                ["What is an HbA1c test?", "HbA1c measures your average blood sugar levels over the past 2-3 months. It is the gold-standard test for diagnosing and monitoring diabetes."],
                ["Do I need to fast for a glucose test?", "Yes, fasting glucose tests require 8-12 hours of fasting. HbA1c does not require fasting."],
                ["How often should I be tested?", "If you have diabetes, HbA1c should be checked every 3-6 months. For screening purposes, annual testing is recommended."],
                ["Do I need a GP referral?", "No. Our direct-access facility allows you to book without a GP referral."],
                ["How quickly will I get results?", "Most diabetes test results are available within 24 hours and are delivered securely via email."],
            ]}
        />
    );
}