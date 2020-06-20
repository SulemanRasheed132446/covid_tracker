import React from 'react';
import './App.css';
import {CovidTrackerProvider} from './context/CovidTrackerProvider'
import {Header} from './components/Header/Header';
import {Stats} from './components/Stats/Stats';

function App() {
  return (
    <CovidTrackerProvider>
      <div className="App">
            <Header />
            <Stats/>
      </div>
    </CovidTrackerProvider>
   
  );
}

export default App;
