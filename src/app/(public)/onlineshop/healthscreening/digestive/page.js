
import { FiActivity, FiArrowRight } from "react-icons/fi";

const Page = () => {


    const digestiveHealthTests = [
        {
            id: 1,
            name: "Prostate Cancer Risk & Health Screening",
            price: "249",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 2,
            name: "Bowel Cancer Risk Screening",
            price: "219",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 3,
            name: "Advanced Cancer-Aware Health Screening – Men 60+",
            price: "549",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 4,
            name: "Advanced Cancer-Aware Health Screening – Women 60+",
            price: "549",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 5,
            name: "Male Hormonal Health Screening",
            price: "299",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 6,
            name: "Female Hormonal Health Screening",
            price: "249",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 7,
            name: "Diabetes & Kidney Health Screening",
            price: "199",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 8,
            name: "ALT (Alanine Aminotransferase) (SGPT)",
            price: "85",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 9,
            name: "Allergic Rhinitis/Asthma Profile",
            price: "405",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 10,
            name: "Alpha-1-Antitrypsin (Stool)",
            price: "106",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 11,
            name: "Alternaria Components",
            price: "131",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 12,
            name: "Anti-Liver Cytosol Antibodies",
            price: "141",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 13,
            name: "Anti-SLA (Soluble Liver Antigen) Abs",
            price: "192",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 14,
            name: "Apolipoprotein E (12 hours fasting)",
            price: "156",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 15,
            name: "Ashkenazi Breast Cancer Screen - common variants",
            price: "730",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 16,
            name: "Aspartate Transaminase (AST) (SGOT)",
            price: "85",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 17,
            name: "Breast Cancer - BRCA1 + BRCA2 genes only",
            price: "770",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 18,
            name: "Breast Cancer Ashkenazi Screen - common variants",
            price: "730",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 19,
            name: "Breast Cancer NGS Panel",
            price: "1410",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 20,
            name: "C-KIT D816V variant - Mastocytosis",
            price: "370",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 21,
            name: "Cobalt (Blood)",
            price: "146",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 22,
            name: "Cobalt (Urine)",
            price: "96",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 23,
            name: "Coeliac Disease – HLA DQ2/DQ8 Genotype",
            price: "469",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 24,
            name: "Coeliac/Gluten Genetic Profile 2",
            price: "460",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 25,
            name: "Coeliac/Gluten Sensitivity Profile",
            price: "245",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 26,
            name: "ELF/Enhanced Liver Fibrosis",
            price: "284",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 27,
            name: "Elastase (RF)",
            price: "128",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 28,
            name: "Elastase (Self-collect)",
            price: "128",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 29,
            name: "Faecal Fat (1 day collection)",
            price: "185",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 30,
            name: "Faecal Fat (3 day)",
            price: "150",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 31,
            name: "Faecal Lactoferrin",
            price: "100",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 32,
            name: "Fasciola Hepatica Antibodies (Liver Fluke)",
            price: "216",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 33,
            name: "Fasting Insulin Resistance Index - HOMA IR",
            price: "148",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 34,
            name: "Fibrotest (Liver Fibrosis)",
            price: "379",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 35,
            name: "Gastric Parietal Autoantibodies",
            price: "112",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 36,
            name: "Gastrointestinal Pathogen Profile by PCR (Self-collect)",
            price: "257",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 37,
            name: "Gluten/Coeliac Genetic Profile 2",
            price: "460",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 38,
            name: "Growth Hormone (Fasting)",
            price: "121",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 39,
            name: "H. pylori Antibodies (IgG)",
            price: "138",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 40,
            name: "H. pylori Antigen – Stool (RF)",
            price: "93",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 41,
            name: "H. pylori Antigen – Stool (Self-collect)",
            price: "93",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 42,
            name: "HLA Tissue Typing Coeliac Disease – DQ2/DQ8",
            price: "469",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 43,
            name: "Hereditary Spastic Paraplegia Comprehensive NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 44,
            name: "Liver Fibrosis (Enhanced Liver Fibrosis ELF)",
            price: "284",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 45,
            name: "Liver Fibrosis Fibrotest",
            price: "379",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 46,
            name: "Liver Function Tests (Venous)",
            price: "113",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 47,
            name: "Liver Immunoblot",
            price: "262",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 48,
            name: "Liver Kidney Microsomal Antibodies",
            price: "112",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 49,
            name: "Myasthenia Gravis Evaluation",
            price: "248",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 50,
            name: "Quantitative Faecal Immunochemical Test (QFIT)",
            price: "68",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 51,
            name: "Quantitative Faecal Immunochemical Test (QFIT) (Self-collect)",
            price: "68",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 52,
            name: "Retinoblastoma - RB1 sequencing + deletions/duplications",
            price: "1250",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 53,
            name: "Rotavirus in Stool by PCR",
            price: "119",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 54,
            name: "Spastic Paraplegia NGS Panel",
            price: "2610",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 55,
            name: "Stool Reducing Substances",
            price: "63",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 56,
            name: "Stool for OCP and Culture by PCR",
            price: "65",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 57,
            name: "Stool for OVA Cysts & Parasites by Microscopy",
            price: "48",
            plusPrice: "0",
            description: "Digestive Assessment"
        },
        {
            id: 58,
            name: "Systemic Mastocytosis - C-Kit common variants (KIT D816V)",
            price: "370",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 59,
            name: "Tissue Transglutaminase IgA (Coeliac) (Venous)**",
            price: "126",
            plusPrice: "50",
            description: "Digestive Assessment"
        },
        {
            id: 60,
            name: "Total Bile Acid/Bile Salts",
            price: "147",
            plusPrice: "50",
            description: "Digestive Assessment"
        }
    ];




    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Digestive Gut Health
                    </h1>

                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Comprehensive digestive and gut health testing including celiac screening, H-Pylori detection, and microbiome analysis. Our nurse-led South Kensington clinic provides professional gastrointestinal assessments using UKAS-accredited laboratories.
                    </p>
                </div>

                <hr className="mt-12 border-t border-[#d5d5d5]" />


                {/* Service Description */}
                <div className="py-8">
                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Understanding Digestive and Gut Health
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The gastrointestinal tract is a complex ecosystem comprising the stomach, small intestine, and large intestine, housing trillions of microorganisms collectively termed the gut microbiome. Digestive health depends on proper nutrient absorption, immune function, barrier integrity, and microbial balance. Digestive disorders affect millions of people, causing symptoms ranging from mild discomfort to severe malabsorption and systemic illness. Common conditions include coeliac disease, irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), Helicobacter pylori infection, small intestinal bacterial overgrowth (SIBO), and functional dyspepsia.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Diagnostic testing enables accurate identification of underlying pathology, distinguishing between structural disease, infection, autoimmune conditions, and functional disorders. Blood tests screen for coeliac disease, inflammatory markers, and nutritional deficiencies. Stool tests detect infections, inflammation, malabsorption, and microbiome composition. Breath tests diagnose bacterial overgrowth and carbohydrate malabsorption. Early diagnosis prevents complications such as nutritional deficiencies, osteoporosis, anaemia, and increased cancer risk. This comprehensive approach to digestive health assessment facilitates targeted treatment and symptom resolution.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Celiac Disease: Autoimmune Gluten Intolerance
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Celiac disease is a chronic autoimmune disorder affecting approximately 1% of the population, triggered by dietary gluten (a protein found in wheat, barley, and rye). In genetically susceptible individuals carrying HLA-DQ2 or HLA-DQ8 genes, gluten ingestion provokes immune-mediated damage to small intestinal villi—finger-like projections responsible for nutrient absorption. Villous atrophy reduces absorptive surface area, causing malabsorption of nutrients, vitamins, and minerals. Classical symptoms include chronic diarrhea, abdominal pain, bloating, weight loss, and steatorrhea (fatty stools).
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        However, coeliac disease presentations are highly variable. Many individuals experience non-classical symptoms including iron deficiency anaemia, osteoporosis, infertility, elevated liver enzymes, neurological symptoms (ataxia, peripheral neuropathy), or dermatitis herpetiformis (an itchy skin rash). Some remain asymptomatic despite ongoing intestinal damage. Untreated coeliac disease increases risk of nutritional deficiencies (iron, folate, B12, calcium, vitamin D), osteoporosis, lymphoma, and small bowel adenocarcinoma. Lifelong strict gluten-free diet is the only effective treatment, allowing intestinal healing and symptom resolution.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Celiac Antibody Testing and Diagnosis
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Celiac screening measures tissue transglutaminase antibodies (anti-tTG IgA), the most sensitive and specific initial test. Anti-endomysial antibodies (EMA IgA) provide additional specificity when anti-tTG is positive. Total IgA should be measured simultaneously, as IgA deficiency occurs in 2-3% of celiac patients, causing false-negative results on IgA-based tests. In IgA-deficient individuals, IgG-based tests (anti-tTG IgG, deamidated gliadin peptide antibodies) are used instead. Positive antibody testing indicates probable celiac disease but requires confirmation via upper endoscopy with small bowel biopsies demonstrating villous atrophy.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Critical to accurate celiac testing is that individuals must continue eating gluten-containing foods prior to testing. The recommended gluten load is equivalent to 1-2 slices of bread daily for at least 6 weeks before blood testing. Gluten-free diet causes antibody levels to normalize and intestinal mucosa to heal, resulting in false-negative tests. Genetic testing for HLA-DQ2/DQ8 has high negative predictive value—absence of these genes effectively excludes celiac disease—but positive genetic results only indicate susceptibility, not active disease. Genetic testing is most useful when celiac antibodies are equivocal or when patients have already started gluten-free diet.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Helicobacter Pylori Infection
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Helicobacter pylori is a spiral-shaped, gram-negative bacterium uniquely adapted to survive in the acidic gastric environment. It colonizes the stomach lining in approximately 30-50% of the global population, with prevalence varying by geography, socioeconomic status, and age. H-pylori is transmitted via oral-oral or fecal-oral routes, typically acquired in childhood. While many infected individuals remain asymptomatic carriers, H-pylori is the primary cause of chronic gastritis, peptic ulcer disease (90% of duodenal ulcers, 70% of gastric ulcers), and significantly increases gastric cancer and MALT lymphoma risk.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        H-pylori produces urease enzyme, which converts urea to ammonia, neutralizing gastric acid and creating a hospitable microenvironment. Bacterial virulence factors (CagA, VacA) induce inflammation, epithelial damage, and altered gastric acid secretion. Symptomatic infection causes dyspepsia, epigastric pain, nausea, and bloating. Peptic ulcers present with gnawing abdominal pain, often relieved by eating or antacids, and can cause complications including bleeding, perforation, and gastric outlet obstruction. Long-term infection promotes gastric atrophy, intestinal metaplasia, and progression to gastric adenocarcinoma.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        H-Pylori Testing and Eradication
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Several testing methods detect H-pylori infection. Serology (blood antibody testing) is widely available and inexpensive, detecting IgG antibodies against H-pylori. However, antibodies persist for months to years after eradication, making serology unreliable for confirming treatment success. Stool antigen testing detects bacterial proteins in fecal samples, providing accurate diagnosis of active infection. Urea breath testing involves ingesting labeled urea; H-pylori urease converts it to labeled CO2, detectable in exhaled breath. Both stool antigen and breath tests can confirm eradication post-treatment.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        H-pylori eradication therapy dramatically reduces ulcer recurrence and gastric cancer risk. Standard treatment consists of triple therapy: proton pump inhibitor (PPI) twice daily, clarithromycin, and amoxicillin (or metronidazole in penicillin-allergic patients) for 14 days. Increasing antibiotic resistance has reduced eradication rates; sequential or quadruple therapy regimens may be required. Post-treatment testing (stool antigen or breath test) should occur at least 4 weeks after completing antibiotics and PPIs to confirm eradication. Successful treatment requires strict medication adherence and completion of full antibiotic course.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Gut Microbiome and Digestive Health
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        The gut microbiome comprises trillions of microorganisms—predominantly bacteria, but also archaea, viruses, and fungi—residing in the gastrointestinal tract, particularly the colon. This complex ecosystem performs essential functions: fermenting indigestible carbohydrates to produce short-chain fatty acids (SCFAs), synthesizing vitamins (K, B12, biotin, folate), metabolizing bile acids, training the immune system, maintaining intestinal barrier integrity, and producing neurotransmitters affecting brain function (the gut-brain axis). Microbiome composition varies substantially between individuals based on genetics, diet, medications (particularly antibiotics), stress, and environmental exposures.
                    </p>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Dysbiosis—microbial imbalance characterized by reduced diversity, decreased beneficial species, or overgrowth of pathogenic bacteria—has been implicated in numerous conditions including inflammatory bowel disease, irritable bowel syndrome, obesity, metabolic syndrome, allergies, autoimmune diseases, and mental health disorders. While research demonstrates clear associations, establishing causality and developing effective microbiome-targeted therapies remains challenging. Beneficial bacteria like Bifidobacterium, Lactobacillus, Akkermansia, and Faecalibacterium produce anti-inflammatory metabolites and strengthen gut barrier function. Pathogenic species like certain Clostridium and Escherichia coli produce toxins and promote inflammation.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Microbiome Testing and Interpretation
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Gut microbiome testing analyzes stool samples using DNA sequencing techniques (16S rRNA sequencing or shotgun metagenomic sequencing) to identify bacterial species, relative abundance, diversity metrics, and functional capacity. Reports typically categorize bacteria as beneficial, neutral, or potentially pathogenic, providing diversity scores and comparisons to reference populations. While microbiome testing generates fascinating data, clinical interpretation remains complex. There is no universally "optimal" microbiome composition; healthy individuals demonstrate considerable inter-individual variation.
                    </p>


                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Microbiome testing may be most useful when integrated with clinical assessment in individuals with chronic digestive symptoms, recurrent infections, or conditions associated with dysbiosis. Identified abnormalities can guide interventions including dietary modification (increased fiber, prebiotics), targeted probiotics containing deficient species, elimination of trigger foods, or fecal microbiota transplantation in severe cases of recurrent Clostridium difficile infection. However, the evidence base for most microbiome-targeted interventions remains limited, and results should be interpreted cautiously alongside conventional diagnostic testing.
                    </p>

                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Inflammatory Bowel Disease and Calprotectin
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Inflammatory bowel disease (IBD)—encompassing Crohn's disease and ulcerative colitis—involves chronic intestinal inflammation caused by dysregulated immune responses. Symptoms include chronic diarrhea (often bloody), abdominal pain, weight loss, fever, and fatigue. Fecal calprotectin, a protein released by activated neutrophils during intestinal inflammation, serves as a non-invasive biomarker for IBD. Elevated calprotectin (above 50-100 μg/g) suggests organic intestinal inflammation, helping distinguish IBD from functional disorders like IBS. However, calprotectin is not specific to IBD; infections, NSAIDs, and colorectal cancer can also elevate levels. Elevated calprotectin warrants further investigation with colonoscopy.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        Nutritional Deficiencies and Malabsorption
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Digestive disorders frequently cause nutritional deficiencies through malabsorption. Celiac disease commonly causes iron, folate, B12, calcium, and vitamin D deficiency. Inflammatory bowel disease depletes iron, zinc, selenium, and vitamins. Bacterial overgrowth causes B12 deficiency. Comprehensive nutritional assessment—full blood count, ferritin, B12, folate, vitamin D, calcium, magnesium—identifies deficiencies requiring supplementation. Persistent deficiencies despite oral supplementation suggest ongoing malabsorption necessitating further gastrointestinal investigation.
                    </p>


                    <h2 className="text-[19px] font-semibold text-[var(--brandColor)]  mt-8">
                        When to Seek Digestive Health Testing
                    </h2>

                    <p className="mt-5 text-[15px] leading-7 text-[#555555] sm:text-[16px]">
                        Digestive health testing is appropriate for chronic or recurrent abdominal symptoms, unexplained iron deficiency anaemia, chronic diarrhoea or constipation, unintentional weight loss, family history of coeliac disease or IBD, or symptoms suggestive of malabsorption. Alarm symptoms requiring urgent medical evaluation include progressive dysphagia, persistent vomiting, significant unintentional weight loss, rectal bleeding, or severe abdominal pain. While many digestive symptoms are benign, comprehensive testing ensures serious underlying pathology is not missed and enables targeted treatment to improve quality of life.
                    </p>


                </div>


                <hr className="mt-12 border-t border-[#d5d5d5]" />

                {/* Header */}
                <div className="text-center py-12">
                    <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-6 sm:text-[16px]">
                        Available Screening
                    </p>
                    <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[#555555] sm:text-[38px]">
                        Digestive Health Tests
                    </h1>

                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {digestiveHealthTests.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e4e4e4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brandColor)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] bg-blue-100/30"
                        >
                            {/* Top Accent */}
                            <div className="absolute left-0 top-0 h-1 w-full bg-[var(--brandColor)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="mb-5 flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brandColor)]/10 transition-all duration-300 group-hover:bg-[var(--brandColor)]">
                                    <FiActivity
                                        className="text-3xl text-[var(--brandColor)] transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>
                            </div>

                            {/* Service Name */}
                            <h2 className="text-center text-[19px] font-semibold leading-7 text-[#3f3f3f] transition-colors duration-300 group-hover:text-[var(--brandColor)]">
                                {item.name}
                            </h2>

                            {/* Description */}
                            <p className="mt-3 flex-1 text-center text-[14px] leading-6 text-[#666666] sm:text-[15px]">
                                {item.description}
                            </p>

                            {/* Divider */}
                            <div className="my-5 border-t border-[#eeeeee]" />

                            {/* Price */}
                            <div className="text-center">
                                <span className="text-xs font-medium uppercase tracking-wider text-[#999999]">
                                    Starting From
                                </span>

                                <p className="mt-1 text-[22px] font-semibold text-[var(--brandColor)]">
                                    £{item.price}
                                    <span className="text-sm text-black"> {item.plusPrice > "0" && `+  £${item.plusPrice}  `}</span>
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="button"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brandColor)] px-5 py-3 text-[14px] font-medium text-white transition-all duration-300 hover:brightness-95 hover:shadow-md"
                            >
                                <span>Book Now</span>
                                <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>


            </section>
        </main >
    );
};

export default Page;