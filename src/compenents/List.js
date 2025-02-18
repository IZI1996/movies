import React from 'react';

const List = ({ data, tabValue }) => {
    return (
        <div className='container'>
            <div className='row'>
                {/* إذا كان هناك بيانات في data */}
                {tabValue && tabValue.results ? (
                    tabValue.results.map((movie, index) => (
                        <div className='card' key={index}>
                            <img
                                className='card-img'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="text">
                                <h4>{movie.title}</h4>
                                <p>Average: {movie.vote_average}</p>
                                <p>Date: {movie.release_date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                  data && data.results ? (
                    data.results.map((movie, index) => (
                            <div className="card" key={index}>
                                <img
                                    className='card-img'
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className="text">
                                    <h4>{movie.title}</h4>
                                    <p>Average: {movie.vote_average}</p>
                                    <p>Date: {movie.release_date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No movies available</p> // عرض رسالة عند عدم وجود أفلام
                    )
                )}
            </div>
        </div>
    );
};

export default List;
