let search = document.getElementById("search");
let cityInput = document.getElementById("city");
let clouds = document.getElementById("clouds");
let Temp = document.getElementById("Temp");
let city_display = document.getElementById("city-display");
let coluds_des = document.getElementById("clouds-des");
let results_2 = document.getElementById("results-2");
let min_max = document.getElementById("min-max");
let temp2 = document.getElementById("temp2");
let humidity = document.getElementById("humidity");
let visibility = document.getElementById("visibility");
let lat_long = document.getElementById("lat-long");

search.addEventListener("click", async()=>{
    const city = cityInput.value;
    //api
    const api_key = "ENTER_YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    // console.log(data.main.temp);
    let results = document.getElementById("results");

    try{
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.log(data.main.temp);

    city_display.innerHTML = data.name;


    Temp.innerHTML = "Temperature<br><br>" + data.main.temp;
    Temp.style.border = "2px solid black";
    Temp.style.borderRadius = "10px";
    Temp.style.padding = "15px";

    clouds.innerHTML = data.weather[0].main + "<br>" + data.weather[0].description;
    results_2.style.borderRadius = "10px";
    clouds.style.padding = "5px";
    results_2.style.border = "2px solid black";


    // coluds_des.innerHTML = data.weather[0].description;

    //min-max
    min_max.innerHTML ="Max: " + data.main.temp_max + "°C<br>" +
    "Min: " + data.main.temp_min + "°C<br>" ;
    min_max.style.border = "2px solid black";
    min_max.style.borderRadius = "10px";
    min_max.style.padding = "30px";


    // humidity
    humidity.innerHTML = "Humidity <br>" + data.main.humidity + "%";
    humidity.style.border = "2px solid black";
    humidity.style.borderRadius = "10px";
    humidity.style.padding = "30px";
    

    // Visibility
    visibility.innerHTML = "Visibility<br>" + data.visibility;
    visibility.style.border = "2px solid black";
    visibility.style.borderRadius = "10px";
    visibility.style.padding = "30px";


    // latitude-longitude
    lat_long.innerHTML = "Lat:" + data.coord.lat + "<br>" + "Long:" + data.coord.lon;
    lat_long.style.border = "2px solid black";
    lat_long.style.borderRadius = "10px";
    lat_long.style.padding = "30px";


    Temp.classList.add("info-box");
    min_max.classList.add("info-box");
    humidity.classList.add("info-box");
    visibility.classList.add("info-box");
    lat_long.classList.add("info-box");
    results_2.classList.add("info-box");



    } catch (error){
         city_display.innerHTML = "Invalid City";
    }
    
})