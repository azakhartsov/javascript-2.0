// task 1 --------------------
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "052b07b55933b46ce83c5da7d0f4d4f8"
}

const cities = {
    2643743 : 'London',
    2147714 : 'Sydney',
    1850147 : 'Tokyo',
    5368361 : 'Los Angeles'
}

populateCities();

function populateCities() {
    let out = '';

    for (let key in cities) {
        let option = document.createElement('option');
        option.innerHTML = cities[key];
        option.classList.add('cities');
        option.setAttribute('value',key);
        out += document.querySelector('#city').appendChild(option);
    }
    out;
}


function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.price').innerHTML = `Temperature: ${Math.round(data.main.temp)} &deg`;
    document.querySelector('.disclaimer').innerHTML = data.weather[0]['description'];
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity} %`;
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;