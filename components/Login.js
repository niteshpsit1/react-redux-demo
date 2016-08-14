import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="login-form">
                    <h1 className="title text-center">Welcome</h1>
                    <form id="login-form" method="post" className="form-signin" role="form">
                        <input name="email" id="email" type="email" className="form-control"placeholder="Email address" /> 
                        <input name="password" id="password" type="password" className="form-control disable" placeholder="Password"/>
                        <button className="btn btn-block bt-login" type="submit">Sign In</button>
                    </form>
                    <div className="form-footer">
                        <div className="row">
                            <div className="col-xs-7 col-sm-7 col-md-7">
                                <i className="fa fa-lock"></i> 
                                <a href="#"> Forgot password? </a>
                            </div>
                            <div className="col-xs-5 col-sm-5 col-md-5">
                                <i className="fa fa-check"></i> <a href="#"> Sign Up </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Login