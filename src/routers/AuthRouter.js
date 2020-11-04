import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import RestorantLogo from '../img/RestorantLogo.png';

export const AuthRouter = () => {
    return (
        <div>
            <img className="auth__logo" src={RestorantLogo} alt="Logo"/>
        <div className="auth__main">
            
            <div className="auth__box-container">

                <Switch>

                    <Route
                    exact
                    path="/auth/login"
                    component={ LoginScreen }
                    />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </div>
        </div>
    )
}
