import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginAction} from '../actions';
import {push} from 'react-router-redux';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{},
            error:""
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("Props =========> ",nextProps.loginRes);
        if(nextProps.loginRes){
                this.props.history.push('/afterLogin');
            this.props.goToAdmin();
        }
        else{
            this.setState({error:"Invalid email or password"})
        }
    }
    handleChange=(e)=>{
        //console.log("Target===>", e.target.value);
        const {name,value}=e.target;
        const {data}=this.state;
        data[name]=value;
        this.setState({
            data
        })
    };
    handleLogin=(e)=>{
        e.preventDefault();
        console.log("State.data ====> ", this.state.data);
        this.props.loginAction(this.state.data);
    };
    render() {
        const {data}=this.state;
        return (
            <div className={'col-md-3'} align={'center'} style={{"left":"33%"}}>
           <form className={'jumbotron'}>
               <div className={'form-group'}>
                   <input type={'email'}
                          value={data.email}
                          onChange={this.handleChange}
                          className={'form-control'}
                          id={'email'}
                          name={'email'}
                          placeholder={'Enter Email Id '}/>
               </div>
               <div className={'form-group'}>
                   <input type={'password'}
                          value={data.password}
                          onChange={this.handleChange}
                          className={'form-control'}
                          id={'password'}
                          name={'password'}
                          placeholder={'Enter Password '}/>
               </div>
               <div className={'form-group'}>
               <button className={'btn btn-primary'}
                       onClick={this.handleLogin}
                       type={'submit'}
                        >LOGIN</button>
           </div>
               <div className={'form-group'}>
                   <div className={'form-group'}>
                       <NavLink style={{"float":"center","marginTop":"35px"}} to="/signup">Register Now</NavLink>
                   </div>
               </div>
           </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return (
        {
            loginRes:state.auth
        }
    )
};
const matchDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        loginAction,goToAdmin:()=>push('/afterLogin')
    },dispatch)
};
export default connect(mapStateToProps,matchDispatchToProps)(Login);
