import React from "react";
import '../style/header.css';
import logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import PhoneLogin from "../pages/PhoneLogin";

const Header = () => {
    const history = useHistory();
    return (
        <div className="App">
            <div className="top-nav">
                <a onClick={() => history.push('/')} style={{cursor: 'pointer'}}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
            <PhoneLogin />
        </div>
    );
}
export default Header