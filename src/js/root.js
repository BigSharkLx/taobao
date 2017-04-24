import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Index from './components/index.js';
export default class Root extends React.Component{
  render(){
    return(
      <div>
      <Router history={hashHistory}>
      <Route path="/" component={Index} />
      </Router>
      </div>
    );
  }
}
ReactDOM.render(<Root/>,document.getElementById("mainContainer"));
