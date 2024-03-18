import { fetchData } from "./info";

//Expected format of output 
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ key: 'value' }), 
    })
);

it("returns a JSON response", async () => {
    const returned_data = await fetchData("https://api.rawg.io/api/games?key=8ad08da8555a47329f90c369942bb69e");
    const f = jest.fn()
    expect(f).toHaveBeenCalledWith(returned_data)
})