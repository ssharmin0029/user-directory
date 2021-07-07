import axios from 'axios';

const userURL = "https://randomuser.me/api/?results=100&nat=us";

export default {
    getUsers: function() {
        return axios.get(userURL);
    }
};