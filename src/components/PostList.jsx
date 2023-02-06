import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../modules/posts';
import { Link as RouterLink } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <RouterLink to={`${post.id}`}>{post.title}</RouterLink>
        </li>
      ))}
    </ul>
  );
}

export default function PostListContainer() {
  const {
    loading,
    data: posts,
    error,
  } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading && !posts) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!posts) return null;

  return <PostList posts={posts} />;
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
