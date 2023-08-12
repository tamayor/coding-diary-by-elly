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
            <h2 className="Day--day"><span className="Day--day-count">Day 3</span> : <span className="Day--day-title">Midnight Tutorial for my Cousin</span></h2> 
            <h4 className="Day--date">August 10, 2023</h4>
            <p  className="Day--thoughts">
                Every night for two days already I'm forcing my cousin to study coding<br/>
                <strong>Instead of shouting when i feel <i>gigil</i>, I just raise my voice</strong><br/>
                I should try to be less frustrated and be a little bit compassionate because <br/>
                I'm trying to help and encourage her.<br/>
                Althought she's not motivated to do so,<br/>
                I don't want her to be a shit all the time and just don't give a damn<br/>
                Sounds offensive but it's true.<br/>
                This was her choice, and I'm trying to atleast help her keep afloat.<br/><br/>
                I really get upset easily but today my <strong>empathetic side</strong> was tested.<br/>
                She is a computer science student like me just<i> 1 year behind.</i> <br/>
                I'm helping her to avoid the possibility of getting <br/>F from my previous Fucking Teacher. <br/>
                She's having a hard time understanding this code :
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className="Day--code"> <CodeBlock
                text= {`#include <stdio.h>
int main(){
    int i; //-----initialize variable
    for ( i=0 ; i<=20 ; i++ ){ //-----loop from 0 to 20
        if( i != 10 ){ //-----if the value of the variable is not equal to 10 print 0
            printf("0\\n");
        }
        else{ //-----else print the value of the variable
            printf("%d\\n", i);
        }
    }
}`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                </div>}
        </section>
    )
}
export default Day;