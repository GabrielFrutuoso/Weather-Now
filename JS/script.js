const apiKey = '17d1e18b3014f76d9234131df09aadef'
const unsplashApi = 'https://source.unsplash.com/1600x900/?' 

//get the divs
const card = document.querySelector('.card')
const infos = document.querySelector('.infos')
const msg = document.querySelector('.msg')
const cityName = document.querySelector('.city-name')
const countryFlag = document.querySelector('.country-flag')
const degrees = document.querySelector('.degrees')
const condition = document.querySelector('.condition')
const humidity = document.querySelector('.humidity')

//get input
const form = document.querySelector('.form')
const searchCity = document.querySelector('#searchCity')

const fetchWeather = async (city)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`)
    const data = await response.json()
    return data
    
}

const getWeather = async (city)=>{
    const data = await fetchWeather(city)
    const graus = parseInt(data.main.temp)
    
    if(data){
    card.style.backgroundImage = `url(https://source.unsplash.com/300x500/?${data.name})`
    cityName.innerHTML = data.name
    countryFlag.src = `https://flagsapi.com/${data.sys.country}/flat/48.png`
    degrees.innerHTML = `${graus}ºC`
    condition.innerHTML = data.weather[0].description
    humidity.innerHTML = `humidade :${data.main.humidity}%`
    infos.classList.remove('hidden')
    msg.classList.add('hidden')
    }
}
    

    
form.addEventListener("submit", (e)=>{

    e.preventDefault()
    getWeather(searchCity.value)
    searchCity.value = ''
    
})

getWeather()
