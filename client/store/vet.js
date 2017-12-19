import axios from 'axios'

//action types
const GET_VETS = 'GET_VETS';

const initialState = [];

// action creators
const getVets = vets => ({ type: GET_VETS, vets });

// Thunks

export const getVetsThunk = () =>
  dispatch =>
    axios.get('/api/vets')
      .then( (vets) => dispatch(getVets(vets.data)))
      .catch(err => console.log(err));

// Reducer

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VETS:
      return action.vets;
    default:
      return state;
  }
}