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
            <h2 className="Day--day"><span className="Day--day-count">Day 2</span> : <span className="Day--day-title">Transfer to React from Hard Coding</span></h2> 
            <h4 className="Day--date">August 7, 2023</h4>
            <p  className="Day--thoughts">
                Because it's hard to maintain hard coded codes like this diary.<br/>
                I thought of coding it with React.js library instead, <br/>
                because react has the ability to breakdown codes to components. <br/>
                As you can see this is the main source code.<br/>
                <strong><i>Composability</i></strong>
            </p>
            {!codeDisplay && <button className="Day--button" onClick={handleCodeDisplay}>Code</button>}
                {codeDisplay && <div className="Day--code">
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