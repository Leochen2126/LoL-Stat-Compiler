import axios from "axios";
// TODO set up backend for this service to fetch game data from game codes
const API_URL = "http://localhost:3000/api/game-code/";

const getGame = (code) => {
    return "You fetched code: " + code;
    //return axios.get(API_URL + code);
};