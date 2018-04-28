import React from 'react';
import PrivateRoute from '../routes/privateRoute';
import PublicRoute from '../routes/publicRoute';
import AfterLogin from './afterLogin';
import Login from '../container/login';
import Home from './home';
import SignUp from '../container/signUp'
import {NavLink,Switch} from 'react-router-dom';

import '../App.css';
export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="App-header">
                    <img src={require('../logo.svg')} height="100px" width='100px' alt={'Image1 tag'}/>Redux Saga & Test Case
                        <NavLink style={{"float":"right","marginTop":"25px"}} to="/login">Sign In</NavLink>
                        <NavLink style={{"float":"right","marginTop":"25px","marginRight":"35px"}}className="link" to="/signup">Sign Up</NavLink>
                </div>
                <div>
                    <Switch>
                        <PublicRoute  exact path="/" component={Home}/>
                        <PublicRoute exact  path="/login" component={Login}/>
                        <PublicRoute exact  path="/signup" component={SignUp}/>
                        <PrivateRoute  path="/afterLogin" component={AfterLogin}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
