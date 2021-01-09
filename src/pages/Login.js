import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../svg/logo.svg';
import LoginForm from '../components/login/LoginForm'
class Login extends Component {
    render() {
        return (
            <div className="main-login-conainer">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" />
                </div>
                <LoginForm />
            </div>
        );
    }
}

export default Login;

// Logo
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`