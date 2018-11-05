const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  console.log(state);
  return state;
}

export default reducer;
