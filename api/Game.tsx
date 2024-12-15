import React from 'react'

const Game = async () => {
const api_key = "5aca4c341b734d7d9467e33525e17719";


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ce4c67c259msh01c158f8d136488p14c7b0jsn2c26e938b5d7',
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
    }
};

const result =  await fetch(`https://api.rawg.io/api/games?key=${api_key}`).then((response) => 
response.json()).catch((error) => error);
return result.results;
}

export default Game


