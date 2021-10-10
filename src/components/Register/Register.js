import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have account? <Link to="/login">Login</Link></p>
                <div>----------or----------</div>
                <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;