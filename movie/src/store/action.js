export  const addTOFavOne = (movie) => {
   // console.log(Movie);
  return {
    type: "ADD_TO_FAV",
    movie
  };
};

export const removeFromFav = ( movie ) => {
    return {
        type: "REMOVE_FROM_FAV",
         movie
    }
};