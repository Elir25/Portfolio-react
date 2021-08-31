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
            {/* <li><i className="fab fa-behance"></i></li>
            <li><i className="fab fa-dribbble"></i></li> */}
        </ul>
        </div>
        <div className="home-desc-container">
            <h2>Welcome to my portfolio <i className="fas fa-caret-down"></i></h2>
            {/* <p>
            I’m a junior web developer with a Design background who enjoys working in front-end
             development but also finds out backend development very interesting.<br></br>
            I’m always looking forward to improving my skills and reach new professional 
            opportunities, so I decided to start my journey as a web developer. In January 
            2021 I joined Migracode Barcelona, a tech academy for refugees and migrants. 
            I’m looking forward to bring that passion to a full-time role.
            </p> */}
        </div>
        </>
    )
}

export default Home;