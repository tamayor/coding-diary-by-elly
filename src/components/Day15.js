

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

    const mycode = `#include <iostream>

using namespace std;

    string foodOpt[8] = {"a", "b", "c", "d", "e", "f", "g", "h"};
    string food[8] = {"CookedEgg", "EggOmelet", "BaconOnBiscuit", "BaconEggSandwich", "HamBiscuit", "Orange", "Coffee", "NonFatMilk"};
    double foodCalories[8] = {84, 93, 357, 388, 363, 45, 0, 91};
    
double calculateBMI(double weight, double height) {
    double heightToMeters = height * 0.01;
    double heightSqr = heightToMeters * heightToMeters;
    double Bmi = weight / heightSqr;

    if (Bmi >= 18.5 && Bmi <= 24.9 )
    {
        cout << " Your BMI is : " << Bmi << " your are normal " << endl;
    } else if ( Bmi <18.5)
    {
        cout << " Your BMI is : " << Bmi << " your are Underweight" << endl;

    } else if ( Bmi >= 24.9)
    {
        cout << " Your BMI is : " << Bmi << " your are  overweight" << endl;;
    } else if ( Bmi > 29.9)
    {
        cout <<" Your BMI is : " << Bmi <<" your are obese" << endl;;
    }

    return Bmi;
}

int userMeal(){

    string threeMeals[] = {"Breakfast", "Lunch", "Dinner"};
    string mealsCalories[3];
    string threeMealsAte[3];
    int totalCaloriesPerMeal[3];
    char option;
    int checkMeal[3];
    int allTotalCalories=0;

    //***** meal

    for (int ask=0 ; ask<3 ; ask++){
        cout << "++++++++++++++++++++++++++++"<<endl;
        cout << "Did you ate your " << threeMeals[ask] <<  "(y/n): ";
        cin >> option;
        cout << "++++++++++++++++++++++++++++"<<endl;
        
        if(option == 'y'){
            ///////////////////////////
            checkMeal[ask] = 'y';
            ///////////////////////////
            char meal;
            int count=1;
            string meals[100];
            int totalCalories=0;
            
            cout << "---------------------------------"<<endl;
            cout << "---------------------------------"<<endl;
            cout <<  threeMeals[ask] << " Meal" << endl;
            cout << "---------------------------------"<<endl;
            cout << "---------------------------------"<<endl;
                
            cout << "Stop Food Selection : Enter 0 " << endl;

            do{
                int foodChecker = 1;
                cout << "Food " << count << ": " ;
                cin >> meal ;

                meals[count] = meal;
                if(meal == '0'){
                    meal='0';
                }else{
                    for(int i=0 ; i<8 ; i++){
                        if(meals[count] == foodOpt[i]){
                            foodChecker = 1;
                            break;
                        }else{
                            foodChecker = 0;
                        }
                    }
                    if(foodChecker == 0){
                        cout<< "Food " << count <<" doesnt match with the options" <<endl;
                        meal='0';
                    }
                }  
                
                count++;
                
            }while(meal != '0');
        
            cout << "---------------------------------"<< endl;
            cout<< threeMeals[ask] << " recorded" << endl;
            cout << "---------------------------------"<< endl;

            //////////////////////////// create an array to store calories intake for each meal
            int countFoodCalories[100];
            int caloriesCounter=0;
            
            for(int i=1 ; i<count-1 ; i++){
                cout << "Meal " << i << ": "<< meals[i] << " = " ;

                for(int j=0 ; j<8 ; j++){ 
                    /////////////////////////////match choices with the options
                    if(meals[i] == foodOpt[j]){
                        cout << food[j] << " = "<< "Calories of " << foodCalories[j] << endl;
                        countFoodCalories[caloriesCounter] = foodCalories[j];
                        caloriesCounter++;
                    }
                }
            }

            cout << "---------------------------------"<< endl;
            cout << threeMeals[ask]<< " Total Calories" << endl;
            for(int c=0 ; c<caloriesCounter ; c++){
                totalCalories += countFoodCalories[c];
            }

            cout << totalCalories << endl;
            cout << "---------------------------------"<< endl;
            
            //store total calories per meal
            totalCaloriesPerMeal[ask] = totalCalories;
        }
    }

    //***** meal
    
    // solve total calories

    for(int i=0 ; i<3 ; i++){
        if(checkMeal[i] == 'y'){
            cout<< threeMeals[i] << " calories = "<< totalCaloriesPerMeal[i]<<endl;
            allTotalCalories +=  totalCaloriesPerMeal[i];
        }else{
            cout<< threeMeals[i] << " calories = 0" <<endl;
            allTotalCalories +=  0;
        }
    }

    cout << "---------------------------------"<<endl;
    cout << "Today's Total Calories is " << allTotalCalories << endl;
    cout << "---------------------------------"<<endl;

    // solve total calories
    return allTotalCalories;
    
}
int FoodPlan() {
    
    cout << "Food meals " << endl;
    cout << "-------------------------------------------------------------" << endl;
    cout << "Option" << "	=	" << "Food Name" << "	=	" << "Calories" << endl;
    cout << "-------------------------------------------------------------" << endl;

    for (int i = 0; i < 8; ++i) {
        cout << foodOpt[i] << " = " << food[i] << " = "<< foodCalories[i] << endl;
    }
    return userMeal(); //// user meal
}

void willWorkOut(int totalCalories){
    if(totalCalories <= 500){
        cout << "You will do soft workout!" << endl;
    }else if(totalCalories >500){
        cout << "You will do hard workout!" << endl;
    }
}

int main() {
    double weight, height;
    double sex, dailyAct, workout;
    
    double Lunch, Breakfast, Dinner;
    int amount;
    double startDate, endDate, desiredWeight;

    cout << "-------------------------------------------------------------" << endl;
    cout << "Please input your designated height (in centimeters): ";
    cin >> height;
    cout << "Please input your weight (in kilograms): ";
    cin >> weight;
    double BMI = calculateBMI(weight, height);
    cout << "-------------------------------------------------------------" << endl;

    int totalCalories = FoodPlan(); // foodplan function call
    
    willWorkOut(totalCalories);

    return 0;
}`
    return(
        <section className="Day">
            <hr className="Day--bookmark"/>
            <h2 className="Day--day"><span className="Day--day-count">Day 15</span> :<br/> <span className="Day--day-title">Coding Tutorial in C++</span></h2> 
            <h4 className="Day--date">December 5, 2023</h4>
            <h4 className="Day--date">from 10pm to 1am</h4>
            <p className="Day--thoughts">
                <strong>My BH roommate asked help from me!<br/>
                They have a project to finish which deadline is December 2<br/>
                A fucking C++ program! <br/>
                Late!<br/>
                So I helped them figure this crap out</strong> <br/>
            </p> 
            

            <p>
                <h3>The Problem</h3> <br/><br/>
            Group 5: Bulotaolo, Castor, Delos Reyes, Libertad, Soleno, Tabiolo <br/>
            Opening tags.<br/>
            Databases:<br/>
            User input: <br/>
            Program that computes user BMI.<br/>
            Need to compute bmi (normal, underweight, overweight, obese)<br/>
            Program that asking the user his calories intake during breakfast, lunch, dinner etc.<br/>
            Compute daily calories intake, have a pre-defined data. Have a food choice and how many calories. <br/>
            Program that asking the user if wants to do hard work out with various sets or a non-workout daily activity. <br/>
            Has a non - workout calories burn. Have a data set. Need to have a data. Ex. Standing, doing daily chores. <br/>

            Type of hard workout with various sets. Upper, lower, and whole boy.<br/>
            Program that Can predict when it started and ended and have a goal weight. <br/>
            Can predict when it started and ended and have a goal weight. <br/>

            Output: start and end date, daily calorie burn, predation of the date.<br/>
            END<br/>
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
               He is given a problem again and <br/>
               and make a program using <strong>C++</strong> <br/>
               I created the -- userMeal function -- <br/>
               and changed the majority of his code <br/>
               He's doing well <br/>
               I am happy and grateful <br/>because it's been a long time coding! <br/>
               Actually later I would totally forget this entire thing! <br/>
            </p>
        </section>
    )
}
export default Day;