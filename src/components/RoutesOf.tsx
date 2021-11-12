import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from "./login/Login";
import Registration from "./registration/Registration";
import Profile from "./profile/Profile";
import RecoveryPassword from "./recovery-password/RecoveryPassword";
import InputNewPassword from "./input-new-password/InputNewPassword";
import ErrorNotFound from "./404notFound/ErrorNotFound";
import Test from "./test-superComponents/Test";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recoveryPassword',
    INPUT_NEW_PASSWORD: '/inputNewPassword',
    TEST: '/test',
}

function RoutesOf() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login />}/>
                <Route path={PATH.LOGIN} element={<Login />}/>
                <Route path={PATH.REGISTRATION} element={<Registration />}/>
                <Route path={PATH.PROFILE} element={<Profile />}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />}/>
                <Route path={PATH.INPUT_NEW_PASSWORD} element={<InputNewPassword />}/>
                <Route path={PATH.TEST} element={<Test />}/>

                <Route element={<ErrorNotFound />}/>
            </Routes>
        </div>
    )
}

export default RoutesOf