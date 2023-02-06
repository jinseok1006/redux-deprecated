// 액션 타입
// 액션 생성 함수

// 리듀서

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const SET_DIFF = 'counter/SET_DIFF';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

// 액션객체 대신에 액션함수를 던짐
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 사용법은
// const onIncrease = () => {
//   dispatch(increaseAsync());
// };

// 이렇게쓰고 결국  redux thunk에서 dispatch를 다시받음 개병신같네
// increaseAsync = () => async(dispatch, state)=>{...}

const initialState = {
  number: 0,
  diff: 1,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
}
