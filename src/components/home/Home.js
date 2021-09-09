import React from 'react';
import './home.css'
const Home = () => {
    return (
        <>
        <h1 className="home-tittle">ELIALBA RENDILES</h1>
        <h3 className="home-sub-t">Web developer / Graphic designer</h3>
        <div className="social-list-container">
        <ul className="social-list">
            <li><i className="fab fa-github"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
            <li><i className="fas fa-envelope"></i></li>
            <li><i className="far fa-file"></i></li>
        </ul>
        </div>
        <div className="home-desc-container">
            <h2 className="welcome-botton">Welcome to my portfolio <i className="fas fa-caret-down"></i></h2>
            
        </div>
        </>
    )
}

export default Home;