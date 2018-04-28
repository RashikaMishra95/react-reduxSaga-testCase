import {put,call} from 'redux-saga/effects';
import {getProdService} from '../API/api';

export function* productSaga({payload}){
    debugger
    console.log("Product Saga ===>",payload);
    try{
        const response=yield call(getProdService,payload);
        debugger;
        yield [put({type:'GETPRODUCTS',response})]
    }
    catch(err){
        yield [put({type:'PRODUCTS_ERROR',response:{}})]
    }
}