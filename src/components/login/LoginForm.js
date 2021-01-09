import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FBlogo from '../../images/fb-logo.png'

const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const initState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    checked: true
}

class LoginForm extends Component {

    state = initState;

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };

    // validation
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: ''
        }
        if (!this.state.email) {
            inputError = true;
            errors.emailError = (
                <span style={{color: '#db7302', fontSize:'0.8rem'}}>Please enter a valid email or phone number.</span>
            )
        } else if (!this.state.email.match(regexp)) {
            inputError = true;
            errors.emailError = (
                <span style={{color: '#db7302', fontSize:'0.8rem'}}>Please enter a valid email.</span>
            )
        }
        if (this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = (
                <span style={{color: '#db7302', fontSize:'0.8rem'}}>Your password must contain between 4 and 60 characters.</span>
            )
        }
        this.setState({
            ...errors
        });
        return inputError
    }

    // clear input upon submission
    onSubmit = e => {
        e.preventDefault()
        const err = this.validate();
        if(!err) {
            this.setState(initState);
        }
    }

    // checkbox
    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }



    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input 
                            className={this.state.emailError 
                                ? 'input-error input-empty' 
                                : 'input-empty'}
                            type="email" 
                            onChange={this.handleEmailChange} 
                            value={this.state.email}
                            required/>
                            <label>Email or Phone Number</label>
                            <span>{this.state.emailError}</span>
                        </div>
                        <div className="input-container">
                        <input 
                            className={this.state.passwordError
                                ? 'input-error input-empty' 
                                : 'input-empty'}
                            type="password" 
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            required/>                            
                            <label>Password</label>
                            <span>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container">
                            <Button type="submit" onClick={e => this.onSubmit(e)}> Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                            Remember me
                            <input 
                            type="checkbox" 
                            defaultChecked={this.state.checked} 
                            onChange={this.handleCheckbox}/>
                            <span className="checkmark" />
                        </label>
                        <Link to="/" className="need-help">
                            Need Help?
                        </Link>
                        <div className="bottom-form">
                            <img src={FBlogo} alt="facebook logo" />
                            <Link to="/" className="login-fb-text">
                                Login with Facebook
                            </Link>
                            <br /> <br />
                            <span style={{color:'#8a8a8a'}}>New to Netflix?</span> &nbsp;
                            <Link to="/" className="sign-up-text"> 
                            Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        );
    }
}

export default LoginForm;

// Form Container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 40rem;
        padding: 4rem;
        margin-bottom: 6rem;
    }

    .input-container {
        display: grid;
        grid-template-column: 1fr;
        margin-top: 1.1rem
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label {
        position: absolute;
        top: 0.625rem;
        left 1.25rem;
        poiner-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~label {
        top: 0.4375 rem;
        font-size: 0.7rem;
    }

    input:focus {
        ountline: none;
    }

    .input-error {
        border-bottom: 2px solid #db7302
    }

    // Checkbox
    .checkbox-container {
        padding-left: 1.5rem;
        position: relative;
        font-size: 0.9rem;
        color: #8a8a8a;
        cursor: pointer;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #8a8a8a;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top 0;
        border-radius: 0.1rem;
        position: absolute;
    }

    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 20%;
        transform: rotate(-45deg);
    }

    .need-help {
        text-decoration: none;
        color: #8a8a8a;
        font-size: 0.9rem;
        float: right;
    }

    //Bottom form
    .bottom-form img {
        width: 1.5rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }

    .login-fb-text {
        color: #8a8a8a;
        font-size: 0.9rem;
    }

    .bottom-form {
        position: absolute;
        margin-top: 4rem;

    }

    sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        font-weight: bold;
    }
`;

//Botton
const Button = styled.button`
    color: #fff;
    background: var(--main-red);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45)
    transition: opacity 0.2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1.2rem 0rem 0.5rem;
`;
