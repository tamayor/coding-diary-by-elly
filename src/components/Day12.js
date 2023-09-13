import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";
import './Day.css';

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);
    const [codeFeedBack, setCodeFeedBack] = React.useState(false);
    const [codeExpand, setCodeExpand] = React.useState(false);
    const [feedBackExpand, setFeedBackExpand] = React.useState(false);
    const [cssDisplay, setCssDisplay] = React.useState(false);
    const [cssExpand, setCssExpand] = React.useState(false);
    function handleCodeDisplay(){
        setCodeDisplay(!codeDisplay);
        if(codeExpand){
            setCodeExpand(!codeExpand)
        }
    }
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 12</span> :<br/>  <span className="Day--day-title">Inspired by a Board Mate </span></h2> 
            <h4 className="Day--date">September 13, 2023</h4>
            <p  className="Day--thoughts">
                <strong>My Board Mate is Coding so I thought I should too!</strong> <br/>
                He is trying to create a program that<br/>
                takes your birthday and outputs your zodia sign<br/>
                <strong>And this is my intial attempt</strong>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`// This C Program will get user input for 
// their birth month and birth date
// and output their zodiac sign

#include <stdio.h>
#include <stdbool.h>

void findZodiacSign(int *b_month, int *b_date);
bool inRange (int *b_date, int a, int b);
bool check_birth_month_and_date(int *birth_month, int *birth_date);
int main(){
    
    int birth_month;
    int birth_date;
    char try_again;
    do{
        printf("What is your Birth Month ( 1 - 12 ) : ");
        scanf("%d", &birth_month);
        printf("What is your Birth Date ( 1 - 31 ) : ");
        scanf("%d", &birth_date);
        printf("\\n");
        
        bool correct_birth_month_and_date = check_birth_month_and_date(&birth_month, &birth_date);
        if( correct_birth_month_and_date){
            findZodiacSign(&birth_month, &birth_date);
        }else{
            printf("Invalid Input\\n\\n");
        }
        
        printf("Wanna check different birthdate's zodiac sign ? (y/n) : ");
        scanf(" %c", &try_again);
        printf("\\n");

        
    }while (try_again == 'y' || try_again == 'Y');
}

void findZodiacSign(int *b_month, int *b_date){
    
    bool inDate;
    if( *b_month == 1){
        char month[] = "January";
        
        inDate = inRange(b_date, 1, 19);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Capricornus (Goat)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 20, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Aquarius (Water Bearer)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 2){
        char month[] = "February";
        
        inDate = inRange(b_date, 1, 18);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Aquarius (Water Bearer)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 19, 29);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Pisces (Fish)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 3){
        char month[] = "March";
        
        inDate = inRange(b_date, 1, 20);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Pisces (Fish)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 21, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Aries (Ram)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 4){
        char month[] = "April";
        inDate = inRange(b_date, 1, 19);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Aries (Ram)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 20, 30);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Taurus (Bull)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 5){
        char month[] = "May";
        inDate = inRange(b_date, 1, 20);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Taurus (Bull)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 21, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Gemini (Twins)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 6){
        char month[] = "June";
        inDate = inRange(b_date, 1, 21);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Gemini (Twins)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 22, 30);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Cancer (Crab)\\n"
                    "\\n"
                    "/***************************/\\n",month ,*b_date);
        }
    }
    else if( *b_month == 7){
        char month[] = "July";
        
        inDate = inRange(b_date, 1, 22);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Cancer (Crab)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 23, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Leo (Lion)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 8){
        char month[] = "August";
        
        inDate = inRange(b_date, 1, 22);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Leo (Lion)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 23, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Virgo (Virgin)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 9){
        char month[] = "September";
        
        inDate = inRange(b_date, 1, 22);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Virgo (Virgin)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 23, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Libra (Balance)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 10){
        char month[] = "October";
        
        inDate = inRange(b_date, 1, 23);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Libra (Balance)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 24, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Scorpius (Scorpion)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 11){
        char month[] = "November";
        
        inDate = inRange(b_date, 1, 21);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Scorpius (Scorpion)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 22, 30);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Sagittarius (Archer)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    else if( *b_month == 12){
        char month[] = "December";
        
        inDate = inRange(b_date, 1, 21);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Sagittarius (Archer)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
        inDate = inRange(b_date, 22, 31);
        if(inDate){
            printf( "/***************************/\\n"
                    "\\n"
                    "%s %d\\n"
                    "Zodiac Sign is Capricornus (Goat)\\n"
                    "\\n"
                    "/***************************/\\n",month, *b_date);
        }
    }
    
    
}

bool inRange (int *b_date, int a, int b){
    if(*b_date >= a && *b_date <= b){
        return true;
    }
    return false;
}
bool check_birth_month_and_date(int *birth_month, int *birth_date){
    
    if( 
    *birth_month == 1 ||
    *birth_month == 3 ||
    *birth_month == 5 ||
    *birth_month == 7 ||
    *birth_month == 8 ||
    *birth_month == 10 ||
    *birth_month == 12 && *birth_date >= 1 && *birth_date <= 31){
        return true;
    }
    else if(
    *birth_month == 4 ||
    *birth_month == 6 ||
    *birth_month == 9 ||
    *birth_month == 11  && *birth_date >= 1 && *birth_date <= 30){
        return true;
    }
    else if(*birth_month == 2  && *birth_date >= 1 && *birth_date <= 29){
        return true;
    }else{
        return false;	
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
            <p className="Day--thoughts">
                This is very long and hard to maintain so <br/>
                I ask chatGPT and this is his feedback. <br/>
            </p>
            {!codeFeedBack && <button className="Day--button" onClick={()=>{setCodeFeedBack(!codeFeedBack)}}>chatGPT feedback</button>}
            {codeFeedBack && <div className={ feedBackExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setFeedBackExpand(prevValue => !prevValue)}>
                    <button className={feedBackExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`//      Your code appears to work correctly and accomplishes 
