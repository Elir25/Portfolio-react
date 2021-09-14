import React, { forwardRef} from 'react';
import './about.css';



const About = forwardRef(( {}, ref) => {

    return (
        <div className="about-section-container">
            <div className="about-content">
                <h1 className="about-h1" ref={ref}>ABOUT ME</h1>
                <div className="desc-main-text-container">
                    <div className="desc-sec1">
                        <p className="desc-text">
                            I’m a junior web developer with a Design background who enjoys working in front-end
                            development but also finds out backend development very interesting.<br></br><br></br>
                            I’m always looking forward to improving my skills and reach new professional
                            opportunities, so I decided to start my journey as a web developer. In January
                            2021 I joined Migracode Barcelona, a tech academy for refugees and migrants.
                            I’m looking forward to bring that passion to a full-time role.
                        </p>
                    </div>
                    <div className="desc-sec2">
                        <h2 className="skills-headline">SKILLS</h2>
                        <ul className="skills-list">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript Ecma6</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>Git</li>
                            <li>Github</li>
                            {/* <li>Adobe photoshop</li>
                            <li>Adobe Illustrator</li>
                        <li>Adobe Indesign</li> */}
                        </ul>
                    </div>
                </div>
                        <h2 className="download-cv">Download CV <i className="far fa-file"></i></h2>
            </div>
        </div>
    )
})

export default About;