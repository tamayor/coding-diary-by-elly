import React from 'react';
import Header from './components/Header';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import Footer from './components/Footer';
import './App.css';


function App() {
  const Days = [
                <Day1/>,<Day2/>,<Day3/>,<Day4/>,<Day5/>,<Day6/>,
              ]

  const days = Days.map((day,index) => {
    return(
      <React.Fragment key={index}>
        {day}
      </React.Fragment>
    )
  })
  return (
    <div className="App">
      <Header/>
      {days}
      <Footer/>
    </div>
  );
}

export default App;
