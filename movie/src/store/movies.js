export default function GetMoviesReducer(state = [], action) {
  switch (action.type) {
    case "GET_USERS":
      return action.movie;
    default:
      return state;
  }
}

/** Movie reducer which get all movies the import it in all reducer page  */
