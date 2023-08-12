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
            <h2 className="Day--day"><span className="Day--day-count">Day 4</span> : <span className="Day--day-title">Studying my School Assignment</span></h2> 
            <h4 className="Day--date">August 12, 2023</h4>
            <p  className="Day--thoughts">
                <strong>We have a homework!</strong> <br/>
                Study two classic algorithms <br/>
                <strong>Insertion Sort and Selection Sort</strong>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className="Day--code"> <CodeBlock
                text= {`#include <stdio.h>
void insertion_sort(int arr[], int length){
    for(int i=1 ; i<length ; i++){
        int key=arr[i];
        int j=i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    printf("Insertion Sort\\n");
    for (int i=0 ; i<length ; i++){
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
}

void selection_sort(int arr[], int length){
    for (int i=0 ; i<length-1 ; i++){
        int min_val = i;
        for(int j=i+1 ; j<length ; j++){          
            if(arr[j] < arr[min_val]) min_val=j;  
        }                                              
        if(min_val != i){
            int temp = arr[min_val];
            arr[min_val] = arr[i];
            arr[i] = temp;
        }
    }
    printf("Selection Sort\\n");
    for (int i=0 ; i<length ; i++){
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
}

int main(){
    int arr[] = {11, 4, 27, 8, 23, 16, 32, 9, 19, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    printf("This is my arrays\\n");
    for (int i=0 ; i<size ; i++){
        printf("arr[%d] = %d\\n", i, arr[i]);
    }
    
    int option;
    printf("Choose your Sorting Algorithm: 1-2\\n1. Insertion Sort\\n2. Selection Sort\\n");
    scanf("%d", &option);
    switch(option){
        case 1: 
            insertion_sort(arr, size);
            break;
        case 2: 
            selection_sort(arr, size);
            break;
        default:
            printf("Insert 1 <= x <=2");
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
            <p  className="Day--thoughts">
                I won't be posting this shit here without understanding<br/>
                so if it's in this diary <em>I understand it</em>
            </p>
        </section>
    )
}
export default Day;