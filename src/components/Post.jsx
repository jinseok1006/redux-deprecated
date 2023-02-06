import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPostById } from '../modules/posts';

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/">home</Link>
    </>
  );
}

export default function PostContainer({ postId }) {
  const {
    loading,
    data: post,
    error,
  } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!post) return null;

  return <Post post={post} />;
}
