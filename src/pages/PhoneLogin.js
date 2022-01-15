import React, {useState} from "react";
import '../style/phone_login.css';
import {Button, Input} from "reactstrap";
import {useHistory} from "react-router-dom";
import firebase from '../firebase'
import {MdOutlineArrowForwardIos} from "react-icons/md";
import MainPage from "./MainPage";

// Ref: https://firebase.google.com/docs/auth/web/phone-auth?authuser=0#web-version-8_1
class PhoneLogin extends React.Component {
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                this.onSignInSubmit();
                console.log("Recaptcha verified")
            },
        });
    }

    onSignInSubmit = (e) => {
        e.preventDefault()
        this.configureCaptcha()
        const phoneNumber = "+84" + this.state.mobile;
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("Submit phone number: success")
            }).catch((error) => {
            console.log("Submit phone number: failure")
        });
    }
    onSubmitOTP = (e) => {
        e.preventDefault()
        const { history } = this.props
        const code = this.state.otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            console.log(JSON.stringify(result.user))
            alert("User is verified.")
            console.log("Submit OTP: success")
        }).catch((error) => {
            console.log("Submit OTP: failure")
        });
    }

    render() {
        return (
            <div>
                <div className="phone-login-page">
                    <h2 style={{
                        fontFamily: 'Helvetica, serif',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >Login Form</h2>
                    <form className='form-input' onSubmit={this.onSignInSubmit}>
                        <div id='sign-in-button'></div>
                        <Input
                            type='number'
                            name='mobile'
                            placeholder='Phone number'
                            required
                            onChange={this.handleChange}
                        />
                        <Button type='submit'>
                            <MdOutlineArrowForwardIos size='25px' color='#fff' />
                        </Button>
                    </form>
                    <h2 style={{
                        fontFamily: 'Helvetica, serif',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >OTP Authentication</h2>
                    <form className='form-input' onSubmit={this.onSubmitOTP}>
                        <Input
                            type='number'
                            name='otp'
                            placeholder='OTP number'
                            required
                            onChange={this.handleChange}
                        />
                        <Button type='submit'>
                            <MdOutlineArrowForwardIos size='25px' color='#fff' />
                        </Button>
                    </form>
                </div>
                <div className='main-page'>
                    <MainPage />
                </div>

            </div>
        );
    }
}
export default PhoneLogin