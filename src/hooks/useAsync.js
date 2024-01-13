import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../libs/constants";

function useAsync(suburl, method = "GET") {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [err, setErr] = useState(undefined);
  function getData() {
    setLoading(true);
    axios({
      url: `${BASE_URL}${suburl}`,
      method,
      //params: { limit: 5 },
    })
      .then((res) => {
        console.log(res.data);
        setData(res);
        setLoading(false);
      })
      .catch((er) => {
        console.log("errrrr:", er || `can't get data`);
        setErr(er);
        setLoading(false);
      })
      .finally(() => {
        console.log("Succefully finished");
      });
  }
  return { loading, data, err, getData };
}

export default useAsync;
