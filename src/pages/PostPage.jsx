import React from 'react';
import PostContainer from '@/components/Post';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { postId } = useParams();

  return <PostContainer postId={parseInt(postId)} />;
}
