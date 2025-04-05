const submitbtn = document.querySelector("#submitBtn");
const city = document.querySelector("#value");
const validate = () => {
    if (city.value === "") {
        alert("Please Enter city");
    } else {
        return true;
    }

}

const GetWeather = () => {
    let value = city.value;
    let Url = `https://goweather.xyz/weather/${value}`
    let p = fetch(Url);
    p.then((response) => {
        return response.json()
    }).then((data) => {
        temp.innerHTML = data.temperature;
        temp1.innerHTML = data.temperature;
        temp2.innerHTML = data.temperature;
        temp3.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        wind1.innerHTML = data.wind;
        wind2.innerHTML = data.wind;
        wind3.innerHTML = data.wind;
        desc.innerHTML = data.description;
        desc1.innerHTML = data.description;
        desc2.innerHTML = data.description;
        desc3.innerHTML = data.description;
        console.log(data);
    })
}


async function dubaiForecast() {
    
    let apiUrl = "https://goweather.xyz/weather/dubai";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {
 console.log(data)
        const day1 = data.forecast[0];
        day1_temp.innerHTML= day1.temperature;
        day1_wind.innerHTML = day1.wind;
       
        const day2 = data.forecast[1];
        day2_temp.innerHTML = day2.temperature;
        day2_wind.innerHTML= day2.wind;
       
        const day3 = data.forecast[2];
        day3_temp.innerHTML = day3.temperature;
        day3_wind.innerHTML= day3.wind;
        

    });
};

async function americaForecast() {
    
    let apiUrl = "https://goweather.xyz/weather/dubai";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {
 console.log(data)
        const day1 = data.forecast[0];
        day1_temp.innerHTML= day1.temperature;
        day1_wind.innerHTML = day1.wind;
       
        const day2 = data.forecast[1];
        day2_temp.innerHTML = day2.temperature;
        day2_wind.innerHTML= day2.wind;
       
        const day3 = data.forecast[2];
        day3_temp.innerHTML = day3.temperature;
        day3_wind.innerHTML= day3.wind;
        

    });
};


async function americaForecast() {
    
    let apiUrl = "https://goweather.xyz/weather/america";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {
 console.log(data)
        const day1 = data.forecast[0];
        aday1_temp.innerHTML= day1.temperature;
        aday1_wind.innerHTML = day1.wind;
       
        const day2 = data.forecast[1];
        aday2_temp.innerHTML = day2.temperature;
        aday2_wind.innerHTML= day2.wind;
       
        const day3 = data.forecast[2];
        aday3_temp.innerHTML = day3.temperature;
        aday3_wind.innerHTML= day3.wind;
        

    });
};

async function chinaForecast() {
    
    let apiUrl = "https://goweather.xyz/weather/china";
    let promise = fetch(apiUrl);
    promise.then((response) => {
        return response.json();
    }).then((data) => {
 console.log(data)
        const day1 = data.forecast[0];
        cday1_temp.innerHTML= day1.temperature;
        cday1_wind.innerHTML = day1.wind;
       
        const day2 = data.forecast[1];
        cday2_temp.innerHTML = day2.temperature;
        cday2_wind.innerHTML= day2.wind;
       
        const day3 = data.forecast[2];
        cday3_temp.innerHTML = day3.temperature;
        cday3_wind.innerHTML= day3.wind;
        

    });
};





submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    GetWeather()
    document.getElementById("weatherAbout").innerHTML = `${city.value.toUpperCase()}`
})



dubaiForecast();
americaForecast();
chinaForecast();