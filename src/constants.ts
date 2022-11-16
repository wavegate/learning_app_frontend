const DEV_URL = "http://localhost:5000";
const PROD_URL = "https://obscure-escarpment-76284.herokuapp.com";

export const API_URL =
  process.env.NODE_ENV === "development" ? DEV_URL : PROD_URL;
