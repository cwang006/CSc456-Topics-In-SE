const { fetchAPIData, handleGameData } = require('./info')
const API_URL = "https://api.rawg.io/api/games?key=8ad08da8555a47329f90c369942bb69e";

test('checking server response', async () => {
    const response = await fetchAPIData(API_URL);
    // Check if the response is not null
    expect(response).not.toBeNull();
});

test('verifying API key response since you need a key to run', async () =>{
    const response = await fetchAPIData('https://api.rawg.io/api/games');
    expect(response).toBeUndefined();
});

test('testing handleGameData output', () => {
    console.log = jest.fn();
    const mockGameData = {
        id: 1, 
        name : 'Game 1', 
        released : '2000-01-01',
        tags : [{ name : 'tag1' }, { name : 'tag2' }] 
    }
    handleGameData(mockGameData);
    expect(console.log).toHaveBeenCalledWith(`Id: ${mockGameData.id}`);
    expect(console.log).toHaveBeenCalledWith(`Name: ${mockGameData.name}`);
    expect(console.log).toHaveBeenCalledWith(`Released: ${mockGameData.released}`);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Tags:'));
});
