import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return <h1>Post id {id}</h1>;
};

export default Post;
