import * as axios from 'axios';

const instance=axios.create({
    withCredentials: true,
    baseUrl:'https://social-network.samuraijs.com/api/1.1/',
    headers:{
        'API-KEY': "542e5624-d078-47c7-afd3-5ec67eab6ce2"
    }
});
//что это
export const usersAPI = {
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data;
            });
    },
    getProfile(userId){
        return instance.get(`profile/`+userId);
    }
}

export const authAPI={
    me(){
        return  instance.get(`auth/me`)
    }
}