import axios from 'axios';
import React, { useEffect,useState } from 'react'

const Services = ({onDataFetched}) => {
    const [apiData,setApiData]=useState(null);
    const [loading, setLoading] = useState(true); // لتحديد إذا كانت البيانات قيد التحميل
    const [error, setError] = useState(null);
  
  
    const apiKey = '76219986026e174d1e3334d2aafe2c42'; // استبدل بـ API Key الخاص بك
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    useEffect(() => {
        axios.get(url)
    
    .then((res) => {

setApiData(res)

onDataFetched(res.data)
setLoading(false)

        })
        .catch((error) => {
           setError(error.message)
           setLoading(false)
        });
    },[onDataFetched]);
    return (
    <div>
    </div>
  )
}

export default Services
