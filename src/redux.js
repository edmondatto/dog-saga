// action types;
const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_FAILURE = 'API_CALL_FAILURE';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case action.type === API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null
      };

    case action.type === API_CALL_FAILURE:
      return {
        ...state,
        fetching: null,
        error: action.error,
        dog: null
      };

    case action.type === API_CALL_SUCCESS:
      return {
        ...state,
        fetching: null,
        error: null,
        dog: action.dog
      };

    default:
      return state;
  }
}