'use client';

import { FaFlask } from "react-icons/fa";
import { liverTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function LiverPage() {
    return (
        <BloodTestDetailPage
            title="Liver Function Tests"
            subtitle="Hepatic Health Assessment London"
            description="Liver function tests measure enzymes, proteins, and bilirubin levels to assess hepatic health. These tests are essential for detecting liver inflammation, disease, or damage from medications and lifestyle factors."
            descriptionSecondary="Our comprehensive liver panels provide accurate insights into your liver's ability to process and filter substances. All samples are analysed at UKAS-accredited laboratories."
            accentColor="#D97706"
            accentColorLight="#FFF7ED"
            gradientFrom="#D97706"
            gradientTo="#F59E0B"
            icon={FaFlask}
            testData={liverTestingData}
            sectionTitle="Liver Diagnostic Options"
            sectionBadge="Hepatic Profiles"
            faqs={[
                ["What do liver function tests measure?", "Liver function tests measure key enzymes (ALT, AST, ALP, GGT), proteins (albumin, total protein), and bilirubin to evaluate liver health and function."],
                ["Why would I need a liver function test?", "Liver function tests are recommended if you have symptoms such as fatigue, jaundice, or abdominal pain, or if you take medications that may affect the liver, consume alcohol regularly, or have a family history of liver disease."],
                ["Do I need to fast?", "Fasting is generally not required, though avoiding alcohol for 24 hours before the test is recommended for accurate results."],
                ["How often should I be tested?", "If you have risk factors or are on hepatotoxic medications, regular monitoring every 6-12 months is advisable."],
                ["How quickly will I get results?", "Liver function test results are typically available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}