export const SKILL_CATEGORY = {
  Design: "design",
  Development: "development",
  ProjectManagement: "projectManagement",
};

export type SkillCategory =
  (typeof SKILL_CATEGORY)[keyof typeof SKILL_CATEGORY];

export const SKILL_NAME = {
  Angular: "Angular",
  Astro: "Astro",
  Figma: "Figma",
  Git: "Git",
  GraphQL: "GraphQL",
  HtmlCss: "HTML/CSS",
  Javascript: "Javascript",
  Jest: "Jest",
  Jira: "Jira",
  NestJs: "Nest Js",
  Photoshop: "Photoshop",
  Php: "PHP",
  React: "React Js",
  ResponsiveDesign: "Responsive Design",
  Scss: "Scss",
  Storybook: "Storybook",
  StyledComponent: "Styled Component",
  Svn: "SVN",
  Symfony: "Symfony",
  TailwindCSS: "Tailwind CSS",
  Typescript: "Typescript",
};

export type SkillName = (typeof SKILL_NAME)[keyof typeof SKILL_NAME];

export const SKILLS: Record<SkillName, SkillCategory> = {
  Angular: SKILL_CATEGORY.Development,
  Astro: SKILL_CATEGORY.Development,
  Figma: SKILL_CATEGORY.Design,
  Git: SKILL_CATEGORY.Development,
  GraphQL: SKILL_CATEGORY.Development,
  HtmlCss: SKILL_CATEGORY.Development,
  Javascript: SKILL_CATEGORY.Development,
  Jest: SKILL_CATEGORY.Development,
  Jira: SKILL_CATEGORY.ProjectManagement,
  NestJs: SKILL_CATEGORY.Development,
  Photoshop: SKILL_CATEGORY.Design,
  Php: SKILL_CATEGORY.Development,
  React: SKILL_CATEGORY.Development,
  ResponsiveDesign: SKILL_CATEGORY.Design,
  SVN: SKILL_CATEGORY.Development,
  Scss: SKILL_CATEGORY.Development,
  Storybook: SKILL_CATEGORY.Development,
  StyledComponent: SKILL_CATEGORY.Development,
  Svn: SKILL_CATEGORY.Development,
  Symfony: SKILL_CATEGORY.Development,
  TailwindCSS: SKILL_CATEGORY.Development,
  Typescript: SKILL_CATEGORY.Development,
};
