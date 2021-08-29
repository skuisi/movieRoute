import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieScreen = ({movies}) => {

       const params=useParams();
       const movie=movies.find((el)=>el.id==params.id)

    return (
        <div style={{marginTop:"10px"}} >
            <Container>
                <Row>
                    <Col><img style={{width: '800px'}} src={movie.posterurl} alt='' /></Col>
                    <Col><h1>{movie.name}</h1><p>{movie.description}</p></Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieScreen;
