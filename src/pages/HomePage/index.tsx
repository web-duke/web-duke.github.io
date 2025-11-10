import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../../components/ExperienceCard";
import PieChart from "../../components/PieChart";
import { useExperiences } from "../../hooks/useExperiences";
import "./index.scss";
import { CONTACT_DATA } from "../../constants/contactData";

export const HomePage = () => {
  const { experiences, skillsYears, education } = useExperiences();
  const { t } = useTranslation("translation", { keyPrefix: "pages.HomePage" });

  return (
    <div className="HomePage">
      <section className="HomePage__intro">
        <p>{t("intro")}</p>

        <p className="HomePage__intro__noContact">
          {t("noContact")}
          <a
            href={CONTACT_DATA.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p className="HomePage__intro__contact">
          <span className="HomePage__intro__contact__email">
            {CONTACT_DATA.Email}
          </span>{" "}
          - {CONTACT_DATA.City}
        </p>
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
            <ExperienceCard
              className={
                i === 1 || i === 3 || i === 6 || i === 9 ? "page-break" : ""
              }
              data={experience}
            />
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
