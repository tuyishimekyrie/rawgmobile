

const Game = async () => {
const api_key = "5aca4c341b734d7d9467e33525e17719";


const result =  await fetch(`https://api.rawg.io/api/games?key=${api_key}`).then((response) => 
response.json()).catch((error) => error);
return result.results;
}

export default Game


