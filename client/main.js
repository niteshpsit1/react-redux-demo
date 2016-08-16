import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Login from '../components/Login'
import { Router, Route, Link, browserHistory } from 'react-router'
import store from '../redux/store/store'

ReactDOM.render(
    <provider store={store}>
    <Router history={browserHistory}>
        <Route path="/login" component={Login}></Route>
        <Route path="/app" component={App}></Route>
    </Router>
    </provider>,
    document.getElementById("app")
)