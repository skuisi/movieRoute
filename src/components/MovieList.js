import React, { useState } from 'react';
import Filter from './Filter';
import MovieCard from './MovieCard';

const MovieList = ({Movies}) => {
    const [text, setText] = useState("");
    const [rate, setRate] = useState("");
    const filterText=(text)=>{
        setText(text)
    }
    const filterRate=(rate)=>{
        setRate(rate)
    }
    console.log(rate)
    console.log(text)

    return (
        <div className="movie-list">
            <Filter filterRate={filterRate}  filterText={filterText} />
            {Movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rate).map((el)=>(<MovieCard Movie={el} />))}
        </div>
    );
}

export default MovieList;
