import React from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../Network";
import { useState, useEffect } from "react";
import { Card  } from "react-bootstrap";


function MovieDetails(props) {
  const params = useParams();
  const [movieDetails, setDetails] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`${params.id}`, {
        params: {
          api_key: "f592b2667a50e6fd718db38d834cd4da",
        },
      })
      .then((response) => {
        console.log(response, "Response");
        setDetails(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movieDetails, "second res");
  return (
   <div>
       <Card  className="justify-content-center align-items-center">
       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}style={{width:"50%"  }}  />
       <Card.Body>
       <Card.Title>{movieDetails.title}</Card.Title>
       <Card.Text>Language: {movieDetails.original_language}</Card.Text>
       <Card.Text>Release Date: {movieDetails.release_date}</Card.Text>
       <Card.Text>Description: {movieDetails.overview}</Card.Text>
       <Card.Text>Vote: {movieDetails.vote_average}</Card.Text>
        </Card.Body>

       </Card>

  </div>
  );
}

export default MovieDetails;
