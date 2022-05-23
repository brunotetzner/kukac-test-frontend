import axios from "axios";
import { toast } from "react-hot-toast";
export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const searchForPalindromes = async (value, setState) => {
  api
    .post("/api/palindromes", value)
    .then((response) => {
      toast.success("Palindromos calculados com sucesso");
      setState(response.data.palindromes);
    })
    .catch((err) => {
      toast.error("Algo deu errado. Revise as informações e tente novamente");
      console.log("<ERRO>", err);
    });
};

export const postCar = async (value, setState) => {
  api
    .post("/api/automoveis/car", value)
    .then((response) => {
      setState(response.data);
      toast.success("Carro criado com sucesso");
    })
    .catch((err) => {
      toast.error("Algo deu errado. Revise as informações e tente novamente");
      console.log("<ERRO>", err);
    });
};

export const postMotorCycle = async (value, setState) => {
  api
    .post("/api/automoveis/motorcycle", value)
    .then((response) => {
      setState(response.data);
      toast.success("Moto criada com sucesso");
    })
    .catch((err) => {
      console.log("<ERRO>", err);
    });
};

const cepApi = axios.create({ baseURL: "https://viacep.com.br/ws/" });

export const getCep = (cep, setState, setError) => {
  cepApi
    .get(`${cep}/json/`)
    .then((response) => {
      // toast.success("Cep encontrado");

      setState(response.data);
      setError(false);
    })
    .catch((err) => {
      setError(true);

      console.log(err);
    });
};
