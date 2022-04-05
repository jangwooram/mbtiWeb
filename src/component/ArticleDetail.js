`import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const ArticleDetail = () => {
    const {article_id} = useParams();
    console.log(article_id);
    return (
        <div>

        </div>
    );
};

export default ArticleDetail;
