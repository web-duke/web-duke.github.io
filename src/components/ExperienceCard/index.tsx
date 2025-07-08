import { useTranslation } from "react-i18next";
import type { Experience } from "../../hooks/useExperiences";
import "./index.scss";

type ExperienceCardProps = {
  data: Experience;
} & React.HTMLAttributes<HTMLDivElement>;

export const ExperienceCard = ({ className, data }: ExperienceCardProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "ExperienceCard" });

  return (
    <div className={`ExperienceCard ${className ?? ""}`}>
      <div className="ExperienceCard__date">
        <span className="ExperienceCard__date__icon material-symbols-sharp">
          date_range
        </span>
        {data.startDate} - {data.endDate}
      </div>

      <h2 className="ExperienceCard__company">
        {data.companyName}

        <span className="ExperienceCard__company__location">
          <span className="ExperienceCard__company__location__icon material-symbols-sharp">
            location_on
          </span>
          {data.location}
        </span>

        {data.remote && (
          <span className="ExperienceCard__company__remoteTag">
            {data.remote}% {t("remote")}
          </span>
        )}
      </h2>

      <div className="ExperienceCard__jobTitle">{data.jobTitle}</div>

      <div className="ExperienceCard__skills">
        {data.skills.map((skill, i) => (
          <span
            key={`ExperienceCard__skills-${i}`}
            className="ExperienceCard__skills__item"
          >
            {skill}
          </span>
        ))}
      </div>

      {data.details && (
        <ul className="ExperienceCard__details">
          {data.details.map((detail, i) => (
            <li
              className="ExperienceCard__details__item"
              key={`ExperienceCard__details-${i}`}
            >
              {detail}
            </li>
          ))}
        </ul>
      )}

      {data.sources && (
        <div className="ExperienceCard__sources">
          <span className="ExperienceCard__sources__icon material-symbols-sharp light">
            link
          </span>

          {data.sources.map((source, i) => (
            <a href={source.url} key={`ExperienceCard__sources-${i}`}>
              {source.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
