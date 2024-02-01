import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";
import './Day.css';

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);
    const [codeExpand, setCodeExpand] = React.useState(false);
    const [codeFeedBack, setCodeFeedBack] = React.useState(false);
    const [feedBackExpand, setFeedBackExpand] = React.useState(false);
    const [gptCodeDisplay, setgptCodeDisplay] = React.useState(false);
    const [gptCodeExpand, setgptCodeExpand] = React.useState(false);
    const [newCodeDisplay, setNewCodeDisplay] = React.useState(false);
    const [newCodeExpand, setNewCodeExpand] = React.useState(false);
    const [newCodeFeedBack, setNewCodeFeedBack] = React.useState(false);
    const [newFeedBackExpand, setNewFeedBackExpand] = React.useState(false);
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
            <h4 className="Day--date">Morning</h4>
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
                I ask chatGPT and this is its feedback. <br/>
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
            <p className="Day--thoughts">
            Its recommendation
            </p>
            <br/>

            {!gptCodeDisplay && <button className="Day--button" onClick={()=>setgptCodeDisplay(prevValue => !prevValue)}>chatGPT Code recommendation</button>}
            {gptCodeDisplay && <div className={ gptCodeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setgptCodeExpand(prevValue => !prevValue)}>
                    <button className={gptCodeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`#include <stdio.h>
#include <stdbool.h>

const char* zodiacSigns[] = {
    "Capricornus (Goat)", "Aquarius (Water Bearer)", "Pisces (Fish)",
    "Aries (Ram)", "Taurus (Bull)", "Gemini (Twins)",
    "Cancer (Crab)", "Leo (Lion)", "Virgo (Virgin)",
    "Libra (Balance)", "Scorpius (Scorpion)", "Sagittarius (Archer)"
};

const int zodiacStartDates[] = { 20, 19, 21, 20, 21, 21, 22, 23, 23, 24, 22, 21 };

bool inRange(int value, int min, int max) {
    return value >= min && value <= max;
}

int getZodiacIndex(int month, int day) {
    if (inRange(day, 1, zodiacStartDates[month - 1]))
        return month - 1;
    
    if (month == 12 && inRange(day, zodiacStartDates[month - 1], 31))
        return 0; // Capricornus wraps around to January
    
    for (int i = month; i < 12; i++) {
        if (inRange(day, zodiacStartDates[i], zodiacStartDates[i + 1] - 1))
            return i;
    }

    return -1; // Invalid date
}

int main() {
    int birth_month;
    int birth_date;
    char try_again;
    
    do {
        printf("What is your Birth Month (1 - 12): ");
        scanf("%d", &birth_month);
        printf("What is your Birth Date (1 - 31): ");
        scanf("%d", &birth_date);
        printf("\\n");

        if (birth_month >= 1 && birth_month <= 12 && birth_date >= 1 && birth_date <= 31) {
            int zodiacIndex = getZodiacIndex(birth_month, birth_date);
            if (zodiacIndex != -1) {
                printf("Zodiac Sign is %s\\n\\n", zodiacSigns[zodiacIndex]);
            } else {
                printf("Invalid Date\\n\\n");
            }
        } else {
            printf("Invalid Input\\n\\n");
        }

        printf("Wanna check different birthdate's zodiac sign? (y/n): ");
        scanf(" %c", &try_again);
        printf("\\n");

    } while (try_again == 'y' || try_again == 'Y');
    
    return 0;
}`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={()=>setgptCodeDisplay(prevValue => !prevValue)}>&otimes;</button>
                </div>}
            <br/>

            <p className="Day--thoughts">
                I changed the entire code this afternoon<br/>
                inspired by ChatGPT's code recommendation<br/>
            </p>
            {!newCodeDisplay && <button className="Day--button" onClick={()=>setNewCodeDisplay(prevValue => !prevValue)}>New Code</button>}
            {newCodeDisplay && <div className={ newCodeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setNewCodeExpand(prevValue => !prevValue)}>
                    <button className={newCodeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`#include <stdio.h>

int main(){
    
    char * zodiacSigns[] = {
        "Aquarius (Water Bearer)",
        "Pisces (Fish)",
        "Aries (Ram)",
        "Taurus (Bull)",
        "Gemini (Twins)",
        "Cancer (Crab)",
        "Leo (Lion)",
        "Virgo (Virgin)",
        "Libra (Balance)",
        "Scorpius (Scorpion)",
        "Sagittarius (Archer)",
        "Capricornus (Goat)"
    };
    int zodiacMidDate[] = {20,19,21,20,21,21,23,23,23,23,22,22};
    int daysInMonth[] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    char *months[] = {
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June",
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    };
    
    int birth_month;
    int birth_date;
    char loop;
    
    while(1){
        printf("Your Birth Month (1-12) : ");
        scanf("%d", &birth_month);
        // 1: birth_month = 2
        // 2: birth_month = 1
        // 3: birth_month = 12
    
        if(birth_month >= 1 && birth_month <= 12){
            printf("Your Birth Date (1-30) :");
            scanf("%d", &birth_date);
        // 1: birth_date = 15
        // 2: birth_date = 1
        // 3: birth_date = 31	
        }else{
            printf("Invalid Month\\n");
            return 0;
        }
        
        if(birth_date >= 1 && birth_date <= 31){
            // 3: 31 >= 1 && 31 <=31
            printf("%s %d\\n", months[birth_month-1], birth_date);
            // 3: "Capricornus (Goat)"
            if(birth_date >= zodiacMidDate[birth_month-1] && birth_date <= daysInMonth[birth_month-1]){		
                    printf("Your zodiac sign is %s\\n", zodiacSigns[birth_month-1]);
            }else if(birth_date >= 1 && birth_date < zodiacMidDate[birth_month-1]){
                // 1: 15 >=  1 && 15 <= 19	
                // 2: 1 >=  1 && 1 <= 19	
                if(birth_month == 1) {
                    birth_month=12;
                    printf("Your zodiac sign is %s\\n", zodiacSigns[birth_month-1]);
                    // 2: "Capricornus (Goat)"
                }
                else{
                    printf("Your zodiac sign is %s\\n", zodiacSigns[birth_month-2]);
                    // 1: "Aquarius (Water Bearer)"
                }
            }else{
                printf("Invalid input\\n");
            }
            
        }else{
            printf("Invalid Date\\n");
            return 0;
        }
        printf("\\nTry another Birthday ? (y/n) : ");
        scanf(" %c", &loop);
        printf("\\n");
        if(loop!= 'y'){
            return 0;
        }
    };
                }`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={()=>setNewCodeDisplay(prevValue => !prevValue)}>&otimes;</button>
                </div>}
            <br/>

            <p className="Day--thoughts">
                I ask chatGPT and this is its feedback. <br/>
            </p>
            {!newCodeFeedBack && <button className="Day--button" onClick={()=>{setNewCodeFeedBack(!newCodeFeedBack)}}>chatGPT New Code feedback</button>}
            {newCodeFeedBack && <div className={ newFeedBackExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setNewFeedBackExpand(prevValue => !prevValue)}>
                    <button className={newFeedBackExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`//      Your code is well-structured and effectively accomplishes the task of determining 
//      a person's zodiac sign based on their birth month and date. 
//      Here's a summary of the code's strengths and areas for improvement:
//      
//
//
//      **Strengths:**
//      
//      1. **Clear Structure:** 
//      
//      Your code is organized and easy to follow. 
//      It's divided into distinct sections for zodiac sign data, month data, 
//      and the main program logic, making it readable and maintainable.
//      
//      2. **Input Validation:** 
//      
//      You validate both the birth month and date to ensure they are within the valid ranges. 
//      This is a good practice to handle potential user input errors.
//      
//      3. **Handling Edge Cases:** 
//      
//      Your code correctly handles cases where the birth date falls before 
//      the zodiac transition date (e.g., January). 
//      It adjusts the birth month accordingly.
//      
//      4. **Use of Arrays:** 
//      
//      You efficiently use arrays to store zodiac sign names, 
//      zodiac transition dates, and month names. 
//      This enhances code readability and maintainability.
//      
//
//
//      **Areas for Improvement:**
//      
//      1. **Comments:** 
//      
//      While you do have some comments in your code, 
//      you could consider adding more comments to explain 
//      the purpose of certain sections or to provide additional context. 
//      For example, you can explain the purpose of \`zodiacMidDate\` and \`daysInMonth\` arrays.
//      
//      2. **Error Messages:** 
//      
//      Your error messages are informative, 
//      but you could enhance them by providing more 
//      specific details about the error. 
//      For instance, you can specify the valid ranges when
//      displaying the "Invalid Month" or "Invalid Date" messages.
//      
//      3. **Simplify Loop:** 
//      
//      The loop structure works, 
//      but you could simplify the loop condition by 
//      using a \`while (1)\` loop and using \`break\` to exit when needed. 
//      This can make the code slightly more concise.
//      
//      Overall, your code is well-written and functional, 
//      and it effectively accomplishes the task at hand. 
//      Adding a few more comments and refining error messages 
//      would be minor improvements to consider.`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={()=>{setNewCodeFeedBack(!newCodeFeedBack)}}>&otimes;</button>
            </div>}
            <br/>    


            <br/>
            <br/>
            <p className="Day--thoughts">
                Also today, <br/>
                <strong> I did redesign this website.</strong><br/>
                I changed it's CSS because <br/>
                Last time, I just learned how to <br/>
                properly optimize and make the web responsive.<br/>
                Take a look how dumb I was<br/>
                ---same things in different media queries---<br/>
                making the code redundant.<br/>
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