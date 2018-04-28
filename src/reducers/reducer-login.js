export default (state=[],action)=>{
    //debugger;
    switch (action.type){
        case 'LOGIN_USER':
            debugger;
            console.log("Login Reducer  ===>",action.response);
           localStorage.setItem('token',action.response.obj.token);
            return action.response;
        default:
            return state;
    }
}
