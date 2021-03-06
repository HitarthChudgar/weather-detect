const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')

//update the ui
const updateUI = (data) => {
    //destructuring for cleaner looking code
    const {cityDet, weather} = data;

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

    //update night/day and icons
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // }else{
    //     timeSrc = 'img/night.svg'
    // }
    time.setAttribute('src', timeSrc);

    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

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
    updateCity(city).then(data => updateUI(data)).catch(err => console.log(err));
})