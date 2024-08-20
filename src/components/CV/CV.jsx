import "./CV.css";

function CV({ general, educations, workExperiences }) {
  let generalContent;
  if (!general) {
    generalContent = (
      <>
        <h2>General information</h2>
        <div className="contacts">
          <p>contacts...</p>
        </div>
      </>
    );
  } else {
    generalContent = (
      <>
        <h2>
          {general.name || "Name..."}, {general.profession || "profession..."}
        </h2>
        <div className="contacts">
          <p>{general.email || "email..."}</p>
          <p>{general.phone || "phone number..."}</p>
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
        {educations.map((education) => {
          return (
            <div key={education.id} className="cv-info">
              <h3>
                {education.title} in {education.school}
              </h3>
              <p className="cv-dates">
                From {education["start-date"]} to {education["end-date"]}
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
        {workExperiences.map((workExperience) => {
          return (
            <div key={workExperience.id} className="cv-info">
              <h3>
                {workExperience.title} in {workExperience.company}
              </h3>
              <h4>Responsibilities:</h4>
              <p>{workExperience.responsibilities}</p>
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
      <section className="education-section">
        <h2>Education</h2>
        {educationsContent}
      </section>
      <section className="work-experience-section">
        <h2>Work experience</h2>
        {workExperienceContent}
      </section>
      <footer>{footerContent}</footer>
    </section>
  );
}

export default CV;
