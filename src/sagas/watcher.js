import {takeLatest} from 'redux-saga/effects';
import  {loginSaga} from './login-saga';
import  {productSaga} from './product-saga';

export default function* watchSaga(){
    console.log("Watch Saga ===>");
    debugger
    yield takeLatest('LOGINUSER',loginSaga);
    yield takeLatest('GET_PROD',productSaga);
}