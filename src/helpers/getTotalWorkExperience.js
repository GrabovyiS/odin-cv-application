function getTotalWorkExperience(workExperiences) {
  const sortedWorkExperiences = workExperiences.toSorted(
    (workExperience1, workExperience2) => {
      const startDate1 = new Date(workExperience1["start-date"]);
      const startDate2 = new Date(workExperience2["start-date"]);

      return startDate1 - startDate2;
    }
  );

  const workRanges = [
    {
      "start-date": new Date(sortedWorkExperiences[0]["start-date"]),
      "end-date":
        sortedWorkExperiences[0]["end-date"] === ""
          ? new Date()
          : new Date(sortedWorkExperiences[0]["end-date"]),
    },
  ];
  let currentWorkRangeIndex = 0;

  console.log(workRanges);

  for (let i = 1; i < sortedWorkExperiences.length; i++) {
    let currentWorkRange = workRanges[currentWorkRangeIndex];

    let experienceStartDate = new Date(sortedWorkExperiences[i]["start-date"]);

    let experienceEndDate =
      sortedWorkExperiences[i]["end-date"] === ""
        ? new Date()
        : new Date(sortedWorkExperiences[i]["end-date"]);

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
