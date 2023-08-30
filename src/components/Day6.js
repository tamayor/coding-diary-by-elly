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
            <h2 className="Day--day"><span className="Day--day-count">Day 6</span> :<br/>  <span className="Day--day-title">Studying my School Assignment</span></h2> 
            <h4 className="Day--date">August 17, 2023</h4>
            <h4 className="Day--date">around 10PM</h4>
            <p  className="Day--thoughts">
                <strong>Working on an Assignment</strong> <br/>
                Our task is to learn <br/>some classic sorting functions like<br/>
                <strong>insertion and selection </strong>in <strong>C</strong>.<br/>
                Create randomly generated numbers using <br/>
                <strong>&#x3c;stdlib.h&#x3e;</strong>'s rand&#x28;&#x29;.<br/>
                Measure its execution time using <br/>
                <strong>&#x3c;time.h&#x3e;</strong>'s clock&#x28;&#x29;.<br/>
                And use the sorting functions to sort<br/>
                the random arrays and print it's execution time.
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
            {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                <CodeBlock
                text= {`#include <stdio.h>
#include <stdlib.h>     /*** in order to access rand() ***/
#include <time.h>       /*** in order to access clock() ***/
#include <stdbool.h>    /*** in order to access bool data type ***/

void insertion_sort(int arr[], int size){       /*** insertion sort ***/
    for(int i=1 ; i<size ; i++){
        int key = arr[i];
        int j=i-1;
        while (j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    printf("Insertion Sort:\\n");
    for(int l=0 ; l<size ; l++){
        printf("%d ", arr[l]);
    }
}                                               /*** insertion sort ***/

void selection_sort(int arr[], int size){       /*** selection sort ***/
    for(int i=0 ; i<size-1 ; i++){
        int min_val = i;
        for(int j=i+1 ; j<size ; j++){
            if(arr[j]<arr[min_val]) min_val = j;
        }
        if(i != min_val){
            int temp = arr[min_val];
            arr[min_val] = arr[i];
            arr[i] = temp;
        }
    }
    printf("Selection Sort:\\n");
    for(int l=0 ; l<size ; l++){
        printf("%d ", arr[l]);
    }
}                                               /*** selection sort ***/

int main(){

    clock_t start,end ;                        /*** using <time.h> + clock_t is a must ***/
    int size;                                  /*** unsigned size variable ***/

    printf("What is the size of array: ");     /*** ask user input ***/
    scanf("%d", &size);                        /*** assigns value to size variable ***/
    int arr[size];                             /*** setting array size ***/
    
    for(int i=0 ; i<size ; i++){               /*** loops the entire array ***/
        arr[i] = rand() % (size);              /*** and assigning random numbers using rand() from <stdlib.h> ***/
    }
    
    printf("\\n%d random numbers\\n\\n", size);
    for(int i=0 ; i<size ; i++){               /*** printing the random numbers ***/
        printf("%d ", arr[i]);
    }

    int sort_style;
    printf("\\n\\nChoose your sorting method: \\n1. Insertion\\n2. Selection\\n\\nI choose ");
    scanf("%d", &sort_style);
    bool error=true;
    
    while(error){                                /*** asks user input again if user typed the wrong numbers ***/
        if(sort_style == 1){
            start = clock();                     /*** time record starts here ***/
            insertion_sort(arr, size);           /*** calling and performing insertion sort ***/
            end = clock();                       /*** time record ends here ***/ 
            error = false;
        }else if(sort_style == 2){
            start = clock();                     /*** time record starts here ***/
            selection_sort(arr, size);           /*** calling and performing selection sort ***/
            end = clock();                       /*** time record ends here ***/ 
            error = false;
        }else{
            printf("\\n\\nChoose your sorting method: \\n1. Insertion\\n2. Selection\\n\\nI choose ");
            scanf("%d", &sort_style);
            error=true;                          /*** asks user input again if user typed the wrong numbers ***/
        }
    }
    double duration = (double)(end - start) / CLOCKS_PER_SEC;  /*** solves the final execution time of the sorting function ***/
    printf("\\nExecution Time = %.2f seconds\\n", duration);
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
            Fun Fact:<br/>   <i>The execution time of sorting <br/>
            an array of 10 elements is <strong>0 sec</strong> and <br/>
            relatively close to <strong>1 sec</strong> <br/>
            for an array of 10k elements. </i>
            </p>
        </section>
    )
}
export default Day;