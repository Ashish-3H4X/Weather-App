const submitbtn = document.querySelector("#submitBtn");
const city = document.querySelector("#value");
const validate = () => {
    if (city.value === "") {
        alert("Please Enter city");
    } else {
        return true;
    }

}
const GetWeather = async () => {
    try {
        let value = city.value;
        let Url = `https://goweather.xyz/weather/${value}`;
        let response = await fetch(Url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        } else if (!response.status) {
            throw new Error("Failed to fetch the weather statu")
        };

        let data = await response.json();

        temp.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        desc.innerHTML = data.description;

        const day1 = data.forecast[0];
        const day2 = data.forecast[1];
        const day3 = data.forecast[2];

        day1Temp.innerHTML = day1.temperature;
        day2Temp.innerHTML = day2.temperature;
        day3Temp.innerHTML = day3.temperature;

        day1wind.innerHTML = day1.wind;
        day2wind.innerHTML = day2.wind;
        day3wind.innerHTML = day3.wind;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong! Please check the city name or try again later.");
    }
};



async function dubaiForecast() {

    let apiUrl = "https://goweather.xyz/weather/dubai";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {

        const day1 = data.forecast[0];
        day1_temp.innerHTML = day1.temperature;
        day1_wind.innerHTML = day1.wind;

        const day2 = data.forecast[1];
        day2_temp.innerHTML = day2.temperature;
        day2_wind.innerHTML = day2.wind;

        const day3 = data.forecast[2];
        day3_temp.innerHTML = day3.temperature;
        day3_wind.innerHTML = day3.wind;


    });
};

async function americaForecast() {

    let apiUrl = "https://goweather.xyz/weather/dubai";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {

        const day1 = data.forecast[0];
        day1_temp.innerHTML = day1.temperature;
        day1_wind.innerHTML = day1.wind;

        const day2 = data.forecast[1];
        day2_temp.innerHTML = day2.temperature;
        day2_wind.innerHTML = day2.wind;

        const day3 = data.forecast[2];
        day3_temp.innerHTML = day3.temperature;
        day3_wind.innerHTML = day3.wind;


    });
};
async function americaForecast() {

    let apiUrl = "https://goweather.xyz/weather/america";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {

        const day1 = data.forecast[0];
        aday1_temp.innerHTML = day1.temperature;
        aday1_wind.innerHTML = day1.wind;

        const day2 = data.forecast[1];
        aday2_temp.innerHTML = day2.temperature;
        aday2_wind.innerHTML = day2.wind;

        const day3 = data.forecast[2];
        aday3_temp.innerHTML = day3.temperature;
        aday3_wind.innerHTML = day3.wind;


    });
};

async function chinaForecast() {

    let apiUrl = "https://goweather.xyz/weather/china";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {

        const day1 = data.forecast[0];
        cday1_temp.innerHTML = day1.temperature;
        cday1_wind.innerHTML = day1.wind;

        const day2 = data.forecast[1];
        cday2_temp.innerHTML = day2.temperature;
        cday2_wind.innerHTML = day2.wind;

        const day3 = data.forecast[2];
        cday3_temp.innerHTML = day3.temperature;
        cday3_wind.innerHTML = day3.wind;


    });
};

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    GetWeather()
    let cityName = city.value;
    document.getElementById("weatherAbout").innerHTML = `${cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()}`
});
dubaiForecast();
americaForecast();
chinaForecast();