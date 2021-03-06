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
            <th className="w-72">Sl. no</th>
            <th className="w-72">Date</th>
            <th className="w-72">Title</th>
            <th className="w-72">Author</th>
            <th className="w-72">Url</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((item, i) => (
            <tr key={i} className="odd:bg-slate-100 cursor-pointer">
              {/* onClick={() => (window.location.href = item.url)} */}
              <td className="w-72">{i + 1}</td>
              <td className="whitespace-nowrap w-72">
                {formatDate(item.created_at)}
              </td>
              <td className="w-72">{item.title}</td>
              <td className="w-72">{item.author}</td>
              <td className="w-72">{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
