import sagaHelper from 'redux-saga-testing';
import {loginSaga} from './login-saga'
import { call, put } from 'redux-saga/effects';
import moxios from 'moxios'


const api = jest.fn();
const someAction = () => ({type:'LOGINUSER',payload:{}});

describe('login-saga',()=>{

   const it = sagaHelper(loginSaga());

   it('call api',result=>{
      expect(result).toEqual(call(api))
   });


});