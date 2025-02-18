import React, { useState } from "react";

const Tabs = ({ TabonChange, data }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const period = ['2024', '2025'];
    const newMovies = () => {
        if (!data?.results?.length) return;

        data.results.forEach((currentMovie) => {
            if (currentMovie && currentMovie.release_date) {
                const releaseYear = parseInt(currentMovie.release_date.slice(0, 4)); 
                const startYear = parseInt(period[0]); 
                const endYear = parseInt(period[1]);   

                if (releaseYear >= startYear && releaseYear <= endYear) {
                    setSelectedMovie(currentMovie); 
                    TabonChange(currentMovie); 
                    console.log(currentMovie)

                }
            }
        });
    };



    const puplarMovies = () => {
        if (!data?.results?.length) return;

        // التكرار عبر جميع الأفلام في المصفوفة
        data.results.forEach((currentMovie) => {
            if (currentMovie && currentMovie.vote_average) {
             
   const average= currentMovie.vote_average;
                // تحقق إذا كانت السنة داخل النطاق
                if (average >= 7 ) {
                    setSelectedMovie(currentMovie); 
                    TabonChange(currentMovie); 
console.log(currentMovie)
                }
            }
        });
    };
    return (
        <div className="tabs-container">
            <button onClick={newMovies}>new</button>
            <button onClick={puplarMovies}>puplar</button>

        </div>
    );
};

export default Tabs;
