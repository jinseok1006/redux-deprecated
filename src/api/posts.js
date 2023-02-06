const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어를 배워봅시다',
    body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.',
  },
  {
    id: 2,
    title: 'redux-thunk를 사용해봅시다',
    body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!',
  },
  {
    id: 3,
    title: 'redux-saga도 사용해봅시다',
    body: '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.',
  },
];

const errors = {
  404: {
    id: 'error',
    title: '404 Error Page',
    body: '이 경로엔 아무것도 없습니다.',
  },
};

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);

  const post = posts.find((post) => post.id === id);
  if (!post) {
    return errors[404];
  }

  return post;
};
