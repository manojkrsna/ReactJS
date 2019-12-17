import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/mobiles/";

export function getMobiles() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
