import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../container/login';
import {MemoryRouter} from 'react-router-dom';
import 'mock-local-storage';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import  createHistory from 'history/createBrowserHistory';
const initialState = {};
const mockStore = configureStore();
const history=createHistory();
let store;
Enzyme.configure({adapter: new Adapter()});

const props={
    history:{push:jest.fn()},
    goToAdmin:jest.fn()
}
describe('Login Component',()=>{
    let component,inst,login;

    beforeEach(()=>{

        store = mockStore(initialState)
        component=mount(<Provider store={store}><ConnectedRouter history={history}><Login {...props}/></ConnectedRouter></Provider>);
        login = component.find('Login');
        inst=login.instance();
    })
    it('Login component should render without error',()=>{
       /* const expectedhtml='<div class="col-md-3" align="center" style="left: 33%;"><form class="jumbotron"><div class="form-group"><input type="email" class="form-control" id="email" name="email" placeholder="Enter Email Id " value=""></div><div class="form-group"><input type="password" class="form-control" id="password" name="password" placeholder="Enter Password " value=""></div><div class="form-group"><button class="btn btn-primary" type="submit">LOGIN</button></div><div class="form-group"><div class="form-group"><a style="float: center; margin-top: 35px;" aria-current="false" href="/signup">Register Now</a></div></div></form></div>';
        console.log(component.html());

        expect(component.html()).toEqual(expectedhtml);*/
    })
    // it('renders email input',()=>{
    //     expect(shallow(<Login/>).find("#email").length).toEqual(1)
    // })
    // it('renders password input',()=>{
    //     expect(shallow(<Login/>).find("#password").length).toEqual(1)
    // })
    // it('should render Login',()=>{
    //     const loginButton=component.find('.login-btn');
    //     expect(loginButton).toHaveLength(1)
    //
    //     loginButton.simulate('click')
    //
    //     inst.setState({ user: {email: "abc@gmail.com", password: "abc"},error:'Invalid email or password',success:'Successfully Login'});
    //
    //     expect(inst.state.user.email).toEqual('abc@gmail.com');
    //     expect(inst.state.user.password).toEqual('abc');
    //     expect(inst.state.user.password.length).toEqual(4);
    //
    //     expect(inst.state.error).toEqual("Invalid email or password");
    //
    // })
    //

    it('componentWillReceiveProps',()=>{
        let nextProps = {
            loginRes:false
        }
        inst.componentWillReceiveProps(nextProps);
        expect(inst.state.error).toEqual("Invalid email or password");
        nextProps.loginRes = true;
        inst.componentWillReceiveProps(nextProps);
        expect(props.history.push).toHaveBeenCalledWith("/afterLogin");
    })

})