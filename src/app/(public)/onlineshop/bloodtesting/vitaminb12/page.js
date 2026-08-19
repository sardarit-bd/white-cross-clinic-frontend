'use client';

import { FaFlask } from "react-icons/fa";
import { VitaminB12DTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function VitaminB12Page() {
    return (
        <BloodTestDetailPage
            title="Vitamin B12 Testing"
            subtitle="B12 Deficiency Screening London"
            description="Vitamin B12 is essential for nerve function, red blood cell production, and DNA synthesis. Deficiency can cause fatigue, neurological symptoms, and anaemia — early detection is key to effective treatment."
            descriptionSecondary="Our B12 panels measure both active and total vitamin B12 levels to give a comprehensive picture of your B12 status, helping identify deficiency before symptoms worsen."
            accentColor="#E11D48"
            accentColorLight="#FFF1F2"
            gradientFrom="#E11D48"
            gradientTo="#FB7185"
            icon={FaFlask}
            testData={VitaminB12DTestingData}
            sectionTitle="Vitamin B12 Diagnostic Options"
            sectionBadge="B12 Profiles"
            faqs={[
                ["What is Vitamin B12 and why is it important?", "Vitamin B12 (cobalamin) is essential for nerve function, red blood cell formation, and DNA synthesis. Low levels can cause fatigue, weakness, memory problems, and anaemia."],
                ["Who is at risk of B12 deficiency?", "Vegans and vegetarians, older adults, people with digestive conditions (Crohn's, coeliac), those on metformin or proton pump inhibitors, and people who have had gastric surgery."],
                ["What is the difference between Active B12 and Total B12?", "Active B12 (holotranscobalamin) measures the biologically available form your body can use. Total B12 measures all forms, including inactive. Active B12 is the more sensitive marker."],
                ["Do I need to fast?", "Fasting is not required for vitamin B12 testing. You can eat and drink normally before your appointment."],
                ["How quickly will I get results?", "Vitamin B12 test results are typically available within 24 hours and delivered securely via email."],
            ]}
        />
    );
}
