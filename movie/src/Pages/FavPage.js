import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { Row, Col, Card, Container ,Button} from "react-bootstrap";
import { MovieReducer } from "../store/reducer";
import { removeFromFav } from "../store/action";

function FavPage() {
  const dispatch = useDispatch();
  function remFromFav(state)
  {
    dispatch(removeFromFav(state))
  }
  const states = useSelector((state) => state.fav);
  console.log(states);
  return (
    <div>
      <h2>Favorites</h2>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {states.map((state, index) => {
            return (
              <Col key={index}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{state.title}</Card.Title>

                  <Button  variant="outline-dark" onClick={() => remFromFav(state) }>
                    Delete
                  </Button>
                </Card.Body>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FavPage;
