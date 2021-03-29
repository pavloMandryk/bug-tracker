import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import './Login.css'
import { signIn } from '../../Controlers/Redux/authSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name:"",
        password:"",
    });

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }
    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }
    return (
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login</h1>
                <input name='name' placeholder="Name" onChange={inputChanged} value={formInput.name}></input>
                <input name='password' placeholder="Password" onChange={inputChanged} value={formInput.password}></input>
                <button type="submit" onClick={submit}>Login</button>
            </form>

        </div>
    )
}

export default Login
