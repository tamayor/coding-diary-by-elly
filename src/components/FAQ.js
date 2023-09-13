import React, { useState } from 'react';
import profile from '../images/profile-user.png';
import questionmark from '../images/question-sign-in-circles.png';
import clock from '../images/clock.png';
import './FAQ.css';

const FAQ= () => {

    const [info, setInfo] = useState([
        {
            img: profile,
            text: "Hi! I am Elly Mar, an aspiring programmer.",
            showText: false,
        },
        {
            img: questionmark,
            text: "I made this website to keep track of my coding journey. Every time I see my code, I get motivated to keep learning even though this thing is intimidating to do.",
            showText: false,
        },
        {
            img: clock,
            text: "I started August 5, 2023",
            showText: false,
        },
    ]);

    const infoFilter = (index) => {
        const updatedInfo = [...info];
        updatedInfo[index].showText = !updatedInfo[index].showText;
        setInfo(updatedInfo);
    }

    const infoElement = info.map((info, index) => {
        return (
            <div className='Nav-faq-container' key={index}>
                <div  className={info.showText ? 'show-text' : 'dont-show-text'} onClick={() => infoFilter(index)}>
                    <p>{info.text}</p>
                </div>
                <img src={info.img} alt='person icon' onClick={() => infoFilter(index)} />
            </div>
        );
    });

    return (
        <nav>
            {infoElement}
        </nav>
    );
}

export default FAQ;
