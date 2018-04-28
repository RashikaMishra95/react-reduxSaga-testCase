export const loginAction=(credentials)=>{
   debugger;
    console.log("In Action ===>",credentials);
    return({
        type:'LOGINUSER',
        payload:credentials
    })
};
export const getProductAction=(prods)=>{
    debugger;
    console.log("In ProdAction ===>");
    return({
        type:'GET_PROD',
        payload:prods
    })
};