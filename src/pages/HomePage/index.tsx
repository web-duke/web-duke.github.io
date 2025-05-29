import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../../components/ExperienceCard";
import PieChart from "../../components/PieChart";
import { useExperiences } from "../../hooks/useExperiences";
import "./index.scss";

export const HomePage = () => {
  const { experiences, skillsYears, education } = useExperiences();
  const { t } = useTranslation("translation", { keyPrefix: "pages.HomePage" });

  return (
    <div className="HomePage">
      <section className="HomePage__intro">
        <p>{t("intro")}</p>
      </section>

      <section className="HomePage__experiencesSummary">
        <PieChart data={skillsYears} />
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
