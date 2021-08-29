import React from 'react';
import {Card} from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const MovieCard = ({Movie}) => {
    return (
        <div style={{color: 'black'}}> 
        <Link to={`/movie/${Movie.id}`}>
           <Card style={{ width: '18rem' }}>
  <Card.Img alt= {Movie.name} variant="top" src={Movie.posterurl} />
  <Card.Body>
    <Card.Title>{Movie.name}</Card.Title>
    <Card.Text>
      {Movie.description}
    </Card.Text>
    <ReactStars
    count={5}
    //onChange={ratingChanged}
    value={Movie.rating}
    edit= {false}
    size={24}
    activeColor="#ffd700"
  />
  </Card.Body>
</Card>
</Link>
        </div>
    );
}

export default MovieCard;
