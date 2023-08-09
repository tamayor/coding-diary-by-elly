import React from 'react';
import Header from './components/Header';
import Day1 from './components/Day1';
import Day2 from './components/Day2';

import Footer from './components/Footer';
import './App.css';


function App() {
  const Days = [
                <Day1/>,
                <Day2/>,]

  const days = Days.map((day,index) => {
    return(
      <React.Fragment key={index}>
        {day}
        {index !== Days.length-1 && <hr/>}
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
