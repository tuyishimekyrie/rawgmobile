export async function getHotels() {
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=1377073&locale=en-gb';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ce4c67c259msh01c158f8d136488p14c7b0jsn2c26e938b5d7',
            'x-rapidapi-host': 'booking-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        

        console.log("API Result:", result);
        
        return result;
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return null; 
    }
}
