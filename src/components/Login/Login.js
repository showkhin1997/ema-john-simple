import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <br />
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogIn}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;