import "./index.scss";

export type ExperienceProps = {
  startDate: string;
  endDate: string;
  jobTitle: string;
  companyName: string;
  location: string;
  skills: string[];
  details: string[];
};

type ExperienceCardProps = {
  data: ExperienceProps;
};

export const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <div className="ExperienceCard">
      <div className="ExperienceCard__date">
        {data.startDate} - {data.endDate}
      </div>

      <h2 className="ExperienceCard__company">
        {data.companyName}

        <span className="ExperienceCard__company__location">
          {data.location}
        </span>
      </h2>

      <div className="ExperienceCard__jobTitle">{data.jobTitle}</div>

      <div className="ExperienceCard__skills">
        {data.skills.map((skill) => (
          <span className="ExperienceCard__skills__item">{skill}</span>
        ))}
      </div>

      <ul className="ExperienceCard__details">
        {data.details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
