export default (state=[],action)=>{
    switch (action.type){
        case 'GETPRODUCTS':
            return action.response;
        default:
            return state;
    }
}
