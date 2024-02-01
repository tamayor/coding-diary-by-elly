import React from "react";
import './Day.css';

function Day(){
    

    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 8</span> :<br/> <span className="Day--day-title">I Made 2 Static Website Today...Yesterday!</span></h2> 
            <h4 className="Day--date">August 25, 2023</h4>
            <h4 className="Day--date">around 1AM</h4>
            <p  className="Day--thoughts">
                <strong>The entire day yesterday <br/>
                until now. <br/>My head is just focused <br/>
                on doing this two websites.</strong> <br/>
            </p>
            <p  className="Day--thoughts">Just for Fun</p>
            <a href="https://tamayor.github.io/pl-history/" target="_blank" rel="noreferrer">
                <button className="Day--button">PL History</button>
            </a>
            <p  className="Day--thoughts">Class Treasurer Making it Cool</p>
            <a href="https://tamayor.github.io/bscs3a-treasure/" target="_blank" rel="noreferrer">
                <button className="Day--button">Class Treasure</button>
            </a>
            <p  className="Day--thoughts"><strong>PS : </strong> <i>Made for Phone Viewing</i></p>
        </section>
    )
}
export default Day;