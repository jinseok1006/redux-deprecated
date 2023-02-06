import React from 'react';
import PostListContainer from '@/components/PostList';
import { createTheme } from '@mui/system';

const theme = createTheme();
export default function PostListPage() {
  console.log(theme);
  return <PostListContainer />;
}
