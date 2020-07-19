import axios from "axios";

export const api = axios.create({
  baseURL: "http://212.47.241.143:5000/"
});

export const loadAuthorisationHeader = () => ({
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
});
