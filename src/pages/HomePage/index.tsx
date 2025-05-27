import { useTranslation } from "react-i18next";
import ExperienceCard, {
  type ExperienceProps,
} from "../../components/ExperienceCard";
import "./index.scss";

export const HomePage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.HomePage" });
  const { t: tExp } = useTranslation("translation", {
    keyPrefix: "pages.HomePage.experiences",
  });

  const experiences: ExperienceProps[] = [
    {
      startDate: "2023-11",
      endDate: "2025-05",
      jobTitle: tExp("kehops.jobTitle"),
      companyName: "Kehops",
      location: "Québec, Qc, Canada",
      skills: [
        "React Js",
        "Typescript",
        "Javascript",
        "GraphQL",
        "Nest Js",
        "Scss",
        "Tailwind CSS",
        "CSS",
        "Jest",
        "Responsive Design",
        "Astro",
        "Jira",
        "Figma",
      ],
      details: [tExp("kehops.details1"), tExp("kehops.details2")],
    },
  ];

  return (
    <div className="HomePage">
      <section className="HomePage__intro">
        <p>{t("intro")}</p>
      </section>

      <section className="HomePage__experiences">
        <h1 className="HomePage__experiences__title">{t("experienceTitle")}</h1>

        {experiences.map((experience) => (
          <ExperienceCard data={experience} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
