import { api } from "./constant"
import { checkReponse } from "./utils"

export const getIngredients = () => { //Запрос ингридиентов для отображения на стр. Ингридиента
  return fetch(`${api}/ingredients`)
  .then(checkReponse)
}