import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import CardItem from '../CardItem/CardItem';
import image from '../../images/newsIcon.jpg'

const Header = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=616e760e974b4464a2648e3bd1d67a50';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, []);

    // add time
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(updateTime, 1000);
    // time added

    return (
        <div>
            <Jumbotron>
                <h3><img className="rounded-circle img-fluid" src={image} height="100px" width="90px" alt="" /> MY COUNTRY NEWS</h3>
                <h1>Breaking News! <sup className="text-danger">{articles.length}</sup></h1>


                <marquee className="marquee" bgcolor="aqua" height="50px"> {
                    articles.map(article => <p key={Math.random()}>🔍{article.title}___|👀| </p>)
                } </marquee>



                {/* time */}
                <h1 className="text-center" style={{ backgroundColor: "#1b262c", color: "#f1f3f8", width: "250px", height: "60px", borderRadius: "10px", padding: "5px" }}>
                    {ctime}
                </h1>
            </Jumbotron>

            {/* set Card */}
            <div className="card">
                <div className="overflow">
                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            {
                                articles.map(article => (
                                    <CardItem key={Math.random()} article={article}></CardItem>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-dark text-muted">
                <p>&copy; copyright 2020 || All Right reserved</p>
            </div>
        </div >
    );
};

export default Header;