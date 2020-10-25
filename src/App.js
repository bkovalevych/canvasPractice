import React from 'react';
import './App.scss';
import Content from "./template/topics"
import Authorization from "./pages/authorization";
import {
    Switch,
    Route,
} from "react-router-dom";
import routes from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/'>
              <Content />
          </Route>
          <Route path={routes.AUTHORIZATION}>
              <Authorization/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
