let search = document.getElementById("search");
let cityInput = document.getElementById("city");
let clouds = document.getElementById("clouds");
let Temp = document.getElementById("Temp");
let city_display = document.getElementById("city-display");
let coluds_des = document.getElementById("clouds-des");
let results_2 = document.getElementById("results-2");

search.addEventListener("click", async()=>{
    const city = cityInput.value;
    //api
    const api_key = "ENTER_YOUR API KEY";
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
    Temp.style.padding = "20px";

    clouds.innerHTML = data.weather[0].main;
    results_2.style.borderRadius = "10px";
    results_2.style.padding = "10px";
    results_2.style.border = "2px solid black";


    coluds_des.innerHTML = data.weather[0].description;


    } catch (error){
         city_display.innerHTML = "Invalid City";
    }
    
})