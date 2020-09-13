import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

function News(props) {

    const [news, setNews] = useState([])

    let color = props.color === 'red' ? 'danger' : 'primary'
    let newsData = [...news]
    let newsItems = newsData.map((item, i) => {
            return (
                <div className='articles'>
                    <a href={item.url} className='links' key={i}>{item.title}</a>
                    <hr style={{backgroundColor: `${props.color}`}}/>
                </div>
            )
    })
    let scraping = (
        <div>
            <div className={`spinner-border text-${color}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <h3 className='loading'>scraping articles...</h3>
        </div>
    )

    useEffect(() => {
        console.log(`gotcha ${props.source}!`)
        // axios.get(`https://purple-news-proxy.herokuapp.com/${props.source}`)
        fetch(`https://purple-news-proxy.herokuapp.com/${props.source}`)
        // fetch(`http://localhost:1111/${props.source}`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(err => console.log('err: ', err))
    }, [props.source]);

    return (
        <div className="col-5 news-block">
            <h1 className='news-title' style={{color: `${props.color}`}}>{props.source}</h1>
            {console.log('Got news: ', news, ' newsData: ', newsData)}
            {newsData.length ? newsItems
            :
            scraping
            }
        </div>
    );
}

export default News;