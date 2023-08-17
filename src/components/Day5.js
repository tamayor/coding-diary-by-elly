import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);

    function handleCodeDisplay(){
        setCodeDisplay(!codeDisplay)
    }
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 5</span> : <span className="Day--day-title">Studying my School Assignment</span></h2> 
            <h4 className="Day--date">August 17, 2023</h4>
            <h4 className="Day--date">around 1AM</h4>
            <p  className="Day--thoughts">
                <strong>Trying my best to atleast code during free time!</strong> <br/>
                Today I learned something in react and this is what it looks like.<br/>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className="Day--code"> <CodeBlock
                text= {`function App() {
    const [form, setForm] = React.useState('login');
        // this function accepts a parameter that will change the value of form

    function toggleChangeForm(formState){ 
        setForm(formState);
        console.log(formState)
    }

    return (
        <div>
            {
                form === 'login' 
                ? 
                <LogIn onFormSwitch={toggleChangeForm}/>
                : 
                <SignUp onFormSwitch={toggleChangeForm}/>
                                    //here we created a user define onFormSwitch
                                    //that can be used to pass value from child to parent
            }
        </div>
    );
}
/*
                  And we will get the value from other components with this.
*/

<label>Don't have an account? 
    <span className="click-here" onClick={()=> props.onFormSwitch('signup')}> 
        //Here we called the user function and pass a new value for the form value
        Register Here
    </span>
</label>`}
                    language='javascript'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                </div>}
            <p className="Day--thoughts">
                Kinda hard but still trying! Just need to do it more often.<br/>
                This is the <a href=" https://tamayor.github.io/light-dark-mode/" target="_blank" rel="noreferrer">website</a> that uses that code.
            </p>
        </section>
    )
}
export default Day;