import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard, {
  type ExperienceProps,
} from "../../components/ExperienceCard";
import { SKILL_NAME } from "../../constants/skills";
import { getDurationSum } from "../../utils/date";
import "./index.scss";

export const HomePage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.HomePage" });
  const { t: tExp } = useTranslation("translation", {
    keyPrefix: "pages.HomePage.experiences",
  });
  const { t: tEdu } = useTranslation("translation", {
    keyPrefix: "pages.HomePage.education",
  });
  const { t: tCommon } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const experiences: ExperienceProps[] = [
    {
      startDate: "2023-11",
      endDate: "2025-05",
      jobTitle: tExp("kehops.jobTitle"),
      companyName: "Kehops",
      location: "Québec, Qc, Canada",
      skills: [
        SKILL_NAME.React,
        SKILL_NAME.Typescript,
        SKILL_NAME.Javascript,
        SKILL_NAME.GraphQL,
        SKILL_NAME.NestJs,
        SKILL_NAME.Jest,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Scss,
        SKILL_NAME.TailwindCSS,
        SKILL_NAME.Astro,
        SKILL_NAME.Jira,
        SKILL_NAME.Figma,
      ],
      details: [tExp("kehops.details1"), tExp("kehops.details2")],
      sources: [{ url: "https://www.kehops.com/", label: "kehops.com" }],
    },
    {
      startDate: "2020-10",
      endDate: "2023-10",
      jobTitle: tExp("appcom.jobTitle"),
      companyName: "Appcom",
      location: "Longueuil, Qc, Canada",
      skills: [
        SKILL_NAME.React,
        SKILL_NAME.Typescript,
        SKILL_NAME.Javascript,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Scss,
        SKILL_NAME.Jira,
        SKILL_NAME.Figma,
      ],
      details: [
        tExp("appcom.details1"),
        tExp("appcom.details2"),
        tExp("appcom.details3"),
      ],
      sources: [{ url: "https://appcom.ca/", label: "appcom.ca" }],
    },
    {
      startDate: "2019-02",
      endDate: "2020-05",
      jobTitle: tExp("radioCan.jobTitle"),
      companyName: "Radio Canada",
      location: "Montréal, Qc, Canada",
      skills: [
        SKILL_NAME.React,
        SKILL_NAME.Typescript,
        SKILL_NAME.Javascript,
        SKILL_NAME.Storybook,
        SKILL_NAME.StyledComponent,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Scss,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("radioCan.details1")],
      sources: [
        { url: "https://ici.radio-canada.ca/", label: "ici.radio-canada.ca" },
      ],
    },
    {
      startDate: "2015-04",
      endDate: "2018-12",
      jobTitle: tExp("misterFly.jobTitle"),
      companyName: "MisterFly",
      location: "Paris, France",
      skills: [
        SKILL_NAME.Angular,
        SKILL_NAME.Javascript,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Scss,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("misterFly.details1"), tExp("misterFly.details2")],
      sources: [
        { url: "https://www.misterfly.com/", label: "misterfly.com" },
        { url: "https://www.idiliz.com/", label: "idiliz.com" },
      ],
    },
    {
      startDate: "2015-04",
      endDate: "2017-07",
      jobTitle: tExp("bazarchic.jobTitle"),
      companyName: "Bazarchic",
      location: "Gennevilliers, France",
      skills: [
        SKILL_NAME.Symfony,
        SKILL_NAME.Javascript,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [
        tExp("bazarchic.details1"),
        tExp("bazarchic.details2"),
        tExp("bazarchic.details3"),
        tExp("bazarchic.details4"),
      ],
      sources: [{ url: "https://fr.bazarchic.com/", label: "bazarchic.com" }],
    },
    {
      startDate: "2015-01",
      endDate: "2015-03",
      jobTitle: tExp("shiva.jobTitle"),
      companyName: "Shiva Communication",
      location: "Clichy, France",
      skills: [
        SKILL_NAME.Symfony,
        SKILL_NAME.Javascript,
        SKILL_NAME.Git,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("shiva.details1")],
      sources: [{ url: "http://www.shivacom.fr/", label: "shivacom.fr" }],
    },
    {
      startDate: "2014-11",
      endDate: "2015-01",
      jobTitle: tExp("bnp.jobTitle"),
      companyName: "BNP Paribas",
      location: "Versailles, France",
      skills: [
        SKILL_NAME.Javascript,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Svn,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("bnp.details1")],
      sources: [
        { url: "https://mabanque.bnpparibas/", label: "mabanque.bnpparibas" },
      ],
    },
    {
      startDate: "2014-09",
      endDate: "2014-10",
      jobTitle: tExp("weka.jobTitle"),
      companyName: "Weka",
      location: "Versailles, France",
      skills: [
        SKILL_NAME.Javascript,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Svn,
        SKILL_NAME.Jira,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("weka.details1")],
      sources: [{ url: "https://www.weka.fr/", label: "weka.fr" }],
    },
    {
      startDate: "2012-08",
      endDate: "2014-08",
      jobTitle: tExp("kalidea.jobTitle"),
      companyName: "Kalidea Pulse",
      location: "Versailles, France",
      skills: [
        SKILL_NAME.Php,
        SKILL_NAME.Javascript,
        SKILL_NAME.ResponsiveDesign,
        SKILL_NAME.HtmlCss,
        SKILL_NAME.Svn,
        SKILL_NAME.Photoshop,
      ],
      details: [tExp("kalidea.details1")],
    },
  ];

  const skillsYears = {
    Angular: getDurationSum(
      [{ start: "2015-04", end: "2018-12" }],
      tCommon,
      true
    ),
    Astro: getDurationSum(
      [{ start: "2023-11", end: "2025-05" }],
      tCommon,
      true
    ),
    Figma: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
      ],
      tCommon,
      true
    ),
    Git: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
      ],
      tCommon,
      true
    ),
    GraphQL: getDurationSum(
      [{ start: "2023-11", end: "2025-05" }],
      tCommon,
      true
    ),
    HtmlCss: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Javascript: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Jest: getDurationSum([{ start: "2023-11", end: "2025-05" }], tCommon, true),
    Jira: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    NestJs: getDurationSum(
      [{ start: "2023-11", end: "2025-05" }],
      tCommon,
      true
    ),
    Photoshop: getDurationSum(
      [
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Php: getDurationSum([{ start: "2012-08", end: "2014-08" }], tCommon, true),
    React: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
      ],
      tCommon,
      true
    ),
    ResponsiveDesign: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Scss: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Storybook: getDurationSum(
      [{ start: "2019-02", end: "2020-05" }],
      tCommon,
      true
    ),
    StyledComponent: getDurationSum(
      [{ start: "2019-02", end: "2020-05" }],
      tCommon,
      true
    ),
    Svn: getDurationSum(
      [
        { start: "2014-11", end: "2015-01" },
        { start: "2014-09", end: "2014-10" },
        { start: "2012-08", end: "2014-08" },
      ],
      tCommon,
      true
    ),
    Symfony: getDurationSum(
      [
        { start: "2015-04", end: "2018-12" },
        { start: "2015-01", end: "2015-03" },
      ],
      tCommon,
      true
    ),
    TailwindCSS: getDurationSum(
      [{ start: "2023-11", end: "2025-05" }],
      tCommon,
      true
    ),
    Typescript: getDurationSum(
      [
        { start: "2023-11", end: "2025-05" },
        { start: "2020-10", end: "2023-10" },
        { start: "2019-02", end: "2020-05" },
      ],
      tCommon,
      true
    ),
  };

  const education: ExperienceProps[] = [
    {
      startDate: "2012-09",
      endDate: "2014-09",
      jobTitle: tEdu("ipssi.jobTitle"),
      companyName: "IPSSI",
      location: "Paris, France",
      skills: ["Gestion de projet", "Développement Web"],
      sources: [{ url: "https://ecole-ipssi.com/", label: "ecole-ipssi.com" }],
    },
    {
      startDate: "2008-09",
      endDate: "2011-09",
      jobTitle: tEdu("julesFerry.jobTitle"),
      companyName: "Lycée Jules Ferry",
      location: "julesFerry, France",
      skills: ["Gestion de projet", "Développement Web"],
    },
  ];

  return (
    <div className="HomePage">
      <section className="HomePage__intro">
        <p>{t("intro")}</p>
      </section>

      <section className="HomePage__experiences">
        <h1 className="HomePage__experiences__title">
          <div className="HomePage__experiences__title__wrapper">
            <span className="HomePage__experiences__title__wrapper__icon material-symbols-sharp">
              domain
            </span>

            {t("experienceTitle")}
          </div>
        </h1>

        {experiences.map((experience, i) => (
          <React.Fragment key={`ExperienceCard-${i}`}>
            <ExperienceCard data={experience} />
          </React.Fragment>
        ))}
      </section>

      <section className="HomePage__education">
        <h1 className="HomePage__experiences__title">
          <div className="HomePage__experiences__title__wrapper">
            <span className="HomePage__experiences__title__wrapper__icon material-symbols-sharp">
              school
            </span>
            {t("educationTitle")}
          </div>
        </h1>

        {education.map((education, i) => (
          <React.Fragment key={`ExperienceCard-${i}`}>
            <ExperienceCard data={education} />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
