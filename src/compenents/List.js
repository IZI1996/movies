import React from 'react'

const List = ({data}) => {
 
    return (
        <>
          {/* {data && data.results && data.results.length > 0 ? (
            data.results.map((movie, index) => (
              <div key={index}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>التقييم: {movie.vote_average}</p>
              
              </div>
            ))
          ) : (
            <div>لا توجد بيانات لعرضها أو البيانات في طريقها للتحميل...</div>
          )} */}

<div className='container'>
<div className='row'>
          {data && data.results ?(
              data.results.map((movies,index) => (
                <div className='card' key={index}>
              
                <img className='card-img' 
                  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} 
                  alt={movies.title} 
                />
 <div class="text">
    <h4><b>{movies.title}</b></h4> 
  </div>
                </div>
              )) 
            ):(
              <div>لا توجد بيانات لعرضها أو البيانات في طريقها للتحميل...</div>
            )}
   </div>
   </div>
        </>
      );
    };





export default List
