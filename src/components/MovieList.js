import React from 'react';
import {connect} from "react-redux"
import MovieItem from './MovieItem';

const MovieList = ({movie}) => {
    return (
        <div>
           
            <div className="row mb-4">
            {movie.map((item) => (
                <MovieItem key={item.id} item={item}/>
            ))}
        </div>
        </div>
    );
};

const msp = (movie) => {
    return {movie}
}

export default  connect(msp)(MovieList);