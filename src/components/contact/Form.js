import React from "react";
import './form.css';
const Form = () => {
    return (
        
        <div className="form-container">
            <h2>Thanks for taking the time to reach out. Send me an email!</h2>
        <form className="contact-form">
            <label for="c-name">Name</label><br></br>
            <input 
            type="text"
            id="c-name"
            placeholder="Your name"
            ></input><br></br>
            <label for="c-email">Email</label><br></br>
            <input 
            type="text"
            id="c-email"
            placeholder="Your email"
            ></input><br></br>
            <label for="message">Message</label><br></br>
            <textarea>Some text...</textarea>
            <input type="submit"value="submit"></input>
            
        </form>
        </div>
    )
}
export default Form;