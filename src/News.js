import React, { useState, useEffect } from 'react';
import './App.css';

function News(props) {

    useEffect(() => {
        console.log(`gotcha ${props.source}!`)
        fetch(`http://localhost:3000/${props.source}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log('err: ', err))
    });

    return (
        <div className="col-5 news-block" style={{backgroundColor: `${props.color}`}}>
            <h1 className='news-title'>{props.source}</h1>
        </div>
    );
}

export default News;