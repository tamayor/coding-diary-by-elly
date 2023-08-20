import React from "react";
import firstCertificate from '../images/first-freecodecamp-certificate.png';
import './Day.css';

function Day(){
    const [certificate, setCertificate] = React.useState(false);
    function handleCodeDisplay(){
        setCertificate(!certificate);
    }

    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 7</span> : <span className="Day--day-title">Finishing my freeCodeCamp Activities to get the Certificate</span></h2> 
            <h4 className="Day--date">August 20, 2023</h4>
            <h4 className="Day--date">around 1AM</h4>
            <p  className="Day--thoughts">
                <strong>My First Ever Coding Certificate</strong> <br/>
                After not finishing my final task way back<br/>
                last last month in <strong><a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp</a></strong>.<br/>
                I finally got the <a href="https://www.freecodecamp.org/certification/fcc043b062a-68f7-459b-83ab-ae9b85c983a3/responsive-web-design" target="_blank" rel="noopener noreferrer">certificate</a>.<br/>
                <strong>PS: </strong>Don't expect mind blowing output.
            </p>
            {!certificate && <button className="Day--button" onClick={handleCodeDisplay}>My First Coding Certificate</button>}
            <img src={firstCertificate} alt="certificate from freeCodeCamp" className={certificate ? "certificate" : "hide-certificate"}/>  
                {certificate && <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>}
            <p className="Day--thoughts">
            Report to them if I violated the <a href="https://www.freecodecamp.org/news/academic-honesty-policy/" target="_blank" rel="noreferrer">freeCodeCamp's Academic Honesty Policy</a>
            </p>
        </section>
    )
}
export default Day;