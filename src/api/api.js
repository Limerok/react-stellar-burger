const baseUrl = "https://norma.nomoreparties.space/api";


const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`${res.status}`));
};

// получение данных с сервера
const getData = () => fetch(`${baseUrl}/ingredients`).then(checkResponse);

/* const getOrder = (ingredientsId) => {
  

  const res = fetch(`${baseUrl}/orders`, settings)

  checkResponse(res)
} */

const getOrder = (ingredientsId) => {
  const settings = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "ingredients": ingredientsId })
};

  return fetch(`${baseUrl}/orders`, settings)
  .then(checkResponse)
}

export { getData, getOrder };