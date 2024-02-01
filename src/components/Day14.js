import React from "react";
import './Day.css';

function Day(){
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 14</span> :<br/> <span className="Day--day-title">I Made A Video Editing Portfolio Website For Myself</span></h2> 
            <h4 className="Day--date">September 20, 2023</h4>
            <h4 className="Day--date">for a week</h4>
            <p className="Day--thoughts">
                <strong>I spent so many time developing this website<br/>
                Trying to add stupid features<br/>
                ended up deleting all of it because they're useless</strong> <br/>
            </p> 
            
            <a href="https://tamayor.github.io/ellymar-video-editing-portfolio/" target="_blank" rel="noreferrer">
                <button className="Day--button">Elly Mar Portfolio Website 2</button>
            </a>
            <p className="Day--thoughts">
                Enjoy!
            </p>
            
        </section>
    )
}
export default Day;