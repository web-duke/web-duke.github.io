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
    {
      startDate: "2015-04",
      endDate: "2018-12",
      jobTitle: tExp("misterFly.jobTitle"),
      companyName: "MisterFly",
      location: "Paris, France",
      skills: [
        "Angular",
        "Javascript",
        "Git",
        "Scss",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
      ],
      details: [tExp("misterFly.details1"), tExp("misterFly.details2")],
    },
    {
      startDate: "2015-04",
      endDate: "2017-07",
      jobTitle: tExp("bazarchic.jobTitle"),
      companyName: "Bazarchic",
      location: "Gennevilliers, France",
      skills: [
        "Symfony",
        "Javascript",
        "Git",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
      ],
      details: [
        tExp("bazarchic.details1"),
        tExp("bazarchic.details2"),
        tExp("bazarchic.details3"),
        tExp("bazarchic.details4"),
      ],
    },
    {
      startDate: "2015-01",
      endDate: "2015-03",
      jobTitle: tExp("shiva.jobTitle"),
      companyName: "Shiva Communication",
      location: "Clichy, France",
      skills: [
        "Symfony",
        "Javascript",
        "Git",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
      ],
      details: [tExp("shiva.details1")],
    },
    {
      startDate: "2014-11",
      endDate: "2015-01",
      jobTitle: tExp("bnp.jobTitle"),
      companyName: "BNP Paribas",
      location: "Versailles, France",
      skills: [
        "Javascript",
        "SVN",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
      ],
      details: [tExp("bnp.details1")],
    },
    {
      startDate: "2014-09",
      endDate: "2014-10",
      jobTitle: tExp("weka.jobTitle"),
      companyName: "Weka",
      location: "Versailles, France",
      skills: [
        "Javascript",
        "SVN",
        "HTML/CSS",
        "Responsive Design",
        "Jira",
        "Photoshop",
      ],
      details: [tExp("weka.details1")],
    },
    {
      startDate: "2012-08",
      endDate: "2014-08",
      jobTitle: tExp("kalidea.jobTitle"),
      companyName: "Kalidea Pulse",
      location: "Versailles, France",
      skills: [
        "Php",
        "Javascript",
        "SVN",
        "HTML/CSS",
        "Responsive Design",
        "Photoshop",
      ],
      details: [tExp("kalidea.details1")],
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
