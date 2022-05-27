const PostList = ({ posts }) => {
  const formatDate = (date) => {
    const d = date.split("T")[0];
    const dArr = d.split("-");
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
  };

  return (
    <div className="overflow-x-auto">
      <table id="post-list" className="text-sm border-collapse border w-full">
        <thead className="bg-gray-800 text-white border border-gray-800">
          <tr className="">
            <th>Sl. no</th>
            <th>Date</th>
            <th>Title</th>
            <th>Author</th>
            <th>Url</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((item, i) => (
            <tr key={i} className="odd:bg-slate-100 cursor-pointer">
              <td>{i + 1}</td>
              <td className="whitespace-nowrap">
                {formatDate(item.created_at)}
              </td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
