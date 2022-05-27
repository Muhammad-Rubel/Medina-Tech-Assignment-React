// import axios from "axios";
import { useState } from "react";
import PostList from "../components/PostList";
// import useFetch from "../hooks/useFetch";
import usePosts from "../hooks/usePosts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isPending, error } = usePosts();

  const handleLoadMore = () => {
    setCurrentPage((old) => old + 1);
    console.log(currentPage);
  };

  return (
    <div className="px-4 max-w-6xl mx-auto">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}

      {data && <PostList posts={data} />}

      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Home;
