import React, { useState, useEffect } from 'react';
import './App.css';

function News(props) {

    useEffect(() => {
        console.log(`gotcha ${props.source}!`)
        fetch(`http://localhost:3000/${props.source}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log('err: ', err))
        // fetch("https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&sources=sources%253Dfox.com%252Ccnn.com&lang=en&page=1&q=Elon%20Musk", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        //         "x-rapidapi-key": "454a90f8afmshe03e7bd4efdce75p1abc73jsn2df2e9ddc1e5"
        //     }
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
    });

    return (
        <div className="col-5 news-block" style={{backgroundColor: `${props.color}`}}>
            <h1 className='news-title'>{props.source}</h1>
        </div>
    );
}

export default News;