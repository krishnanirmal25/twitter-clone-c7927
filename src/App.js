import Feed from './Feed.js'
import './App.css';
import Sidebar from './Sidebar';
import React from 'react';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      {/* {Feed Section } */}
      <Feed />
      {/* {Widgets } */}
      <Widgets />
    </div>
  );
}

export default App;
