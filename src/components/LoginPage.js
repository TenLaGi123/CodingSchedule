import React, { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Login({history}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function validateForm() {
            return email.length > 0 && password.length > 0;
        }
        
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                type="submit"
                className="btn btn-primary btn-block" 
                disabled={!validateForm()}
                >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }

export default Login