//      the task of determining the zodiac sign based on the user's birth month and date. 
//      Here are some comments and suggestions for improvement:
//      
//      1. **Function Names and Comments**: 
//          
//          Your function names are descriptive, 
//          but it's a good practice to provide comments explaining what each function does. 
//          It helps improve code readability and understanding.
//      
//      2. **Magic Numbers**: 
//          
//          Consider using named constants for the zodiac sign date ranges 
//          (e.g., \`const int ARIES_START = 21;\`, \`const int ARIES_END = 19;\`, etc.) 
//          instead of hardcoding these numbers in your code. 
//          It makes your code more maintainable and easier to understand.
//      
//      3. **Code Reusability**: 
//          
//          You have a significant amount of repeated code in the \`findZodiacSign\` function. 
//          You can make this code more concise by calculating 
//          the zodiac sign based on the month and date ranges rather than 
//          writing separate \`if\` statements for each case.
//      
//      4. **Validation**: 
//      
//          You should add more robust validation to ensure that the user's input 
//          for birth month and date is within valid ranges 
//          (e.g., birth month should be 1-12, and birth date 
//          should be 1-31 or within the appropriate range for each month).
//      
//      5. **Error Handling**: 
//      
//          Consider adding error handling for invalid input. 
//          If the user enters something that is not an integer 
//          when prompted for the month and date, your program may behave unexpectedly.
//      
//      6. **Consistent Formatting**: 
//      
//          Ensure consistent formatting throughout your code, 
//          including indentation and spacing. 
//          Consistency in formatting makes your code more readable.
//      
//      7. **Limit Output**: 
//      
//          Consider limiting the output to just the zodiac sign 
//          without additional decorative lines. This can make the output cleaner.
//      
//      8. **Avoid Global Variables**: 
//      
//          Global variables like \`try_again\` can make the code harder to understand and maintain. 
//          It's better to limit the scope of variables to where they are needed.`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={()=>{setCodeFeedBack(!codeFeedBack)}}>&otimes;</button>
            </div>}

            <br/>
            <br/>
            <p className="Day--thoughts">
                Also today, <br/>
                <strong> I will redesign this website.</strong><br/>
                Im going to change it's CSS because <br/>
                Last time, I just learned how to <br/>
                properly optimize and make the web responsive.<br/>
                Take a look how dumb I was<br/>
                ---same things in different media queries---<br/>
                making the code redundant<br/>
            </p>
            {!cssDisplay && <button className="Day--button" onClick={()=> setCssDisplay(prevValue => !prevValue)}>Day.css</button>}
            {cssDisplay && <div className={ cssExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCssExpand(prevValue => !prevValue)}>
                    <button className={cssExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`@media (min-width: 700px){
    .Day{
    width: 90%;
    position: relative;
    font-family: 'Encode Sans', sans-serif;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
    
    }
    .Day--bookmark{
    top: 48px;
    left: -1px;
    position: absolute;
    width: 5px;
    height: 5px;
    margin: 0;
    border-radius: 10px;
    background-color: var(--special-color);
    border: none;
    transition: height .5s ease, top .5s ease;
    }
    .Day:hover .Day--bookmark{
    height: 100%;
    width: 5px;
    top: 0;
    left: -1px;
    
    }
    .Day--day{
    margin: 20px 0 2px;
    width: 100%;
    }
    .Day--day-count{
    font-size: 30px;
    }
    .Day--day-title{
    font-weight: 500;
    }
    .Day--date{
    margin: 0;
    font-weight: 100;
    width: 100%;
    font-size: 15px;
    text-align: right;
    }
    .Day--thoughts{
    width: 60%;
    text-align: center;
    }
    .Day--button{
    color: rgb(209, 209, 209);
    background-color: var(--button-color);
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: max-content;
    transition: background-color .3s ease,  border-radius .3s ease;
    
    }
    .Day--button:hover{
    cursor: pointer;
    color: var(--button-color);
    background-color: var(--special-color);
    border-radius: 20px;
    }
    
    .Day--code{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 90%;
    }
    .Day--code-expand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    z-index: 1;
    width: 100vw;
    height: max-content;
    }
    .Day--code span code{
    width: 100%;
    }
    .code-expand{
    background-color: var(--special-color);
    position: absolute;
    text-align: center;
    width: 5px; 
    padding: 5px;
    height: 5px;
    right: 30px;
    border-radius: 0;
    border: none;
    outline: none;
    cursor: pointer;
    }
    .code-shrink{
    background-color: var(--sub-special-color);
    position: absolute;
    text-align: center;
    width: 5px; 
    padding: 5px;
    height: 5px;
    right: 30px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    }
    .certificate-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .certificate{
    width:500px; 
    height: 336.70px;
    margin: 10px; 
    box-shadow: 0 0 50px 1px rgb(222, 255, 231, .3);
    transition: height .5s ease;
    }
    .hide-certificate{
    width:500px; 
    height: 0;
    margin: 10px; 
    box-shadow: 0 0 50px 1px rgb(222, 255, 231, .3);
    transition: height .5s ease;
    }
    /* Define a custom scrollbar style */
    ::-webkit-scrollbar {
    position: absolute;
    width: 10px; /* Width of the scrollbar */
    height: 0px;
    }
    
    /* Track (background) of the scrollbar */
    ::-webkit-scrollbar-track {
    background: #252525;
    }
    
    /* Handle (thumb) of the scrollbar */
    ::-webkit-scrollbar-thumb {
    background: #393939;
    border-radius: 10px; /* Rounded corners for the thumb */
    }
    
    /* On hover, style the scrollbar handle */
    ::-webkit-scrollbar-thumb:hover {
    background: #98c379;
    }
    
}
@media only screen and (min-width: 200px) and ((max-width: 699px)){
    .Day{
    width: 90%;
    position: relative;
    font-family: 'Encode Sans', sans-serif;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
    
    }
    .Day--bookmark{
    top: 45px;
    left: -5px;
    position: absolute;
    width: 5px;
    height: 5px;
    margin: 0;
    border-radius: 10px;
    background-color: var(--special-color);
    border: none;
    transition: height .5s ease, top .5s ease;
    }
    .Day:hover .Day--bookmark{
    z-index: 2;
    height: 100%;
    width: 5px;
    top: 0;
    left: -5px;
    
    }
    .Day--day{
    margin: 20px 0 2px;
    width: 100%;
    }
    .Day--day-count{
    font-size: 20px;
    }
    .Day--day-title{
    font-size: 15px;
    font-weight: 500;
    }
    .Day--date{
    font-size: 12px;
    margin: 10px;
    font-weight: 100;
    width: 100%;
    text-align: right;
    }
    .Day--thoughts{
    font-size: 12px;
    width: 80%;
    text-align: left;
    }
    .Day--button{
    color: rgb(209, 209, 209);
    background-color: var(--button-color);
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: max-content;
    transition: background-color .3s ease,  border-radius .3s ease;
    
    }
    .Day--button:hover{
    cursor: pointer;
    color: var(--button-color);
    background-color: var(--special-color);
    border-radius: 20px;
    }
    
    .Day--code{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 90%;
    }
    .Day--code-expand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    z-index: 1;
    width: 100vw;
    height: max-content;
    }
    .Day--code span code{
    width: 100%;
    }
    .code-expand{
    background-color: var(--special-color);
    position: absolute;
    text-align: center;
    width: 5px; 
    padding: 5px;
    height: 5px;
    right: 0;
    border-radius: 0;
    border: none;
    outline: none;
    cursor: pointer;
    }
    .code-shrink{
    background-color: var(--sub-special-color);
    position: absolute;
    text-align: center;
    width: 5px; 
    padding: 5px;
    height: 5px;
    right: 0;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    }
    .certificate{
    width:300px; 
    height: 202.04px;
    margin: 10px; 
    box-shadow: 0 0 50px 1px rgb(222, 255, 231, .3);
    transition: height .5s ease;
    }
    .hide-certificate{
    position: absolute;
    z-index: -1;
    top: 100px;
    opacity: 0;
    width:300px; 
    height: 0;
    margin: 10px; 
    box-shadow: 0 0 50px 1px rgb(222, 255, 231, .3);
    transition: height .5s ease;
    }
    
    /* Define a custom scrollbar style */
    ::-webkit-scrollbar {
    position: absolute;
    width: 0;
    height: 0;
    }
    
    /* Track (background) of the scrollbar */
    ::-webkit-scrollbar-track {
    background: #252525;
    }
    
    /* Handle (thumb) of the scrollbar */
    ::-webkit-scrollbar-thumb {
    background: #393939;
    border-radius: 10px; /* Rounded corners for the thumb */
    }
    
    /* On hover, style the scrollbar handle */
    ::-webkit-scrollbar-thumb:hover {
    background: #98c379;
    }
    
}`}
                    language='CSS'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={()=> setCssDisplay(prevValue => !prevValue)}>&otimes;</button>
                </div>}
            
        </section>
    )
}
export default Day;