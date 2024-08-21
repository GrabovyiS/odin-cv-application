import "./CV.css";
import getTotalWorkExperience from "../../helpers/getTotalWorkExperience";

function CV({ general, educations, workExperiences }) {
  let generalContent;
  if (!general && !educations && !workExperiences) {
    generalContent = (
      <>
        <h2>Start filling in your CV!</h2>
      </>
    );
  } else if (!general) {
    <>
      <h2>Name</h2>
    </>;
  } else {
    generalContent = (
      <>
        <h2>
          {general.name || "Name"}
          {general.profession ? ", " + general.profession : ""}
        </h2>
      </>
    );
  }

  let educationsContent;
  if (!educations) {
    educationsContent = <></>;
  } else {
    educationsContent = (
      <>
        <h3>Education</h3>
        {educations.map((education) => {
          return (
            <div key={education.id} className="cv-info">
              <div className="cv-info-dates">
                <p>
                  {new Date(education["start-date"]).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  –{" "}
                  {education["end-date"] === ""
                    ? "Present"
                    : new Date(education["end-date"]).toLocaleString(
                        "default",
                        { month: "long", year: "numeric" }
                      )}
                </p>
              </div>
              <div className="cv-info-content">
                <h4>{education.school}</h4>
                <p>Majored in: {education.title}</p>
              </div>
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
    const { totalYears, totalMonths } = getTotalWorkExperience(workExperiences);

    // Sort work experiences from most recent to oldest
    workExperiences.sort((workExperience1, workExperience2) => {
      const startDate1 = new Date(workExperience1["start-date"]);
      const startDate2 = new Date(workExperience2["start-date"]);

      return startDate2 - startDate1;
    });

    workExperienceContent = (
      <>
        <h3>Work Experience</h3>
        <p>
          Total work experience:{" "}
          {totalYears === 0
            ? ""
            : totalYears === 1
            ? totalYears + " year"
            : totalYears + " years"}{" "}
          {totalMonths === 0
            ? ""
            : totalMonths === 1
            ? totalMonths + " month"
            : totalMonths + " months"}
        </p>
        {workExperiences.map((workExperience) => {
          return (
            <div key={workExperience.id} className="cv-info">
              <div className="cv-info-dates">
                <p>
                  {new Date(workExperience["start-date"]).toLocaleString(
                    "default",
                    { month: "long", year: "numeric" }
                  )}{" "}
                  –{" "}
                  {workExperience["end-date"] === ""
                    ? "Present"
                    : new Date(workExperience["end-date"]).toLocaleString(
                        "default",
                        { month: "long", year: "numeric" }
                      )}
                </p>
              </div>
              <div className="cv-info-content">
                <h4>
                  {workExperience.company}{" "}
                  <span className="position-title">
                    | {workExperience.title}
                  </span>
                </h4>
                {workExperience.responsibilities && (
                  <>
                    <p>{workExperience.responsibilities}</p>
                  </>
                )}
              </div>
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
        <h3>Contact me at:</h3>
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
