import { axiosInstance } from "../Network/index"; 

export const GetMovies =  () => (dispatch) => {
    return axiosInstance 
    .get("popular", {
        params: {
          api_key: "f592b2667a50e6fd718db38d834cd4da",
        },
      })
      .then((response) => dispatch ({
            type: "GET_USERS" , 
            payload: response.data
      }))
      .catch((error) => {
        console.log(error);
      });
}
