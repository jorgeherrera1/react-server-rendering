import fetch from 'isomorphic-fetch';

export const REQUEST_SKILLS = 'REQUEST_SKILLS';
export const RECEIVE_SKILLS = 'RECEIVE_SKILLS';

export const requestSkills = () => {
  return {
    type: REQUEST_SKILLS
  }
};

export const receiveSkills = (skills) => {
  return {
    type: RECEIVE_SKILLS,
    payload: skills
  }
};

export const fetchSkills = () => {
  return (dispatch) => {
    dispatch(requestSkills());

    return fetch('http://localhost:9000/api/skills')
      .then(res => res.json())
      .then(skills => dispatch(receiveSkills(skills)));
  };
};
