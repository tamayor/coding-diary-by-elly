import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Day.css';

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);
    const [codeExpand, setCodeExpand] = React.useState(false);
    const [copyCode, setCopyCode] = React.useState("Copy Code");
    function handleCodeDisplay(){
        setCodeDisplay(!codeDisplay);
        if(codeExpand){
            setCodeExpand(!codeExpand)
        }
    }
    function handleCopyCode(){
        setCopyCode("Code Copied");

        setTimeout(()=>{
            setCopyCode("Copy Code")
        }, 1000);
    }

    const mycode = `//      Write a program that computes the cost of a long-distance call. 
//      The cost of the call is determined according to the following rate schedule:
//      
//      A. Any call started between 8 am and 6 pm Monday through Friday is billed at a rate of 0.40 cents per minute.
//      B. Any call starting before 8 am or after 6 pm Monday through Friday is charged at a rate of 0.25 cents per minute.
//      C. Any call started on a Sunday or Saturday is charged at a rate of 0.15 cents per minute.
//      
//      The input will consist of the day of the week, 
//      the time the call started, 
//      and the length of the call in minutes. 
//      
//      The output will be the cost of the call. Time is to be input in 24-hour notation, so the time 1:30 pm is input as 13:30.
//      
//      The day of the week will be read as one of the following pairs of character values, 
//      which are stored in two variables of type char: Mo, Tu, We, Th, Fr, Sa, Su.



#include <stdio.h>
#include <string.h>
#include <stdbool.h>
int main(){
    
    char day[100];
    int hour,minute;
    int call_length;
    float bill, cost;
    bool noerror, invalid;
    char again, billing;
    
    while(1){
        start:
        printf("Choose a day in a week (Mo,Tu,We,Th,Fr,Sa,Su) : ");
        scanf("%s", &day);
                
        if (strcmp(day, "Mo") == 0 || strcmp(day, "Tu") == 0 || strcmp(day, "We") == 0 ||
        strcmp(day, "Th") == 0 || strcmp(day, "Fr") == 0) {
            billing = 'a';
        } else if (strcmp(day, "Sa") == 0 || strcmp(day, "Su") == 0) {
            billing ='b';
        } else {
            printf("You entered a wrong day of the week.\\n");
            goto start;
        }
        
        printf("When did the call started ? 24h notation (hh:mm) : ");
        scanf("%d:%d", &hour, &minute);
        
        switch (billing){
            
            case 'a':
                if (hour >= 8 && hour <= 18 && minute >= 0 && minute <= 59) {
                    if (hour == 18 && minute > 0) {
                        bill = 0.25;
                    } else {
                        bill = 0.40;
                    }
                } else if ((hour >= 1 && hour < 8) || (hour >= 18 && hour < 25 && minute >= 0 && minute <= 59)) {
                    bill = 0.25;
                } else {
                    if (hour >= 25 || hour <= 0) {
                        printf("Invalid Time (hh)\\n");
                    }
                    if (minute >= 60 || minute < 0) {
                        printf("Invalid Time (mm)\\n");
                    }
                    goto start;
                }
                noerror = true;
                break;
            case 'b':
                    
                    if (hour >= 25 || hour <= 0) {
                        printf("Invalid Time (hh)\\n");
                        invalid =true;
                    }
                    if (minute >= 60 || minute < 0) {
                        printf("Invalid Time (mm)\\n");
                        invalid=true;
                    }
                    if(!invalid){
                        bill = 0.15;
                        noerror = true;
                        invalid=false;//make the value to false again
                        break;
                    }
                
        }
        if(noerror){
                printf("Length of call in minutes : ");
                scanf("%d", &call_length);
                
                cost = call_length * bill;
                printf("The total cost of your call is %.2f\\n", cost);
                noerror=false;//make the value to false again
        }
        
        
        
        printf("Wanna do it again? (y/n) : ");
        scanf(" %c", &again);
        if(again != 'y'){
            return 0;
        }
    }
}`
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 13</span> :<br/>  <span className="Day--day-title">Helping a Room Mate Again</span></h2> 
            <h4 className="Day--date">August 19, 2023</h4>
            <h4 className="Day--date">around 1AM</h4>
            <p  className="Day--thoughts">
                <strong>When ever someone needs some help</strong> <br/>
                <em>and if it's coding...</em><br/>
                YES , I'm not busy. <br/> <br/>
                and today <em>I added a button</em><br/> 
                where you can just click and copy <br/>
                the code you see<br/>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CopyToClipboard text={mycode}>
                <button className={copyCode === "Copy Code" ? "copy-to-clipboard" : "copy-to-clipboard-done"} onClick={handleCopyCode}>{copyCode}</button>  
                </CopyToClipboard> 
                <CodeBlock
                text= {mycode}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                </div>}
            <p className="Day--thoughts">
               He is given a problem and <br/>
               and make a program using <strong>C++</strong> <br/>
               but I coded it using C and let chatgpt <br/>
               translate it to C++
            </p>
        </section>
    )
}
export default Day;