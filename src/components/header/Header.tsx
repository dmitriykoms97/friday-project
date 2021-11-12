import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css'
import {PATH} from "../RoutesOf";

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.navigation}>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.RECOVERY_PASSWORD}>Password Recovery</NavLink>
                <NavLink to={PATH.INPUT_NEW_PASSWORD}>Input New Password</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
            </div>
        </div>
    );
};

export default Header;