import React from 'react'
import {Router, Switch, Route} from 'react-router'
import { createBrowserHistory} from 'history'

const Routes = () => {
  return (
    <Router history={history}>
      <div className="navbar">
        <h6 style={{ display: "inline" }}>Nav Bar</h6>
      </div>
      <Switch>
        <Route path="/login" component={LoginHandler} />
        <Route path="/logout" component={LogoutHandler} />
        <Route path="*" component={ProtectedHandler} />
      </Switch>
    </Router>
  );
};

function App(){
    return (
         <div>
           <Routes />
         </div>
    );
}

export default App;