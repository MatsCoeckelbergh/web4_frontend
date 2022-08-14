
import axios from '../axios';
import { Response, Student } from '../types';


const login = async (student: string) => {
    const resp = await axios.post<Response>('/user/login', {user: student})
        if(resp.data.status==="success"){
            console.log("test")
            const response2= JSON.stringify(resp.data)
            const response3 = JSON.parse(response2)
            const response4 = response3["student"]
            sessionStorage.setItem("user", student)
            sessionStorage.setItem("studentStatus", response4["status"])
            
            window.location.replace("/overview")
        }
}


const getAllFriends= (username: string | null) => axios.get<Student[]>('/user/friends',{params: {user: username}});

const addFriend = (user: string | null, friend: string |null) => axios.post<Response>('/user/friends', {username: user, friendname: friend })


const statusUpdate = (statusInput: string ) => axios.put<Response>('/user/status', {user: sessionStorage.getItem("user"), status: statusInput})



const StudentService = {
    login,
    statusUpdate,
    getAllFriends,
    addFriend
};

export default StudentService;
