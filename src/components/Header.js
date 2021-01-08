import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {thinRight} from 'react-icons-kit/entypo/thinRight'

class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} alt="Logo"/>
                    <NavLink to="/login" className="signIn-btn"> Sign In </NavLink>
                </div>

                {/* Call to Action */}
                <div className="header-content">
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
                </div>
                <div className="call-to-action-content">
                    <SubTitle2>Ready to watch? Enter your email to create or restart your membership.</SubTitle2>
                </div>
                <div className="call-to-action">
                    <input className="email-input" type="email" data-uia="field-email" autocomplete="email" maxlength="50" minlength="5" style={{fontSize:28}}/>
                    <Link to="/login" className="main-offer-btn">
                    GET STARTED
                    <Icon className="Icon" icon={thinRight} size={20} />
                    </Link>
                </div>


            </HeaderComponent>
        );
    }
}

export default Header;

//Logo
const Logo = styled.img`
    width: 10rem;
    height: 2.3rem;
    position: left;
    top: 25%;
    left: 50%;
    transform: translate(25%, 50%);
`;

// Header Container
// float: right added by me to position button to the right
const HeaderComponent = styled.div`
    .signIn-btn {
        right: 0;
        float: right;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weigt: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: abosolute;
        translate: transform(-50%, -50%);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover {
            background: var(--main-red-hover);
        }
    }

    // header top
    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    // header content
    .header-content {
        width: 40%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    .call-to-action-content {
        width: 60%;
        position: relative;
        margin: 0.3rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    .call-to-action {
        width: 60%;
        position: relative;
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: row;
        flex-wrap: wrap;
        z-index: 1;
    }

    .email-input {
        width: 450px;
        height: 65px;
        position: relative;
        // margin: 4.5rem auto 0;
        display: flex;
        // justify-content: center;
        // align-content: center;
        text-align: left;
        z-index: 1;
    }

    // main offer btn
    .main-offer-btn {
        width: 250px;
        display:inline-block;
        position: relative;
        background: var(--main-red);
        border: none;
        outline: none;
        // margin: 0 30%;
        padding: 1rem;
        font-size: 1.625rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,0.45);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover {
            background: var(--main-red-hover);
        }
    }

    .Icon svg {
        // vertical-align: ;
        margin-left: 0.8rem;
    }
`;


// Main Title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1em;
`;

// Subtitle
const SubTitle = styled.h2`
    margin: 0 0 1.875rem;
    font-size：2rem;
    font-weight: 500;
    line-height: 1.25em;
`;

// Subtitle2
const SubTitle2 = styled.h3`
    margin: 0 0 1.375rem;
    font-size：1.25rem;
    font-weight: 350;
    line-height: 1em;
`;