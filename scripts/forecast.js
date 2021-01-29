//storing the key in a string
const key = 'S7A2q9xE4lAi1WOUUx9GYxi7HnUyRKTP'; 

const getCity = async (city) => {
    //base url of api endpoint
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; 
    const query = `?apikey=${key}&q=${city}`;
    //returns a promise and resolves it
    const response = await fetch(base + query);
    //converting it to json
    const data = await response.json();
    
    //returning the first and closest match from the array
    return data[0];

}

getCity('toronto')
    .then(data => console.log(data))
    .catch(data => console.log(err));