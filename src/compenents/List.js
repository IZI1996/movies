import React from 'react'

const List = ({data,value}) => {
 
    return (
        <>
          {/* {data && data.results && data.results.length > 0 ? (
            data.results.map((movie, index) => (
              <div key={index}>
                <h2>{movie.title}</h2>
               
              
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
    <h4>{movies.title}</h4> 
    <p>التقييم: {movies.vote_average}</p>
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
