import React from "react";
import './Day.css';

function Day(){
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 11</span> :<br/> <span className="Day--day-title">First Time Blood Donor: Website Inspired</span></h2> 
            <h4 className="Day--date">September 10, 2023</h4>
            <h4 className="Day--date">just for fun</h4>
            <p className="Day--thoughts">
                <strong>I spent so many time developing this website<br/>
                Ends up the teacher told me that<br/>
                I just copied it from THENX website</strong> <br/>
            </p> 
            <p className="Day--thoughts">
                The first time I donated blood, <br/>
                I felt a sense of curiosity about the experience. <br/>
                It's quite a unique feeling, <br/>
                knowing that your blood is leaving your body.
                While the registered medical technologists  was drawing my blood,<br/>
                I found myself contemplating the idea of creating a website.<br/>
                I'm currently studying how to design very simple fucking websites, so I thought,<br/>
                "What if I create a website dedicated to sharing valuable information about<br/>
                 what to do before, during, and after the donation process?"

                You can see how blood donation could help you as a person<br/>
                in my case it gave me the reason<br/>
                just a little bit's enough<br/>
                Just a second,<br/>
                we're not broken,<br/>
                just bent and we can learn to love again<br/>
            </p>
            <a href="https://tamayor.github.io/blood-letting-activity/" target="_blank" rel="noreferrer">
                <button className="Day--button">WEBSITE</button>
            </a>
            
            <p className="Day--thoughts">
                PS: Information came from various websites mainly Red Cross
            </p>
            <a href="https://github.com/tamayor/blood-letting-activity.git" target="_blank" rel="noreferrer">
                <button className="Day--button">CODE</button>
            </a>
            <p className="Day--thoughts">
                In this website I applied a very little knowledge <br/>
                I learned about responsive design.
            </p>
        </section>
    )
}
export default Day;