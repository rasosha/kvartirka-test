const getDate = (date: string) => {
  const newDate = new Date(date);
  const russianMonths = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  return `${newDate.getDate()} ${
    russianMonths[newDate.getMonth()]
  } ${newDate.getFullYear()} ${newDate.getHours().toString().padStart(2, "0")}:${newDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}
  `;
};
export default getDate;
