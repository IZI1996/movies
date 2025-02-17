import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = ({ onDataFetched, valueName,tabValue}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    const apiKey = '76219986026e174d1e3334d2aafe2c42';

    // 🔥 إذا لم يكن هناك `valueName`، استخدم رابط الأفلام الشائعة، وإلا استخدم رابط البحث
    const url = valueName
        ? `https://api.themoviedb.org/3/search/movie?query=${valueName}&api_key=${apiKey}&language=en-US&page=1`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(url)
            .then((res) => {
                setApiData(res.data);
                onDataFetched(res.data); // إرسال البيانات إلى المكون الأب
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });

    }, [valueName,onDataFetched]); // 🔥 سيتم جلب البيانات عند تغيير `valueName`

    return (
        <div>
            {loading && <p>جاري تحميل البيانات...</p>}
            {error && <p>حدث خطأ: {error}</p>}
        </div>
    );
};

export default Services;
