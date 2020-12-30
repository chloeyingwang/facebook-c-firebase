// this is what the data layer intially look like
// then we have some action
// you can dispatch actions into the data layer
// then inside the reducer, we listen to it, so we just received an action
// return what it currently looks like and change the use to whatever we passed in as action.user

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
