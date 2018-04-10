import axios from 'axios';
//import Constants from '../constants';

export default function fetchUsers(){
    const request = axios('https://jsonplaceholder.typicode.com/users');
    return{
        type: "FETCH_USERS",
        payload:request
    }

}
