export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  loading: (prevData = null) => ({
    loading: true,
    data: prevData,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data: data,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};

// promise에 기반한 thunk를 만들어주는 함수
export function createPromiseThunk(type, promiseCreator) {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 파라미터가 하나일때를 가정하고 만든 thunk
  // eslint-disable-next-line no-unused-vars
  return (param) => async (dispatch, state) => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, error: true, payload: e });
    }
  };
}

export function handleAsyncActions(type, key, keepData = false) {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  console.log(keepData);

  //reducer
  return (state, action) => {
    console.log(keepData);
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
    }
  };
}

// interface dispatchState{
//   type: string,
//   error: true|fasle,
//   payload:
// }

// 실제론 dipatch({ type: ACTION })로 부르는데

// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)

// thunk가 적용되려면 이런상태의 함수여야 한다.
// function action(dispatch, state) {}

// redux-thunk middleware
// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)

// dispatch({type:GET_COMMENTS})

// redux-thunk 미들웨어 내부에서는
// store, next, action
// action이 {type:'GET_COMMENTS'} 객체니까 실행안함...

// const increaseAsync = async () => (dispatch, state) => {
//   setTimeout(() => dispatch({ type: 'INCREASE' }), 1000);
// };

// dispatch(increaseAsync());

// increaseAsync()는 함수이므로 thunk에 의해서 실행되고
// dispatch({type:'INCREASE'})는 객체이므로 redux에 의해서 처리됨

// dispatch(getPosts());

// function getPost() {
//   return (dispatch, state) => {
//     dispatch({ type: 'GET_POSTS' });
//     try {
//       const posts = api.getPosts();
//       dispatch({ type: 'GET_POSTS_SUCCESS', posts });
//     } catch (e) {
//       dispatch({ type: 'GET_POSTS_ERROR', error });
//     }
//   };
// }
