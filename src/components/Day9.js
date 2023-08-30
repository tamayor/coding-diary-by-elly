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
            <h2 className="Day--day"><span className="Day--day-count">Day 8</span> :<br/> <span className="Day--day-title">I Made 2 Static Website Today...Yesterday!</span></h2> 
            <h4 className="Day--date">August 30, 2023</h4>
            <h4 className="Day--date">since 28 : around 2pm</h4>
            <p className="Day--thoughts">
                <strong>Learning C for 3 days<br/>I haven't eaten breakfast and lunch today.</strong> <br/>
            </p> 
            <p className="Day--thoughts">
            <span>I'm desperate to learn programming but</span><br/>
             <span>for 3 days we don't have a class.</span><br/><br/>
            <strong>
                 <span>August 28 - Holidays</span><br/>
                 <span>August 29 - Class Suspension</span><br/>
                 <span>August 30 - Class Suspension</span><br/>
            </strong><br/>
             <span>I was fucking idiot if <br/>
                I dont do anything for my future.</span><br/>
             <span>And the only thing I could do<br/>
                for myself now is to <strong>STUDY</strong></span><br/>
            
             <span>So today I get back on studying <br/>
                the hardest programming language to learn <strong>C</strong>.</span><br/><br/>
             <span>They say suffer now and<br/>
                enjoy later hahaha</span><br/>
             <span>Yesterday my head was so heavy like <br/>
                I was in front of my PC for almost the entire day.</span><br/>
             <span>Last night I slept 1:30 am <br/>
                reading Qoura memes for 3 hours.</span><br/>
             <span>Now I'm in my journey in understanding <br/>
                <strong>pointers and struct</strong> in C</span>
             </p> 
             <div className="Day--thoughts">
                <p  Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px"}>Me : Give me another problem using struct</p>
                <p  Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px"}>
                **Problem: Student Records**<br/>

                Create a program that manages student records using a struct. Each student should have the following information:<br/>
                - Name up to 50 characters<br/>
                - Roll number integer<br/>
                - Marks in three subjects floating-point numbers<br/>

                Your program should be able to do the following:<br/><br/>
                1. Read information for multiple students from the user.<br/>
                2. Calculate the average marks for each student.<br/>
                3. Find and display the student with the highest average marks.<br/>
                4. Display all student details, including their names, roll numbers, and average marks.<br/>

                Remember to use functions to make your code modular and readable.<br/>

                Feel free to add more features or complexity to the problem if you'd like. Have fun working on this project!<br/>
                </p>
            </div>

             {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    char name[50];
    int roll_num;
    float grade1;
    float grade2;
    float grade3;
    float average;
} Student;

void create_student_list
    (
    Student *students, 
    char *name, 
    int roll_num, 
    float grade1, 
    float grade2, 
    float grade3, 
    float average
    )
{
        
    strcpy(students->name, name);
    students->roll_num = roll_num;
    students->grade1 = grade1;
    students->grade2 = grade2;
    students->grade3 = grade3;
    students->average = average;
    
};

int main(){
    
    int num_of_students;
    printf("How many students do you have?\\n");
    printf("I have : ");
    scanf("%d", &num_of_students);
    
    Student * students = (Student *) malloc (sizeof(Student) * num_of_students);
    char name[50];
    float grade1;
    float grade2;
    float grade3;
    float average;
    for(int i=1 ; i<=num_of_students ; i++){
        printf("Student Number [%d]\\n",i);
        printf("Name : ");
        scanf("%s",name);
        printf("Roll Number : %d\\n",i);
        printf("First Grade : ");
        scanf("%f", &grade1);
        printf("Second Grade : ");
        scanf("%f", &grade2);
        printf("Third Grade : ");
        scanf("%f", &grade3);
        average = (grade1 + grade2 + grade3) / 3;
        printf("\\nStudent Roll Number [%d] has an average of : %f.\\n", i,average);
        printf("\\n");
        create_student_list(&students[i],name,i,grade1,grade2,grade3, average);
    }
    float highest_average = 0;
    char highest_name[50];
    printf("---All Student Details---\\n");
    for (int j=1 ; j<=num_of_students ; j++){
        if(students[j].average > highest_average){
            highest_average = students[j].average;
            strcpy(highest_name,students[j].name);
        }
        printf("Name : %s\\n", students[j].name);
        printf("Roll Number : %d\\n",students[j].roll_num);
        printf("First Grade : %.2f\\n",students[j].grade1);
        printf("Second Grade : %.2f\\n",students[j].grade2);
        printf("Third Grade : %.2f\\n",students[j].grade3);
        printf("Average Grade : %.2f\\n",students[j].average);
        printf("\\n");
    }
    printf("The Highest Average Marks goes to : \\n");
    printf("%s with an average of %.2f", highest_name, highest_average);
}`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                />
                <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                <p className="Day--thoughts">Sample Output</p>
                <p className="Day--thoughts" Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px; text-align:left;"}>
                How many students do you have?
I have : 3<br/>
Student Number &#91;1&#93;<br/>
Name : Hulland<br/>
Roll Number : 1<br/>
First Grade : 98<br/>
Second Grade : 89<br/>
Third Grade : 87<br/>
Student Roll Number &#91;1&#93; has an average of : 91.333336.<br/>
<br/>
Student Number &#91;2&#93;<br/>
Name : Jaken<br/>
Roll Number : 2<br/>
First Grade : 85<br/>
Second Grade : 83<br/>
Third Grade : 90<br/>
Student Roll Number &#91;2&#93; has an average of : 86.000000.<br/>
<br/>
Student Number &#91;3&#93;<br/>
Name : Paw<br/>
Roll Number : 3<br/>
First Grade : 90<br/>
Second Grade : 87<br/>
Third Grade : 91<br/>
Student Roll Number &#91;3&#93; has an average of : 89.333336.<br/>
<br/>
---All Student Details---<br/>
Name : Hulland<br/>
Roll Number : 1<br/>
First Grade : 98.00<br/>
Second Grade : 89.00<br/>
Third Grade : 87.00<br/>
Average Grade : 91.33<br/>
<br/>
Name : Jaken<br/>
Roll Number : 2<br/>
First Grade : 85.00<br/>
Second Grade : 83.00<br/>
Third Grade : 90.00<br/>
Average Grade : 86.00<br/>
<br/>
Name : Paw<br/>
Roll Number : 3<br/>
First Grade : 90.00<br/>
Second Grade : 87.00<br/>
Third Grade : 91.00<br/>
Average Grade : 89.33<br/>
<br/>
The Highest Average Marks goes to : <br/>
Hulland with an average of 91.33<br/>
                </p>
                </div>}
        </section>
    )
}
export default Day;