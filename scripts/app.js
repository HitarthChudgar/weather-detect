const cityForm = document.querySelector('form');

//get the city
const updateCity = async (city) => {
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return{
        cityDet: cityDet,
        weather: weather
    };
}

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city
    const city = cityForm.city.value.trim();
    cityForm.reset()

    //update ui with new city getting input from the form
    updateCity(city).then(data => console.log(data)).catch(err => console.log(err));
})