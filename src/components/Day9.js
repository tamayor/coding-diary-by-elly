import React from "react";
import { CodeBlock } from "react-code-blocks";
import myCustomTheme from "./CustomTheme";
import customStyle from "./CustomStyle";
import './Day.css';

function Day(){
    const [codeDisplay, setCodeDisplay] = React.useState(false);
    const [codeExpand, setCodeExpand] = React.useState(false);
    const [codeDisplay2, setCodeDisplay2] = React.useState(false);
    const [codeExpand2, setCodeExpand2] = React.useState(false);
    function handleCodeDisplay(){
        setCodeDisplay(!codeDisplay);
        if(codeExpand){
            setCodeExpand(!codeExpand)
        }
    }
    function handleCodeDisplay2(){
        setCodeDisplay2(!codeDisplay2);
        if(codeExpand2){
            setCodeExpand2(!codeExpand2)
        }
    }
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 9</span> :<br/> <span className="Day--day-title">Learning <strong>pointers</strong> and <strong>struct</strong></span></h2> 
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
                <p  Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px"}><strong>Me</strong> : Give me another problem using struct</p>
                <p  Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px"}>
                <strong>ChatGPT</strong> :<br/>
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
    printf("\\n");
    
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
                /> <button className="Day--button" onClick={handleCodeDisplay}>&otimes;</button>
                </div>}
            <br/>   
                {!codeDisplay2 && <button className="Day--button" onClick={handleCodeDisplay2}>Code 2</button>}
            {codeDisplay2 && <div className={ codeExpand2 ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand2(prevValue => !prevValue)}>
                    <button className={codeExpand2 ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    int account_num;
    char account_name[50];
    float balance;
} Bank_Account;


void deposit (Bank_Account *b, int *num_accounts);
void withdraw (Bank_Account *b, int *num_accounts);
void display (Bank_Account *b, int *num_accounts);
void prompt(Bank_Account * bank_accounts, int *num_accounts);
int main(){
    int num_accounts = 3;
    Bank_Account * bank_accounts = (Bank_Account*)malloc(sizeof(Bank_Account)*num_accounts);
    
    bank_accounts[0].account_num = 111;
    strcpy(bank_accounts[0].account_name, "John");
    bank_accounts[0].balance = 100;
    
    bank_accounts[1].account_num = 222;
    strcpy(bank_accounts[1].account_name, "Kanye");
    bank_accounts[1].balance = 200;
    
    bank_accounts[2].account_num = 333;
    strcpy(bank_accounts[2].account_name, "Lowe");
    bank_accounts[2].balance = 300;
    
    printf("Bank Account System\\n\\n");
    for(int i=0 ; i<num_accounts ; i++){
        printf("%d\\n", i+1);
        printf("Account Number : %d\\n", bank_accounts[i].account_num);
        printf("Account Holder's Name : %s\\n", bank_accounts[i].account_name);
        printf("Account Balance : $%.2f\\n", bank_accounts[i].balance);
        printf("\\n");
    };
    prompt(bank_accounts, &num_accounts);
    
    free(bank_accounts);
    
};
void prompt(Bank_Account * bank_accounts, int *num_accounts){
    int option;
    while(option!=4){
        
        printf("Select an option:\\n"
                "1. Deposit\\n"
                "2. Withdraw\\n"
                "3. Display Account Details\\n"
                "4. Exit\\n\\n"
                "Enter your choice: ");
        scanf("%d", &option);
        switch(option){
            case 1: deposit(bank_accounts,num_accounts);
            break;
            case 2: withdraw(bank_accounts,num_accounts);
            break;
            case 3: display(bank_accounts,num_accounts);
            break;
            case 4: printf ("Exiting the program");
            break;
            default:
                    printf("!! Invalid option. Please choose a valid option.!!\\n\\n");
                    option=0;
            break;
        }
    }
}

void deposit (Bank_Account *b, int *num_accounts){
    printf("\\n----------DEPOSIT----------\\n\\n");
    int acc_num;
    float deposit_amount;
    printf("Enter Account Number: ");
    scanf("%d", &acc_num);
    
    int match = 0;
    for(int j=0 ;j<*num_accounts ; j++){
        if(acc_num == b[j].account_num){
            match = 1;
        }
    }
    if(match){
        printf("Enter Deposit Amount: ");
        scanf("%f", &deposit_amount);
        printf("\\n");
        for(int i=0 ; i<*num_accounts ; i++){
            if(b[i].account_num == acc_num){
                b[i].balance += deposit_amount;
                printf("Account Number : %d\\n", b[i].account_num);
                printf("Account Holder's Name : %s\\n", b[i].account_name);
                printf("Account Balance : $%.2f\\n", b[i].balance);
                printf("\\n");
                printf("You successfully deposited %.2f\\n", deposit_amount);
                printf("Current balance is $%.2f\\n\\n", b[i].balance);
                break;
            }
        }
    }else printf("\\n!! Account Number not found !!\\n\\n");
    
    
};
void withdraw (Bank_Account *b, int *num_accounts){
    printf("\\n----------WITHDRAW----------\\n\\n");
        int acc_num;
    float withdraw_amount;
    printf("Enter Account Number: ");
    scanf("%d", &acc_num);
    int match = 0;
    for(int j=0 ;j<*num_accounts ; j++){
        if(acc_num == b[j].account_num){
            match = 1;
        }
    }
    if(match){
        printf("Enter Withdraw Amount: ");
        scanf("%f", &withdraw_amount);
        printf("\\n");
        
        for(int i=0 ; i<*num_accounts ; i++){
            if(b[i].account_num == acc_num){
                if(withdraw_amount > b[i].balance){
                    printf("!! Insufficient Balance !!\\n");
                    printf("Account %s has only %.2f\\n\\n", b[i].account_name, b[i].balance);
                    while(withdraw_amount > b[i].balance){
                        printf("Enter Withdraw Amount: ");
                        scanf("%f", &withdraw_amount);
                    }
                    
                    if(withdraw_amount <= b[i].balance){
                        b[i].balance -= withdraw_amount;
                        printf("Account Number : %d\\n", b[i].account_num);
                        printf("Account Holder's Name : %s\\n", b[i].account_name);
                        printf("Account Balance : $%.2f\\n", b[i].balance);
                        printf("\\n");
                        printf("You successfully withdrew %.2f\\n", withdraw_amount);
                        printf("Remaining balance is $%.2f\\n\\n", b[i].balance);
                        break;
                    }
                }
            }
        }
    }else printf("\\n!! Account Number not found !!\\n\\n");
    
    
};
void display (Bank_Account *b, int *num_accounts){
    printf("\\n----------DISPLAY----------\\n\\n");
    for(int i=0 ; i<*num_accounts ; i++){
            printf("Account Number : %d\\n", b[i].account_num);
            printf("Account Holder's Name : %s\\n", b[i].account_name);
            printf("Account Balance : $%.2f\\n", b[i].balance);
            printf("\\n");
    }
};`}
                    language='c'
                    showLineNumbers={true}
                    wrapLines={true}
                    theme={myCustomTheme}
                    customStyle={customStyle}
                /> <button className="Day--button" onClick={handleCodeDisplay2}>&otimes;</button>
                </div>}
                <div className="Day--thoughts">
                <p  Style={"border:3px dotted #98c379; padding: 10px; border-radius: 10px"}>
                <strong>ChatGPT</strong> :<br/>
                Congratulations on successfully <br/>
                solving two C challenges involving structs! <br/>
                Your dedication to problem-solving <br/>
                and coding is commendable. <br/>
                By completing these challenges, <br/>
                you've gained valuable experience <br/>
                in working with structures, functions, <br/>
                and user interactions in C programming. <br/>
                Keep up the good work <br/>
                and continue to explore <br/>
                more complex programming concepts <br/>
                to enhance your skills further. <br/>
                If you have any questions or <br/>
                need further assistance, <br/>
                feel free to ask. Happy coding!<br/>
                </p>
            </div>
        </section>
    )
}
export default Day;