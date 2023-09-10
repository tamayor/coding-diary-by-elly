import React from "react";
import './Day.css';

function Day(){
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 10</span> :<br/> <span className="Day--day-title">I Made A Website to Hopefully Get a Chance to Join a School Contest</span></h2> 
            <h4 className="Day--date">September 7, 2023</h4>
            <h4 className="Day--date">for 2 days</h4>
            <p className="Day--thoughts">
                <strong>I spent so many time developing this website<br/>
                Ends up the teacher told me that<br/>
                I just copied it from THENX website</strong> <br/>
            </p> 
            <p className="Day--thoughts">
                Fuck!<br/>
                can't you see the word "<strong>CLONE</strong>"<br/>
                It's not even close to the original.
            </p>
            <a href="https://tamayor.github.io/thenx-clone/" target="_blank" rel="noreferrer">
                <button className="Day--button">THENX Clone Website</button>
            </a>
            <p className="Day--thoughts">
                It wasn't intended to be mobile responsive <br/>
                so try turn on <i>Desktop Site</i> in your mobile browser
            </p>
            <a href="https://github.com/tamayor/thenx-clone.git" target="_blank" rel="noreferrer">
                <button className="Day--button">THENX Clone GITHUB</button>
            </a>
            <p className="Day--thoughts">
                Also I didn't get the spot <br/>
                I didn't know how they chose the participants
            </p>
            
        </section>
    )
}
export default Day;