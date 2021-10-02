import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4076e1db-ce97-44d8-b31d-4bf98670e9f8"
    }
});
export const userAPI = {
    getUsers(PageNum = 1, pageSize = 10) {
        return instance.get(`users?page=${PageNum}&count=${pageSize}`)
            .then(response => response.data);
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getProfile(userId) {
        console.warn("Please use profileAPI.getProfile")
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI={
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){

        return instance.put(`profile/status`,{status: status});
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe=false){
        return instance.post(`/auth/login`,{email, password, rememberMe})
    },
    logout(email, password, rememberMe=false){
        return instance.delete(`/auth/login`,{email, password, rememberMe})
    }

}
