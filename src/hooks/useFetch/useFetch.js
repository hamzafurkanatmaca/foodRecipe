import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setData(response.data);
    setLoading(false);
  };
  return { loading, data };
}
