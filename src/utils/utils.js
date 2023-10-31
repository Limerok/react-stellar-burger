export const checkReponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const chekUrl = (location, url, valueOne, valueTwo) => {
  return location === url ? valueOne : valueTwo
}