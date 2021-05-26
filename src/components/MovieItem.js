import React from 'react';
import {Link} from 'react-router-dom';


const MovieItem = ({ item }) => {
    return (
     
            <div  className="col-3 mt-4">
                <div className="card card-movie">
                    <img src = {item.image} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description}</p>
                    </div>
                   
                    <Link to={"/films/"+item.id} className="btn btn-primary mr-2">
                            Detail
                        </Link>
                </div>
            </div>
    )
};

export default MovieItem;