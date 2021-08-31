const apiKey = '180a0ae228f8154f58a4a19a272da726';
const cityElem = document.getElementById('city-name');
let cityName = cityElem.innerText;

const temparature = document.getElementById('temparature');

const searchTxt = document.getElementById('searchValue');
console.log(searchTxt.value);

const searchBtn = document.getElementById('searchBtn');


// selecting loading div
const loader = document.querySelector("#loading");
// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}





const loadData = (data, name = "Dhaka") => {
    console.log(data, name);
    temparature.innerText = data.temp;
    cityElem.innerText = name;
}


const displayName = async (cityName, apiKey) => {
    displayLoading()
    searchTxt.value = "";
    console.log('Printed inside displayName', cityName);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    // hideLoading()
    loadData(data.main, cityName);


    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    //     .then(response => response.json())
    //     .then(data => loadData(data.main, cityName))
}

searchBtn.addEventListener('click', function () {

    let name = searchTxt.value;
    console.log(name);
    displayName(name, apiKey);
})