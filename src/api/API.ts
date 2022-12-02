import axios from "axios";

export const getInstruments = async () => {
  const config = {
    method: "get",
    url: "https://prototype.sbulltech.com/api/v2/instruments",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => console.log(e));
};
