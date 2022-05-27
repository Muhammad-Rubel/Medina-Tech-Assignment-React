import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
// import useFetch from "../hooks/useFetch";
// import usePosts from "../hooks/usePosts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState([]);
  const [error, setError] = useState([]);

  // const { data, isPending, error } = useFetch(
  //   `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`
  // );

  // const { data, isPending, error } = usePosts();

  // const posts = data && data.hits && data.hits;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`
      );

      console.log(res);

      if (res) {
        setPosts([...posts, ...res.data.hits]);
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
    // fetch(
    //   `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`
    // )
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("Could not fetch data");
    //     }

    //     return res.json();
    //   })
    //   .then((data) => {
    //     setPosts([...posts, ...data.hits]);
    //     setIsPending(false);
    //     setError(null);
    //   })
    //   .catch((err) => {
    //     setIsPending(false);
    //     setError(err.message);
    //   });
  }, [currentPage]);

  // setInterval(() => {
  //   setCurrentPage((old) => old + 1);
  //   console.log(currentPage);
  // }, 10000);

  const handleLoadMore = () => {
    setCurrentPage((old) => old + 1);
    console.log(currentPage);
  };

  return (
    <div className="px-4 max-w-6xl mx-auto">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}

      {posts && <PostList posts={posts} />}

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Home;
