import Login from './reducer-login'
import localStorage from 'mock-local-storage'
describe('Login reducer',()=>{
    const initstate = [];
    it('should handle initial state',()=>{
        expect(Login(initstate,{})).toEqual(initstate);
    });
    it('should handle LOGIN_USER',()=>{
        let action = {
            type:'LOGIN_USER',
            response:{"obj":{"token":'test'}}
        }
        expect(Login(initstate,action)).toEqual(action.response);
    })
});