const getDate = (epochTimestamp: number) => {
  const date = new Date(epochTimestamp);

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

  return `${date.getDate()} ${russianMonths[date.getMonth()]} ${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}
  `;
};
export default getDate;
