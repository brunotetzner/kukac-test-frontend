import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const searchForPalindromes = (value, setState) => {
  api
    .post("api/palindromes", value)
    .then((response) => {
      setState(response.data);
    })
    .catch((err) => {
      console.log("<ERRO>", err);
    });
};
