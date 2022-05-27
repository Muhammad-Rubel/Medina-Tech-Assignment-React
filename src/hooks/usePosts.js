import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  setInterval(() => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }

        return res.json();
      })
      .then((data) => {
        if (data && data.hits) {
          setData(...data, ...data.hits);
        }
        setIsPending(false);
        setError(null);
        setCurrentPage(currentPage + 1);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, 10000);

  return { data, isPending, error };
};

export default useFetch;
