import { api } from "./constant"
import { checkReponse } from "./utils"

export const getIngredients = () => {
  return fetch(`${api}/ingredients`)
  .then(checkReponse)
}