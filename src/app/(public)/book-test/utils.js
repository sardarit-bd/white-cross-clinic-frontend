export const GENDERS = ["Male", "Female", "Other", "Prefer not to say"];

export const MONTHS = [
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

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const hasValue = (v) => v !== undefined && v !== null && v !== "";

export const formatMoney = (v) => `£${Number(v).toFixed(2)}`;

const parseDate = (date) => {
  const [y, m, d] = date.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return { y, m, d, weekday };
};
export const formatDateLong = (date) => {
  const { y, m, d, weekday } = parseDate(date);
  return `${weekday}, ${d} ${MONTHS[m - 1]} ${y}`;
};

export const formatDateShort = (date) => {
  const { m, d, weekday } = parseDate(date);
  return `${weekday} ${d} ${MONTHS[m - 1]}`;
};

export const chipParts = (date) => {
  const { m, d, weekday } = parseDate(date);
  return {
    weekday: weekday.slice(0, 3),
    day: d,
    month: MONTHS[m - 1].slice(0, 3),
  };
};

export const buildDob = (details) =>
  `${details.dobYear}-${String(details.dobMonth).padStart(2, "0")}-${String(
    details.dobDay,
  ).padStart(2, "0")}`;

export const formatDobDisplay = (details) =>
  `${String(details.dobDay).padStart(2, "0")}-${String(
    details.dobMonth,
  ).padStart(2, "0")}-${details.dobYear}`;
