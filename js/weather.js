let xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?q=Kecskemét&units=metric&appid=e5b292ae2f9dae5f29e11499c2d82ece"
);

xhr.onload = async () => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            document.getElementById("city").innerHTML = json.name;
            document.getElementById("temp").innerHTML =
                json.main.temp.toFixed(0) + " &#x2103;";
            document.getElementById("weather-description").innerHTML =
                json.weather[0].description;
        } else {
            console.error("error msg: " + xhr.status);
        }
    }
};
xhr.send();
