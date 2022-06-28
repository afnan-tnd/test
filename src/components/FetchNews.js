import React,{useState} from 'react';
import axios from 'axios';

const FetchNews = () => {

    const [news,setNews] = useState([]);

    const fetchNews = () =>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8b9fa67ec407473c921f9492a8e95055')
        .then((response)=>{
            console.log(response);
            setNews(response.data.articles);
            console.log(news);
            // 
        })
    }

    return ( 
        <>
        <button className='btn btn-primary my-3' onClick={fetchNews}>Fetch News</button>
        <div className="container">
            <div className="row">
                {
                    news.map((value)=>{
                        return(
                            <div className="col-4">
                            <div className='card' style={{width:"18rem"}}>
                                <div className="card-body">
                                    <img src={value.urlToImage} className="card-img-top" alt="" />
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <a href="#" className="btn btn-primary">Main</a>
                                </div>
                            </div>
                             </div>
                        )
                        
                    })
                }
            </div>
        </div>
        
        </>

     );
}
 
export default FetchNews;