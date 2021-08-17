const dateParse = (str) => {
  var [year, month, date] = str?.split("T")[0].split("-") || [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date = parseInt(date);
  month = months[parseInt(month) - 1];
  year = parseInt(year);
  return { date, month, year };
};
export { dateParse };
