function getTotalWorkExperience(workExperiences) {
  const workRanges = [
    {
      "start-date": new Date(workExperiences[0]["start-date"]),
      "end-date":
        workExperiences[0]["end-date"] === ""
          ? new Date()
          : new Date(workExperiences[0]["end-date"]),
    },
  ];
  let currentWorkRangeIndex = 0;

  console.log(workRanges);

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

  return { totalYears, totalMonths };
}

export default getTotalWorkExperience;
