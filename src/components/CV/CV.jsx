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
    workExperiences.sort((workExperience1, workExperience2) => {
      const startDate1 = new Date(workExperience1["start-date"]);
      const startDate2 = new Date(workExperience2["start-date"]);

      return startDate1 - startDate2;
    });

    const workRanges = [
      {
        "start-date": new Date(workExperiences[0]["start-date"]),
        "end-date": new Date(workExperiences[0]["end-date"]),
      },
    ];
    let currentWorkRangeIndex = 0;

    for (let i = 1; i < workExperiences.length; i++) {
      let currentWorkRange = workRanges[currentWorkRangeIndex];

      let experienceStartDate = new Date(workExperiences[i]["start-date"]);

      let experienceEndDate =
        workExperiences[i]["end-date"] === ""
          ? new Date()
          : new Date(workExperiences[i]["end-date"]);

      let workRangeEndDate =
        currentWorkRange["end-date"] === ""
          ? new Date()
          : new Date(currentWorkRange["end-date"]);

      if (
        experienceStartDate <= workRangeEndDate &&
        experienceEndDate > workRangeEndDate
      ) {
        workRanges[currentWorkRangeIndex]["end-date"] = experienceEndDate;
      } else if (experienceStartDate > workRangeEndDate) {
        workRanges.push({
          "start-date": experienceStartDate,
          "end-date": experienceEndDate,
        });
        currentWorkRangeIndex++;
      }
    }

    console.log(workRanges);

    let totalMonths = 0;
    let totalYears = 0;

    for (let i = 0; i < workRanges.length; i++) {
      const startDate = workRanges[i]["start-date"];
      const endDate = workRanges[i]["end-date"];

      let currentRangeMonths = endDate.getMonth() - startDate.getMonth();
      if (currentRangeMonths < 12) {
        // Round it up, so that 1 week of work still counts as a month
        // and so that jan2020-jan2020 counts as a month
        currentRangeMonths++;
      }
      currentRangeMonths +=
        (endDate.getFullYear() - startDate.getFullYear()) * 12;

      totalMonths += currentRangeMonths;
    }

    totalYears = Math.floor(totalMonths / 12);
    totalMonths = totalMonths - totalYears * 12;

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
