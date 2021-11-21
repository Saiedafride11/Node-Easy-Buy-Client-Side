import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { SignInUsingGoogle} = useAuth();
    document.title = 'Login';

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
    }
    return (
        <div className="login">
            <div className="container py-5">
                <div className="text-center">
                    <h3 className="pb-3" style={{color: '#ab7a5f'}}>Please Login</h3>
                    <button onClick={handleGoogleLogin} className="btn w-25" style={{color: '#ab7a5f', border: '2px solid #ab7a5f'}}> 
                        <img src="https://i.ibb.co/qN9z9Fy/google-logo.png" alt="" className="w-25" /> Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;