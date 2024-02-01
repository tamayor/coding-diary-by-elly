

import React from "react";
import './Day.css';

function Day(){

    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 16</span> :<br/> <span className="Day--day-title">Building LAin Website (React - Taillwindcss)</span></h2> 
            <h4 className="Day--date">Feb 1, 2024</h4>
            <h4 className="Day--date">from Jan 28 to Feb 1</h4>
            <p className="Day--thoughts">
                <span>It's been 5 months since I updated this website.<br/>
                    It's really frustrating to look back that I was so shitty for those days<br/>
                    I can't even start coding because I was feeling intimiated and unmotivated<br/>
                    But fuck that I'm back<br/>
                    Hopefully I will be active in learning again<br/>
                </span>
            </p> 
            

            <p>
                I haven't published the website yet but<br/>
                it will be available once<br/>
                Im done learning the <b>MERN stack</b> 
            </p>
        </section>
    )
}
export default Day;