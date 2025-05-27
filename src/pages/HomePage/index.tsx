import { useTranslation } from "react-i18next";
import ExperienceCard, {
  type ExperienceProps,
} from "../../components/ExperienceCard";
import "./index.scss";
import React from "react";

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
        "Git",
        "GraphQL",
        "Nest Js",
        "Scss",
        "Tailwind CSS",
        "HTML/CSS",
        "Jest",
        "Responsive Design",
        "Astro",
        "Jira",
        "Figma",
      ],
      details: [tExp("kehops.details1"), tExp("kehops.details2")],
    },
    {
      startDate: "2020-10",
      endDate: "2023-10",
      jobTitle: tExp("appcom.jobTitle"),
      companyName: "Appcom",
      location: "Longueuil, Qc, Canada",
      skills: [
        "React Js",
        "Typescript",
        "Javascript",
        "Git",
        "Scss",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Figma",
      ],
      details: [tExp("appcom.details1"), tExp("appcom.details2")],
    },
    {
      startDate: "2019-02",
      endDate: "2020-05",
      jobTitle: tExp("radioCan.jobTitle"),
      companyName: "Radio Canada",
      location: "Montréal, Qc, Canada",
      skills: [
        "React Js",
        "Typescript",
        "Javascript",
        "Git",
        "Scss",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
        "Storybook",
        "Styled Component",
      ],
      details: [tExp("radioCan.details1")],
    },
  ];

  return (
    <div className="HomePage">
      <section className="HomePage__intro">
        <p>{t("intro")}</p>
      </section>

      <section className="HomePage__experiences">
        <h1 className="HomePage__experiences__title">{t("experienceTitle")}</h1>

        {experiences.map((experience, i) => (
          <React.Fragment key={`ExperienceCard-${i}`}>
            <ExperienceCard data={experience} />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
