const GameById = async (id: string) => {
    const api_key = "5aca4c341b734d7d9467e33525e17719"; 
    const endpoint = `https://api.rawg.io/api/games/${id}?key=${api_key}`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch game data: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`Error fetching game by ID (${id}):`, error);
      return null; 
    }
  };
  
  export default GameById;
  