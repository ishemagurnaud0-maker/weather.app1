const button= document.getElementById("get-weather-btn");
const select= document.getElementById("select");

const weatherIcon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

async function getWeather(city){
  try{
  const response= await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
  if(!response.ok){
    return "There is no weather forecast";
  }
   const data = await response.json();
   return data;
}
catch(error){
return console.log("The is an error:",error)
  return null;
  }
}
const showWeather=async(city)=>{
  const data= await getWeather(city);
  if(!data){
  return alert("Something went wrong, please try again later.")
  return;
  }
  weatherIcon.src=data.weather?.[0]?.icon??"";
  weatherIcon.alt=data.weather?.[0]?.descriptiom??"";
  mainTemp.textContent = `Temperature: ${data.main?.temp ?? "N/A"} °C`;
  feelsLike.textContent = `Feels like: ${data.main?.feels_like ?? "N/A"} °C`;
  humidity.textContent = `Humidity: ${data.main?.humidity ?? "N/A"} %`;

  wind.textContent = `Wind speed: ${data.wind?.speed ?? "N/A"} m/s`;
  windGust.textContent = `Wind gust: ${data.wind?.gust ?? "N/A"} m/s`;

  weatherMain.textContent = `Weather: ${data.weather?.[0]?.main ?? "N/A"}`;
  locationEl.textContent = `Location: ${data.name ?? "N/A"}`;

}
button.addEventListener("click",()=>{
  const city= select.value;
  if(!city){
    return;
  }
  else if(city=="Paris"){
alert("Something went wrong, please try again later")
  }
  else{
    showWeather(city);
  }
  
});