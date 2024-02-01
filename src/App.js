import React from 'react';
import Header from './components/Header';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Day5 from './components/Day5';
import Day6 from './components/Day6';
import Day7 from './components/Day7';
import Day8 from './components/Day8';
import Day9 from './components/Day9';
import Day10 from './components/Day10';
import Day11 from './components/Day11';
import Day12 from './components/Day12';
import Day13 from './components/Day13';
import Day14 from './components/Day14';
import Day15 from './components/Day15';
import Day16 from './components/Day16';
// import Day17 from './components/Day17';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './App.css';


function App() {
  const [searchDay, setSearchDay] = React.useState("");
  const Days = [
                <Day1 name='1'/>,<Day2 name='2'/>,<Day3 name='3'/>,<Day4 name='4'/>,<Day5 name='5'/>,
                <Day6 name='6'/>, <Day7 name='7'/>,<Day8 name='8'/> ,<Day9 name='9'/>,<Day10 name='10'/>
                ,<Day11 name='11'/>,<Day12 name='12'/>,<Day13 name='13'/>,<Day14 name='14'/>,<Day15 name='15'/>,
                <Day16 name='16'/>,
              ]

  const filteredDays = Days.filter (day => {
    return day.props.name === searchDay
  })
  const dayComponents = filteredDays.map((day, index) => (
    <React.Fragment key={index}>{day}</React.Fragment>
  ));
  const allDays = Days.map((day, index) => (
    <React.Fragment key={index}>{day}</React.Fragment>
  ));
  console.log(Days.length);
  return (
    <div className="App">
      <Header/>
      <div className='App-search'>
        <label className='App-search-label'>Day </label><input className='App-search-input'
          placeholder='0'
          value={searchDay}
          type='number'
          onChange={e => setSearchDay(e.target.value)}
        />
      </div>
      { searchDay === "" ? allDays : dayComponents}
      {((searchDay > Days.length || searchDay <= 0 ) && (searchDay !== "")) && (
        <NotFound 
          dayFind = {searchDay}
          days = {Days.length}
        />
      )}
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
