import axios from 'axios';

export const loginService=async (credentials)=>{
    debugger;
    return await axios.post('http://localhost:3004/api/users/login1',credentials).then(({data})=>{
        return data;
    })
};

export const getProdService=()=>{
    debugger
    console.log("In fetch");
    return axios.get('http://localhost:3004/api/product/list',{
        // headers:{
        //     'x-auth':localStorage.getItem('token')
        // }
    }).then(({data})=>{
        console.log("In fetchdata=======>",data);
        return data;
    })
};