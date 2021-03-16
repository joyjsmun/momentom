const weatherContainer = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '6ab68981aee2954e9ffb336b6a2dfc02';

function getWeather(lat,lon){
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
   .then(function(response){
       return response.json()
       }).then(function(json){
          const temperature = json.main.temp;
          const place = json.name;
          weatherContainer.innerText = `${temperature}@ ${place}`;
       })
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoScuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){KeyboardEvent,n
    console.log("Can't access geo location")
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoScuccess,handleGeoError)
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        
    }

}


function init(){
    loadCoords()
}

init()