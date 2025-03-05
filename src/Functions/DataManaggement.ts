import { useEffect, useState } from "react";
import axios from "axios";

function DataManaggement<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<T>(url)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Error al obtener los datos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]); 

  return { data, loading, error };
}

export default DataManaggement;
