// Need to work on encapsulating key; not sure how to do yet successfully
const API_URL = "https://api.rawg.io/api/games?key=8ad08da8555a47329f90c369942bb69e";

function fetchData(URL){
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    const games_Listed = data.results;
    let count = 0;

    games_Listed.forEach(game => {
      const game_name = game.name;
      const release_date = game.released;
      const tags = game.tags.map(tag => tag.name);

      count += 1;

      console.log(`Name: ${game_name}`);
      console.log(`Released: ${release_date}`);
      console.log(`Tags: ${tags}`);
      console.log("\n");
    });

    console.log(`Total Games: ${count}`);
  })
  .catch(error => console.error('Error fetching data:', error));
}

fetchData(API_URL);