import React, { useState, useEffect } from 'react';
import axios from "axios";

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    // useEffect(()=> {
    //     axios.get('http://58.79.156.206:8000/swagger')
    //         .then(res=> {
    //             console.log(res)
    //             setPosts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // })
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {/*Http://58.79.156.206:8000/swagger/*/}
        </div>
    );
};

export default DataFetching;
