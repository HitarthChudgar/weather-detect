const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')

//update the ui
const updateUI = (data) => {
    const cityDet = data.cityDet;
    const weather = data.weather;

    //update the details
    details.innerHTML = `
        <h5 class="my-3">${cityDet.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    //removing the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

//get the city
const updateCity = async (city) => {
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);

    return{
        cityDet, weather //assuming property and value are same
    };
}

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city
    const city = cityForm.city.value.trim();
    cityForm.reset()

    //update ui with new city getting input from the form
    updateCity(city).then(data => updateUI(data)).catch(err => updateUI(data));
})