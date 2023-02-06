const initialState = [
  /*
  [
  id:0
  text:''
  done:false
  ]
   */
];

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';

export let nextId = 0;
export const add = (text) => ({
  type: ADD,
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({ type: TOGGLE, id });

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((todo) =>
        action.id === todo.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}


