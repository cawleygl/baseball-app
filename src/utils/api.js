import axios from "axios";

const api = {
  playerSearch: function (name) {
    let name_part = name.trim();
    if (!name_part.includes(" ")) {
      name_part = `${name_part}%25`;
    }
    var config = {
      method: 'get',
      url: `https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${name_part}'`,
      headers: { 
        'x-rapidapi-host': 'mlb-data.p.rapidapi.com', 
        'x-rapidapi-key': '57e5dce244msh89bb79ca2ceb6d6p1f5460jsn8aa022ab1847',
        'Content-Type': 'application/json'
      }
    };
   return axios(config);
  },
  playerInfo: function (id) {
    console.log(id);
    var config = {
      method: 'get',
      url: `https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&player_id=${id}`,
      headers: { 
        'x-rapidapi-host': 'mlb-data.p.rapidapi.com', 
        'x-rapidapi-key': '57e5dce244msh89bb79ca2ceb6d6p1f5460jsn8aa022ab1847',
        'Content-Type': 'application/json'
      }
    };
   return axios(config);
  }

};

export default api
