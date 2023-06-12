const searchForm = document.getElementsByTagName('form')[0]
searchForm.addEventListener('submit', (event => {
    const location = searchForm[0].value
    event.preventDefault()
    displayData(location)
}))

const locationData = async (location) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&id=524901&appid=d6bcaad9798aaea6ea40cf9d5ae8d8dd&units=imperial`)
    const data = await response.json()
    console.log(data)
    return data
}

const displayData = async (location) => {
    data = await locationData(location)
    const weatherCard = document.getElementById('my-card')
    let conditionIcon = ""
    if (data.weather[0].main === 'Clouds') {
        conditionIcon = "cloud.png"
    } else if (data.weather[0].main === 'Rain') {
        conditionIcon = "rainy.png"
    } else if (data.weather[0].main === 'Clear') {
        conditionIcon = "sun.png"
    } else if (data.weather[0].main === 'Snow') {
        conditionIcon = "snowflake.png"
    }
    weatherCard.innerHTML =
        `<div class="weather-card" id="">
            <div class="city-div">
                <div class="city-name">${data.name}</div>
            </div>
            <div class="current-temp">
                <div>${Math.round(data.main.temp)}°</div>
            </div>
            <div class="weather-conditions">
                <div class="weather-icon"><img src="images/${conditionIcon}" alt="" class="weather-img"></div>
                <div class="">${data.weather[0].description}</div>
                <div> HI:${Math.round(data.main.temp_max)}° / LO: ${Math.round(data.main.temp_min)}° </div>
            </div>
        </div>`
}

const conditionIcon = document.getElementsByClassName

const conditionsClass = document.getElementsByClassName('weather-conditions')
const changeCardBackground = (data) => {
    if(data.weather[0].description === 'overcast clouds'){
        weatherCard.idName = ''
    } else if (data.weather[0].description === 'clear-sky') {
        bodyTag.className = ''
    } else if (data.weather[0].description === ''){
        bodyTag.className = ''
    } else {
        bodyTag.className = ''
    }
}