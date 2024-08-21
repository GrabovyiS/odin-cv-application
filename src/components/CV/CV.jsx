import "./CV.css";
import getTotalWorkExperience from "../../helpers/getTotalWorkExperience";

function CV({ general, educations, workExperiences }) {
  let generalContent;
  if (!general) {
    generalContent = (
      <>
        <h2>Start filling in your CV!</h2>
      </>
    );
  } else {
    generalContent = (
      <>
        <h2>
          {general.name || "Name"}
          {general.profession ? ", " + general.profession : ""}
        </h2>
        <div className="contacts">
          <p>{general.email || "email"}</p>
          <p>{general.phone || "phone number"}</p>
        </div>
      </>
    );
  }

  let educationsContent;
  if (!educations) {
    educationsContent = <></>;
  } else {
    educationsContent = (
      <>
        <h2>Education</h2>
        {educations.map((education) => {
          return (
            <div key={education.id} className="cv-info">
              <h3>
                {education.title} in {education.school}
              </h3>
              <p className="cv-dates">
                From {education["start-date"]} up to{" "}
                {education["end-date"] || "now"}
              </p>
            </div>
          );
        })}
      </>
    );
  }

  let workExperienceContent;
  if (!workExperiences) {
    workExperienceContent = <></>;
  } else {
    workExperiences.sort((workExperience1, workExperience2) => {
      const startDate1 = new Date(workExperience1["start-date"]);
      const startDate2 = new Date(workExperience2["start-date"]);

      return startDate1 - startDate2;
    });

    const { totalYears, totalMonths } = getTotalWorkExperience(workExperiences);

    workExperienceContent = (
      <>
        <h2>Work Experience</h2>
        <p>
          {totalYears} years {totalMonths} months
        </p>
        {workExperiences.map((workExperience) => {
          return (
            <div key={workExperience.id} className="cv-info">
              <h3>{workExperience.company}</h3>
              <h4>{workExperience.title}</h4>
              {workExperience.responsibilities && (
                <>
                  <p>{workExperience.responsibilities}</p>
                </>
              )}
              <p className="cv-dates">{}</p>
            </div>
          );
        })}
      </>
    );
  }

  let footerContent;
  if (!general) {
    footerContent = <></>;
  } else {
    footerContent = (
      <>
        <div className="contacts">
          <p>{general.email}</p>
          <p>{general.phone}</p>
        </div>
      </>
    );
  }

  return (
    <section className="cv-section">
      <header>{generalContent}</header>
      <section className="education-section">{educationsContent}</section>
      <section className="work-experience-section">
        {workExperienceContent}
      </section>
      <footer>{footerContent}</footer>
    </section>
  );
}

export default CV;
