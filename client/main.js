import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import Login from '../components/Login'
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/app" component={App}></Route>
        <Route path="/login" component={Login}></Route>
    </Router>,
    document.getElementById("app")
)