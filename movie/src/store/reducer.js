const INITIAL_STATE = {
  fav: [],
  count: 0,
}

export function MovieReducer(state = INITIAL_STATE, action) {
   console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        fav: [...state.fav, action.payload],
       
        count: state.count + 1,
      }
    case "REMOVE_FROM_FAV":
      return {
   //     ...state,
     //   fav: state.fav.filter((item) => {
       //   item != action.itemId;
      //  }),
      //  count: state.count - 1,
      }
    default:
      return state
  }
}
