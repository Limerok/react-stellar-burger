const settings = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`${res.status}`));
};

// получение данных с сервера
const getData = () => fetch(`${settings.baseUrl}`).then(checkResponse);

export { getData };