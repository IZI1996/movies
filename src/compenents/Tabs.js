import React, { useState } from "react";

const Tabs = ({ TabonChange, data }) => {
    const [TabChange, setTabChange] = useState('');

    const handleTabChange = () => {
        // نتحقق من البيانات ونقارن التاريخ الديناميكي بدلاً من الثابت
        const currentMovie = data?.results[0]; // الحصول على أول فيلم كمثال
        if (currentMovie && currentMovie.release_date) {
            setTabChange(currentMovie);  // تحديث الحالة المحلية بالمعلومات الحالية
            TabonChange(currentMovie);   // إرسال البيانات للمكون الأب
        }
    };

    return (
        <div className="tabs-container">
            <button onClick={handleTabChange}>شائع</button>
            {/* يمكن إضافة المزيد من الأزرار للتبويبات الأخرى */}
        </div>
    );
};

export default Tabs;
