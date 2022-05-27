import { data } from "autoprefixer";
import PostList from "../components/PostList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1"
  );

  const posts = data && data.hits && data.hits;
  console.log(data);

  return (
    <div className="px-4 max-w-6xl mx-auto">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}

      {data && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
