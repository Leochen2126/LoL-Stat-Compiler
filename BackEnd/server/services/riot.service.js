import axios from "axios";

//example url
const API_URL = "https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4442533965?api_key=RGAPI-b73e0c69-d38b-4436-b01c-94d8c6c705f9";

const getMatchDetails = () => {
    return axios.get(API_URL + apiKey);
};

export default RiotService; 