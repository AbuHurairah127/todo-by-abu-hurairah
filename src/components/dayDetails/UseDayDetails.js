import { useState } from "react";

const UseDayDetails = () => {
  let namesOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let namesOfMonths = [
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

  let now = new Date();
  let today = now.getDay();
  today = namesOfDays[today];
  let toDate = now.getDate();
  let toMonth = now.getMonth();
  toMonth = namesOfMonths[toMonth];
  const [day, setDay] = useState(today);
  const [date, setDate] = useState(toDate);
  const [month, setMonth] = useState(toMonth);
  return {
    day,
    date,
    month,
  };
};

export default UseDayDetails;
