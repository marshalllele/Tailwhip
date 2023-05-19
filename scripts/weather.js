var message = "Reload the page and try again";

var weather = {
    apiKey: "2c2d1973822358facd2ed31c41c8d4fc",
    fetchWeather: function(lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        var windDir;

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like } = data.main;
        const { speed, deg } = data.wind;

        if (deg >= 337.5 || deg < 22.5) {
            windDir = "north";
        } else if (deg >= 22.5 && deg < 67.5) {
            windDir = "north-east";
        } else if (deg >= 67.5 && deg < 112.5) {
            windDir = "east";
        } else if (deg >= 112.5 && deg < 157.5) {
            windDir = "south-east";
        } else if (deg >= 157.5 && deg < 202.5) {
            windDir = "South";
        } else if (deg >= 202.5 && deg < 247.5) {
            windDir = "south-west";
        } else if (deg >= 247.5 && deg < 292.5) {
            windDir = "west";
        } else {
            windDir = "north-west";
        }

        console.log(data);
        document.getElementById('city').innerText = "You're in " + name;
        document.getElementById('temp').innerText = "It's currently " + Math.round(temp) + " °F but feels like " + Math.round(feels_like) + " °F";
        document.getElementById('humidity').innerText = humidity + "% Humidity";
        document.getElementById('wind').innerText = "There is a " + Math.round(speed) + " MPH wind coming out of the " + windDir;
    }
};

function success(position) {
    console.log(position);
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;

    weather.fetchWeather(latitude, longitude);
}

function fail(message) {
    document.getElementById('temp').textContent = message;
    console.log(message.code);
}

if (!sessionStorage.getItem('longitude') && !sessionStorage.getItem('latitude')) {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
        document.getElementById('temp').textContent = 'Checking location...';
    } else {
        document.getElementById('temp').textContent = 'Not able to get location...';
    }
} else {
    weather.fetchWeather(sessionStorage.getItem('longitude'), sessionStorage.getItem('latitude'));
}
