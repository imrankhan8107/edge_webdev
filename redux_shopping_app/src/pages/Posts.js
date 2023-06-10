import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/posts";

export default function Posts() {
  const { posts } = useSelector((state) => state.postStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>This is Posts page</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.id}. {post.title}</p>  
          </div>
        );
      })}
    </div>
  );
}
