import { useTranslation } from "react-i18next";
import { SKILL_NAME } from "../constants/skills";
import { getDurationSum } from "../utils/date";

type Sources = {
  url: string;
  label: string;
};

export interface Experience {
  id: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  companyName: string;
  location: string;
  skills: string[];
  remote?: number;
  details?: string[];
  sources?: Sources[];
}

export function useExperiences() {
  const { t: tExp } = useTranslation("translation", {
    keyPrefix: "pages.HomePage.experiences",
  });
  const { t: tEdu } = useTranslation("translation", {
    keyPrefix: "pages.HomePage.education",
  });
  const { t: tCommon } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const experiences: Experience[] = [
    {
      id: "freelance-2025",
      startDate: "2025-05",
      endDate: tExp("common.today"),
      jobTitle: tExp("freelance-2025.jobTitle"),
      companyName: "Upwork",
      location: "Qc, Canada",
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
      remote: 100,
      details: [tExp("freelance-2025.details")],
    },
    {
      id: "kehops",
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
      remote: 100,
      details: [tExp("kehops.details1"), tExp("kehops.details2")],
      sources: [{ url: "https://www.kehops.com/", label: "kehops.com" }],
    },
    {
      id: "appcom",
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
      remote: 100,
      details: [
        tExp("appcom.details1"),
        tExp("appcom.details2"),
        tExp("appcom.details3"),
      ],
      sources: [{ url: "https://appcom.ca/", label: "appcom.ca" }],
    },
    {
      id: "radioCan",
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
      id: "misterFly",
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
      id: "bazarchic",
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
      id: "shiva",
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
      id: "bnp",
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
      id: "weka",
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
      id: "kalidea",
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

  const experiencesWithDuration = experiences.map((exp) => ({
    ...exp,
    duration: getDurationSum(
      [{ start: exp.startDate, end: exp.endDate }],
      tCommon,
      true
    ) as number,
    durationText: getDurationSum(
      [{ start: exp.startDate, end: exp.endDate }],
      tCommon
    ),
  }));

  const skillsYears = [
    {
      name: SKILL_NAME.ResponsiveDesign,
      value:
        (experiencesWithDuration.find((e) => e.id === "kehops")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "appcom")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "radioCan")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "misterFly")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "shiva")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "bnp")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "weka")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "kalidea")?.duration ??
          0),
    },
    {
      name: `${SKILL_NAME.HtmlCss}/${SKILL_NAME.Javascript}`,
      value:
        (experiencesWithDuration.find((e) => e.id === "kehops")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "appcom")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "radioCan")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "misterFly")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "shiva")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "bnp")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "weka")?.duration ?? 0) +
        (experiencesWithDuration.find((e) => e.id === "kalidea")?.duration ??
          0),
    },
    {
      name: `${SKILL_NAME.React}/${SKILL_NAME.Typescript}`,
      value:
        (experiencesWithDuration.find((e) => e.id === "kehops")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "appcom")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "radioCan")?.duration ??
          0),
    },
    {
      name: `${SKILL_NAME.Storybook}/${SKILL_NAME.StyledComponent}`,
      value:
        experiencesWithDuration.find((e) => e.id === "radioCan")?.duration ?? 0,
    },
    {
      name: `${SKILL_NAME.GraphQL}/${SKILL_NAME.Jest}/${SKILL_NAME.NestJs}`,
      value:
        experiencesWithDuration.find((e) => e.id === "kehops")?.duration ?? 0,
    },
    {
      name: SKILL_NAME.Git,
      value:
        (experiencesWithDuration.find((e) => e.id === "kehops")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "appcom")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "radioCan")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "misterFly")?.duration ??
          0) +
        (experiencesWithDuration.find((e) => e.id === "shiva")?.duration ?? 0),
    },
  ];

  const education: Experience[] = [
    {
      id: "ipssi",
      startDate: "2012-09",
      endDate: "2014-09",
      jobTitle: tEdu("ipssi.jobTitle"),
      companyName: "IPSSI",
      location: "Paris, France",
      skills: ["Gestion de projet", "Développement Web"],
      sources: [{ url: "https://ecole-ipssi.com/", label: "ecole-ipssi.com" }],
    },
    {
      id: "julesFerry",
      startDate: "2008-09",
      endDate: "2011-09",
      jobTitle: tEdu("julesFerry.jobTitle"),
      companyName: "Lycée Jules Ferry",
      location: "julesFerry, France",
      skills: ["Gestion de projet", "Développement Web"],
    },
  ];

  return { experiences: experiencesWithDuration, skillsYears, education };
}
