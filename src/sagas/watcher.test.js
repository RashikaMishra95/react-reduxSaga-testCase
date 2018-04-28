import sagaHelper from 'redux-saga-testing';
import watchSaga from './watcher'
import { call, put } from 'redux-saga/effects';
import moxios from 'moxios'


const LOGINUSER = jest.fn();
const someAction = () => ({type:'LOGIN_USER',p});


describe('Sample testing saga',()=>{

    const it = sagaHelper(watchSaga());

    it('Call LOGINUSER',result => {
        console.log(result);
    });

});