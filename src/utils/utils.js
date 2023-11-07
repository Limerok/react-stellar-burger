export const chekUrl = (location, url, valueOne, valueTwo) => {
  console.log(location, url)
  return location === url ? valueOne : valueTwo
}