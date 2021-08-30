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
            {/* <li><i className="fab fa-behance"></i></li>
            <li><i className="fab fa-dribbble"></i></li> */}
        </ul>
        </div>
        </>
    )
}

export default Home;