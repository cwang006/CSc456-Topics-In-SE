// Need to work on encapsulating key; not sure how to do yet successfully
const API_KEY = "";
const API_URL = "https://api.rawg.io/api/games?key=" + API_KEY;

async function fetchAPIData(URL){
    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error('Bad Network Response');
        }

        const data = await response.json();
        const games_Listed = data.results; 
        games_Listed.forEach(game => {
            handleGameData(game); 
            // Pass each game to handleGameData
        });

    } catch (error){
        console.error('Error: ', error);
    }
}

function handleGameData(game){
    const game_id = game.id;
    const game_name = game.name;
    const release_date = game.released;
    const tags = game.tags.map(tag => tag.name);
    
    console.log(`Id: ${game_id}`);
    console.log(`Name: ${game_name}`);
    console.log(`Released: ${release_date}`);
    console.log(`Tags: ${tags}`);
    console.log("\n");
}

//fetchAPIData(API_URL);
module.exports = { fetchAPIData, handleGameData };
