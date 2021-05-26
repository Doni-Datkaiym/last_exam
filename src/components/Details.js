import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const Details = ({movies}) => {
    const { id } = useParams()
    const movie = movies.find((item) => item.id == id)
    return (
        <div>
            <h1>{movie.title}</h1>
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={movie.image} alt="" />
                </div>
                <div className="col-6">
                    <p>
                        {movie.description}
                    </p>
                    <p>
                        <span className="mr-2 text-danger font-weight-bold">
                        <iframe width="640" height="360" src={"https://www.youtube.com/embed/"+movie.movie} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                        </span>

                    </p>
                </div>
            </div>
        </div>
    );
};

const msp = ( movies ) => {
    return { movies }
}

export default connect(msp)(Details);