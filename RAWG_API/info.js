// Need to work on encapsulating key; not sure how to do yet successfully
const API_KEY = "";
const API_URL = "https://api.rawg.io/api/games?key=" + API_KEY;

async function fetchData(URL){
    try{
        const result = await fetch(API_URL);
        const games = await result.json();
        console.log(games);

    } 
    catch (error){
        console.log('Error fetching data:', error);
    }
}
