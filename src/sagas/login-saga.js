import {put,call} from 'redux-saga/effects';
import {loginService} from '../API/api';

export function* loginSaga({payload}){
    debugger
    console.log("Login Saga ===>",payload);
    try{
        const response=yield call(loginService,payload);
        debugger;
        yield [put({type:'LOGIN_USER',response})]
    }
    catch(err){
        yield [put({type:'LOGIN_ERROR',response:{}})]
    }
}