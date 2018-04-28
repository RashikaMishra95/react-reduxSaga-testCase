import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class SignUp extends Component {
    render() {
        return (
            <div className={'col-md-3'} align={'center'} style={{"left":"33%"}}>
                <form className={'jumbotron'}>
                    <div className={'form-group'}>
                        <input type={'email'}  className={'form-control'} id={'username'} placeholder={'Enter Email Id '}/>
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} className={'form-control'} id={'email'} placeholder={'Enter Email '}/>
                    </div>
                    <div className={'form-group'}>
                        <input type={'password'} className={'form-control'} id={'pwd'} placeholder={'Enter Password '}/>
                    </div>
                    <div className={'form-group'}>
                        <input type={'text'} className={'form-control'} id={'contact'} placeholder={'Enter Contact '}/>
                    </div>
                    <div className={'form-group'}>
                        <button className={'btn btn-primary'} type={'submit'}>REGISTER NOW</button>
                    </div>
                    <div className={'form-group'}>
                        <NavLink style={{"float":"center","marginTop":"35px"}} to="/login">Already Have an Account ?</NavLink>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignUp;