import React from 'react';
import {Redirect,Route} from 'react-router-dom';

class PrivateRoute extends React.Component{
    render(){
        return(
            localStorage.getItem('token') ?
                <div>
                <Route {...this.props}/>
                </div>                     :
                <Redirect to={'/home'}/>
        )
    }
};

export default PrivateRoute;
