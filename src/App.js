import React from 'react';
import './App.css';
import AuthHeader from "./components/common/header-component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found/not-found-component";
import Login from "./components/login/login-component";
import SearchHeader from "./components/search/search-header";
import Dashboard from "./components/dashboard/dashboad-component";
import { Welcome } from "./components/home/welcome";
import { Documentation } from "./components/documentation/documentation-nav"
import { role } from "./components/login/isloggedIn"




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <AuthHeader />
            <Welcome />
            <Documentation />
          </Route>
          <Route path="/zoo" exact>
            <AuthHeader />
            <SearchHeader />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/dashboard" component={role() ? Dashboard : NotFound} />
          <Dashboard />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
