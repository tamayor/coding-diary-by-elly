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
            <h2 className="Day--day"><span className="Day--day-count">Day 2</span> :<br/>  <span className="Day--day-title">Transfer to React from Hard Coding</span></h2> 
            <h4 className="Day--date">August 7, 2023</h4>
            <p  className="Day--thoughts">
                Because it's hard to maintain <br/>hard-coded codes like this diary.<br/>
                I thought of coding it with <br/><strong>React.js</strong> library instead,<br/>
                because React has the ability to <br/>breakdown codes to components. <br/>
                As you can see this is the main source code.<br/>
                <strong><i>Composability</i></strong>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
                {codeDisplay && <div className={ codeExpand ? "Day--code-expand" : "Day--code" }>
                <div onClick={()=>setCodeExpand(prevValue => !prevValue)}>
                    <button className={codeExpand ? "code-shrink" : "code-expand" }></button>
                </div>
                  <CodeBlock
                text= {`import Day1 from './components/Day1';
import Day2 from './components/Day2';
import './App.css';

function App() {

  return (
    <div className="App">
      <Day1/>
      <Day2/>
    </div>
  );
}

export default App;`}
                language='javascript'
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