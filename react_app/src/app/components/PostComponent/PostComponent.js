import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "./elements/PostCard";
import Pagination from "./elements/Pagination";
import { getPosts } from "../../api_services/postServices";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrevious, setDisablePrevious] = useState(false);

  useEffect(() => {
    const fatchData = async () => {
      const { data } = await getPosts(currentPage);
      setPosts(data);
    };

    fatchData();
  }, [currentPage]);

  const handlePagination = (value) => {
    var onpage = currentPage;
    value === "previous" ? onpage = currentPage + 1 : onpage = currentPage - 1;
    onpage === 1 ? setDisableNext(true) : setDisableNext(false);
    onpage === 20 ? setDisablePrevious(true) : setDisablePrevious(false);
    setCurrentPage(onpage);
  };
  return (
    <div className="container">
      <h1 className="mt-4 mb-3">
        Blog Home Two <small>Subheading</small>
      </h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Posts</li>
      </ol>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination handlePagination={handlePagination} currentPage={currentPage} disablePrevious={disablePrevious} disableNext={disableNext}/>
    </div>
  );
};

export default Post;