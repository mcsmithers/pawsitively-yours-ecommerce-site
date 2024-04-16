import React, { useState, useEffect } from "react";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';
import { auth } from "../firebase"

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => console.error(err))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="login">
            <Link to='/login' style={{ textDecoration: "none" }}>
                <div className="login-logo">
                    <StoreIcon classname="login-logo-image" fontSize="large" />
                    <h2 className="login-logo-title">Pawsitively Your eShop</h2>
                </div>
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='text' value={password} onChange={e => e.target.value} />

                    <button type='submit' className='login-signin-button' onClick={signIn}>Sign In</button>
                </form>

                <p>By signing in, you agree to the Pawsitively Yours eShop website conditions of use and sale. Please see our Privacy Notice and our Cookies Notice.</p>

                <button className='login-register-button' onClick={register}>Create Your PAwsitively Yours eShop Account</button>
            </div>
        </div>
    )
}

export default Login