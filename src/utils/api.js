import axios from "axios";

const api = {
  playerSearch: function (name) {
    let name_part = name.trim();
    if (!name_part.includes(" ")) {
      name_part = `${name}%25`;
    } else {
      name_part = `${name}`;
    }
    var config = {
      method: 'get',
      url: `https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${name_part}'`,
      headers: { 
        'x-rapidapi-host': 'mlb-data.p.rapidapi.com', 
        'x-rapidapi-key': '', 
        'Content-Type': 'application/json'
      }
    };
    
   return axios(config);
  }
};

export default api