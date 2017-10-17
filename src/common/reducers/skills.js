import {REQUEST_SKILLS, RECEIVE_SKILLS} from '../actions'

const defaultState = {
  isFetching: false,
  data: []
};

const skills = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_SKILLS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_SKILLS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.skills
      });
    default:
      return state;
  }
};

export default skills;
