'use client';

import { FaAllergies } from "react-icons/fa";
import { AllergyTestingData } from "../../../../../../data/bloodtesting/data.js";
import BloodTestDetailPage from "../_components/BloodTestDetailPage";

export default function AllergyPage() {
    return (
        <BloodTestDetailPage
            title="Allergy Testing"
            subtitle="Comprehensive Allergen Screening London"
            description="Allergy blood tests measure specific IgE antibodies in your blood to identify allergens triggering adverse reactions. Our comprehensive panels cover food allergens, environmental inhalants, and insect-related sensitivities."
            descriptionSecondary="Identify your triggers with precision — our UKAS-accredited laboratory analysis covers over 300 individual allergens for a complete allergenic profile."
            accentColor="#DC2626"
            accentColorLight="#FEF2F2"
            gradientFrom="#DC2626"
            gradientTo="#F87171"
            icon={FaAllergies}
            testData={AllergyTestingData}
            sectionTitle="Allergy Diagnostic Options"
            sectionBadge="Allergen Profiles"
            faqs={[
                ["What types of allergies can be tested?", "Our panels cover food allergies (nuts, dairy, gluten, seafood), environmental allergens (pollen, dust mites, mould), animal dander, and insect venom allergies."],
                ["How is an allergy blood test different from a skin prick test?", "Blood tests measure specific IgE antibodies and are unaffected by antihistamine use. They're ideal for patients who cannot stop medications or have severe eczema."],
                ["Do I need to stop antihistamines before testing?", "No. Unlike skin prick tests, blood-based allergy testing is not affected by antihistamine medications."],
                ["How accurate are allergy blood tests?", "Modern IgE blood tests are highly sensitive and specific. Our ALEX³ panel tests for over 300 allergen components simultaneously."],
                ["How quickly will I get results?", "Most allergy test results are available within 2-4 days and delivered securely via email."],
            ]}
        />
    );
}
