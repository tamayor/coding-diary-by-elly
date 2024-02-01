import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";
import './Day.css';

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);
    const [codeExpand, setCodeExpand] = React.useState(false);
    function handleCodeDisplay(){
        setCodeDisplay(!codeDisplay);
        if(codeExpand){
            setCodeExpand(!codeExpand)
        }
    }
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 1</span> :<br/>  <span className="Day--day-title">The Beginning</span></h2> 
            <h4 className="Day--date">August 5, 2023</h4>
            <p  className="Day--thoughts">
                This is my first day, and I just made this website!<br/>
                <strong>I slept at 2 am in the morning!</strong><br/>
                Working for 5 hours straight.<br/>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`const MAX = 1;

const mcdDaysInputEnter = document.getElementById("mcd_days_input");
mcdDaysInputEnter.addEventListener("keydown", function(event) //Check if the pressed key is the "Enter" key
{
if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior of the "Enter" key
    if (visitORexit.innerHTML === 'visit') {
    contentDisplay();
    visitORexit.innerHTML = "exit";
    visitORexit.style.cssText = \`background-color : rgb(55, 179, 106); border-radius : 15px;\`;
    }
}
});

// Get the input element
const inputNumber = document.getElementById("mcd_days_input");

function checkFunction() //choose function based on the button state
{
if (visitORexit.innerHTML === 'visit') {
    contentDisplay();
    visitORexit.innerHTML = "exit";
    visitORexit.style.cssText = \`
    background-color : rgb(55, 179, 106); border-radius : 15px;\`;
} else {
    hideContent();
    visitORexit.innerHTML = "visit";
    visitORexit.style.cssText = \`background-color : none;\`;
}
}

function contentDisplay() //Function to show content
{
const inputValue = inputNumber.innerHTML;
try {
    if (inputValue >= 1 || inputValue <= MAX) {
    document.getElementById(inputValue).style.display = 'block';
    document.getElementById("mcd_days_input").contentEditable = "false";
    document.getElementById("mcd_days_input").style.cssText = \`border: none\`;
    }
} catch (error) {
    console.log(error);
}
}

function hideContent() //Function to hide content
{
const inputValue = inputNumber.innerHTML;
document.getElementById(inputValue).style.display = 'none';
document.getElementById("mcd_days_input").contentEditable = "true";
document.getElementById("mcd_days_input").style.cssText = \`border-bottom: 1px solid rgb(55, 179, 106);\`;
}

function checkIfNumbers() //check if numbers, null or the value of input
{
if (isNaN(Number(inputNumber.innerHTML)) ||
    Number(inputNumber.innerHTML) > MAX ||
    Number(inputNumber.innerHTML) < 0 ||
    inputNumber.innerHTML === "") {
    visitORexit.innerHTML = \`insert a number >\${MAX}\`;
    visitORexit.disabled = true;
} else {
    visitORexit.innerHTML = "visit";
    visitORexit.disabled = false;
}
}

inputNumber.addEventListener('input', checkIfNumbers)
const visitORexit = document.getElementById('visit_exit'); //button
visitORexit.addEventListener('click', checkFunction);`}
                    language='javascript'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                </div>}
            <p className="Day--thoughts">&times; Check the first version of this <a href="https://tamayor.github.io/me-code-diary/" target="_blank" rel="noreferrer"> diary </a> which is hard-coded.&times;</p>
        </section>
    )
}
export default Day;
