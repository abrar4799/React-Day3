import React from "react";
import { useState, useEffect } from "react";
import { axiosInstance } from "../Network/index";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("popular", {
        params: {
          api_key: "f592b2667a50e6fd718db38d834cd4da",
        },
      })
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movies);

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="d-flex flex-wrap">
        {movies.map((movie, index) => {
          return (
            <div className="offset-1" key={movie.id}>
            <Card  >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `}
              />
              <Card.Body>
                <Card.Text>
                  <Link to={`/MovieDetails/${movie.id}`}>{movie.title}</Link>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
