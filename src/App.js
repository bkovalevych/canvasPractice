import React from 'react';
import './App.scss';
import Content from "./template/topics"
import Authorization from "./pages/authorization";

function App() {
  return (
    <div className="App">
      <Authorization/>
      <Content />

    </div>
  );
}

export default App;
