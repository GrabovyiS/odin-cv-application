import "./CV.css";

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
    workExperienceContent = (
      <>
        <h2>Work Experience</h2>
        {workExperiences.map((workExperience) => {
          return (
            <div key={workExperience.id} className="cv-info">
              <h3>
                {workExperience.title} in {workExperience.company}
              </h3>
              {workExperience.responsibilities && (
                <>
                  <h4>Responsibilities:</h4>
                  <p>{workExperience.responsibilities}</p>
                </>
              )}
              <p className="cv-dates">
                From {workExperience["start-date"]} to
                {workExperience["end-date"]}
              </p>
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
