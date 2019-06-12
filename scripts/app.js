const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const weathericon = document.querySelector('.icon img')
const updateUI = data => {
// const cityDets = data.cityDetails;
// const weather = data.weather;

// destructuring (instead of creating variable like above you can directly assign data to variable if the properties name are same)
const {cityDetails, weather} = data;

details.innerHTML =`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;
if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
}
weather.IsDayTime ? time.setAttribute("src","img/day.svg") : time.setAttribute("src","img/night.svg")
weathericon.setAttribute("src",`img/icons/${weather.WeatherIcon}.svg`)
}
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    console.log(cityDetails.Key);
    
    const weather = await getLocation(cityDetails.Key)
    console.log(weather);
    
    return{cityDetails,weather}
    
}

// add event listerner to the location input field
cityForm.addEventListener('submit', e =>{
    e.preventDefault();

// Get city value
const city = cityForm.city.value.trim();
cityForm.reset();

updateCity(city)
    .then(data => {updateUI(data);
    })
    .catch(err => { console.log(err);
    })
})