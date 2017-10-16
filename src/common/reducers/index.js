import {combineReducers} from 'redux';
import dashboard from './dashboard';
import skills from './skills';

const rootReducer = combineReducers({
  dashboard,
  skills
});

export default rootReducer;
