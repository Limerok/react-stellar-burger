/* export const chekUrl = (location, url, valueOne, valueTwo) => {
  console.log(location, url);
  return location === url ? valueOne : valueTwo;
}; */

export const getStatus = (orderStatus) => {
  switch (orderStatus) {
    case "done":
      return "Выполнен";
    case "pending":
      return "Готовится";
    case "created":
      return "Создан";
  }
};
