import { combineReducers } from 'redux';

import userReducer from './user/userReduser';

export default combineReducers({
  user: userReducer
});