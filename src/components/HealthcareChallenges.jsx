import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  UserCircleIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  DocumentChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";


const whyHealthy = [
  {
    title: "AI-Driven Personalization",
    desc: "Tailored health insights based on real-time vitals, lifestyle patterns, and genetic predisposition.",
    icon: UserCircleIcon,
  },
  {
    title: "Preventive & Predictive Healthcare",
    desc: "Early detection of potential health risks using advanced ML models.",
    icon: ChartBarIcon,
  },
  {
    title: "Integrated Health Ecosystem",
    desc: "Seamless integration with wearables, diagnostic labs, pharmacies, and insurance providers.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Hyper-Personalized Wellness Plans",
    desc: "Custom diet, fitness, and mental health recommendations for every individual.",
    icon: HeartIcon,
  },
  {
    title: "Clinical-Grade Insights",
    desc: "Evidence-based AI models that assist users and healthcare professionals.",
    icon: LightBulbIcon,
  },
  {
    title: "Secure & Compliant",
    desc: "Built with HIPAA-compliant architecture to ensure data privacy and security.",
    icon: LockClosedIcon,
  },
];

const challenges = [
  {
    title: "Doctor-Patient Gap",
    desc: "Limited time per consultation, incomplete medical history, and communication gaps often result in misdiagnoses—4 out of 10 diagnoses contain medical errors.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Inaccessible Medical History",
    desc: "Over 80% of physical medical records are lost—resulting in repeated diagnostics, delayed treatment, and increased costs.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Confusing Care Decisions",
    desc: "Patients struggle with basic questions: 'Do I need to consult a doctor?', 'Which specialist?', 'Is this drug working?', 'Is this test/product overpriced?'",
    icon: LightBulbIcon,
  },
  {
    title: "Rising Costs of Chronic and Critical Care",
    desc: "Chronic conditions progress due to delayed interventions, leading to costly critical care. Choosing the right provider or treatment path is often confusing and expensive.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Fragmented Care Journey",
    desc: "Multiple apps for specific needs lead to a disjointed and inconvenient healthcare experience.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Overmedication and Interaction Risks",
    desc: "Patients are often prescribed medicines—risking drug interactions, side effects, overdose, and reduced efficacy.",
    icon: BeakerIcon,
  },
  {
    title: "Missing Unified Personal Health Profile",
    desc: "Current wellness and telemedicine apps lack a unified personal health profile—offering limited tracking and no real-time, data-driven decision support.",
    icon: DocumentChartBarIcon,
  },
  {
    title: "Limited Family Health Management",
    desc: "There's no platform to manage the healthcare needs of an entire family in a single place—tracking histories, prescriptions, appointments, and preventive actions.",
    icon: UsersIcon,
  },
];

// --- UI Components ---

const SectionTitle = ({ children, theme }) => (
  <div className="relative inline-block mb-12 w-full">
    <h2
      className={`text-4xl font-extrabold text-center mb-2 tracking-tight ${
        theme === "dark" ? "text-[#e0f2fe]" : "text-[#22223b]"
      }`}
    >
      {children}
    </h2>
    <span
      className={`block mx-auto mt-2 w-24 h-1 rounded-full ${
        theme === "dark"
          ? "bg-gradient-to-r from-blue-400 via-emerald-500 to-purple-500"
          : "bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-600"
      }`}
    ></span>
  </div>
);

const GlowCard = ({ title, desc, theme, index, icon: Icon }) => {
  // Accent colors for borders and shadows
  const borderColors = [
    theme === "dark" ? "border-blue-500" : "border-blue-400",
    theme === "dark" ? "border-emerald-500" : "border-emerald-400",
    theme === "dark" ? "border-purple-500" : "border-indigo-400",
  ];
  const shadowColors = [
    theme === "dark" ? "shadow-blue-700/30" : "shadow-blue-400/20",
    theme === "dark" ? "shadow-emerald-600/30" : "shadow-emerald-400/20",
    theme === "dark" ? "shadow-purple-700/30" : "shadow-indigo-400/20",
  ];
  const cardBg = theme === "dark" ? "bg-[#1e293b]" : "bg-white";

  return (
    <div
      className={`relative rounded-2xl border-2 ${borderColors[index % 3]} ${cardBg}
        shadow-xl hover:shadow-2xl ${shadowColors[index % 3]}
        transition-all duration-300 p-6 flex flex-col justify-between min-h-[220px]
        backdrop-blur-md hover:-translate-y-2 overflow-hidden`}
    >
      <div className="flex items-center mb-3">
        {Icon && (
          <Icon
            className={`h-7 w-7 mr-3 ${
              theme === "dark"
                ? "text-blue-400"
                : "text-blue-500"
            }`}
          />
        )}
        <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-[#e0f2fe]" : "text-[#22223b]"}`}>
          {title}
        </h3>
      </div>
      <p className={`text-base ${theme === "dark" ? "text-[#cbd5e1]" : "text-[#475569]"}`}>
        {desc}
      </p>
    </div>
  );
};

const HealthySection = () => {
  const { isDarkMode } = useContext(AppContext);
  const theme = isDarkMode ? "dark" : "light";

  // Section background gradients
  const sectionBg1 =
    theme === "dark"
      ? "bg-[linear-gradient(120deg,#1e293b_0%,#334155_100%)]"
      : "bg-[linear-gradient(120deg,#e0f2fe_0%,#f3f4f6_100%)]";
  const sectionBg2 =
    theme === "dark"
      ? "bg-[linear-gradient(120deg,#334155_0%,#1e293b_100%)]"
      : "bg-[linear-gradient(120deg,#f3f4f6_0%,#e0f2fe_100%)]";

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* Why 1MBHealthy */}
      <section className={`py-20 transition-colors duration-300 ${sectionBg1}`}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle theme={theme}>Powerful Features for Complete Wellness</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyHealthy.map((item, idx) => (
              <GlowCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                theme={theme}
                index={idx}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Healthcare Challenges */}
      <section className={`py-20 transition-colors duration-300 ${sectionBg2}`}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle theme={theme}>Healthcare Challenges</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((item, idx) => (
              <GlowCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                theme={theme}
                index={idx}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthySection;
