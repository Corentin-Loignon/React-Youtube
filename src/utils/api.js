import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "fr", gl: "FR" },
  headers: {
    "X-RapidAPI-Key": "1a52497e5bmsh6ab48669f8567ddp10ef99jsn072787559132",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
