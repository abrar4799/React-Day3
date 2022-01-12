export const addTOFav = (Movie) => {
    console.log(Movie);
  return {
    type: "ADD_TO_FAV",
   payload: Movie
  };
};


export const removeFromFav = ( itemId ) => {
    return {
        type: "REMOVE_FROM_FAV",
        itemId:itemId,
    }
};