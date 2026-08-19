'use client';

import { FaSun } from "react-icons/fa";
import { VitaminDTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function VitaminDPage() {
    return (
        <BloodTestDetailPage
            title="Vitamin D Testing"
            subtitle="Vitamin D Level Assessment London"
            description="Vitamin D is crucial for bone health, immune function, and mood regulation. Deficiency is remarkably common in the UK due to limited sunlight exposure — testing helps identify low levels before symptoms develop."
            descriptionSecondary="Our Vitamin D panels measure both active and standard forms of Vitamin D, providing a complete picture of your status. Combined calcium + Vitamin D panels are also available for comprehensive bone health assessment."
            accentColor="#EA580C"
            accentColorLight="#FFF7ED"
            gradientFrom="#EA580C"
            gradientTo="#FB923C"
            icon={FaSun}
            testData={VitaminDTestingData}
            sectionTitle="Vitamin D Diagnostic Options"
            sectionBadge="Vitamin D Profiles"
            faqs={[
                ["Why is Vitamin D important?", "Vitamin D regulates calcium absorption for bone health, supports immune function, aids muscle strength, and may play a role in mood regulation and disease prevention."],
                ["How common is Vitamin D deficiency in the UK?", "Very common — approximately 1 in 5 adults in the UK have low Vitamin D levels, especially during autumn and winter months due to reduced sunlight exposure."],
                ["What is the difference between 25-OH and 1,25 Vitamin D?", "25-OH Vitamin D is the standard test reflecting your overall Vitamin D stores. 1,25 Vitamin D (active form) is a specialised test usually ordered for kidney disease or calcium disorders."],
                ["Do I need to fast?", "No fasting is required for Vitamin D testing. You can eat and drink normally before your appointment."],
                ["How quickly will I get results?", "Vitamin D test results are typically available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}
