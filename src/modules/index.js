import { combineReducers } from 'redux';

import { reducer as counter } from './counter';
import { reducer as todos } from './todos';
import { reducer as posts } from './posts';

const rootReducer = combineReducers({
  counter,
  todos,
  posts,
});

export default rootReducer;
