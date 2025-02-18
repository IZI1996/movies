import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = ({ onDataFetched, searchValue}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    const apiKey = '76219986026e174d1e3334d2aafe2c42';
let url=""
    if (searchValue) {
        url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}&language=en-US&page=1`;
    // } else if (tabValue) {
    //     url = `https://api.themoviedb.org/3/search/movie?query=${tabValue}&api_key=${apiKey}&language=en-US&page=1`;
     } 
    else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    }
    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(url)
            .then((res) => {
                setApiData(res.data);
                onDataFetched(res.data); 
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });

    }, [url,onDataFetched]); 

    return (
        <div>
            {loading && <p>جاري تحميل البيانات...</p>}
            {error && <p>حدث خطأ: {error}</p>}
        </div>
    );
};

export default Services;
