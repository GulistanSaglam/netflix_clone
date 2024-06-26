import React, { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from "../screens/SignUpScreen"

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <img
                    className='loginScreen__logo'
                    src='./images/netflix-logo.png'
                    alt=""
                />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__button'
                >Sign In</button>
                <div className='loginScreen__gradient' />
            </div>

            <div className='loginScreen__body'>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at my time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen__input'>
                            <form>
                                <input
                                    type='email'
                                    placeholder='Email Address' />
                                <button
                                    className='loginScreen__getStarted'
                                    onClick={() => setSignIn(true)}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}

export default LoginScreen