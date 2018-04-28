import React from 'react';
import {Redirect,Route} from 'react-router-dom';
const PublicRoute=(props)=>{
    return(
        !localStorage.getItem('token') ?
            <Route {...props}/>:
                    <Redirect to={'/afterLogin'}/>
    )
};
export default PublicRoute;