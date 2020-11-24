import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Description from './Components/Description';


ReactDOM.render(

   <Provider store={Store}>
      <Router>
         <Route path="/" exact component={App}/>
         <Route path="/movie/:id" exact render={props => <Description {...props}/>}/>
      </Router>
   </Provider>
   ,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
