const myLogger = (store) => (next) => (action) => {
  console.log(store.getState());

  const result = next(action); // 다음 미들웨어, 리듀서에게 액션을 전달함..
  // 그러니까 액션이 모든 미들웨어를 거친다고 생각하면 좋다..

  console.log(store.getState());

  // dispatch(action)의 결과물..
  return result;
};

export default myLogger;




