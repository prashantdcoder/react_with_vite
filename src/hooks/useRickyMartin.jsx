import { useState } from "react";

const useRickyMartin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState();

  const fetchRickyMartinData = () => {
    const url = "https://rickandmortyapi.com/api/character?page=2";
    setLoading(true);
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        setLoading(false);
        setIsSuccess(true);
        setData(json);
      })
      .catch((err) => {
        setLoading(false);
        setIsSuccess(false);
        console.log("err", err);
      });
  };

  return { data, loading, isSuccess, fetchRickyMartinData };
};

export default useRickyMartin;
