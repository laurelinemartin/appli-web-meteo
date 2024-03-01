function getCity() {
	var city = document.getElementById("inputVille").value;
	console.log(city);
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
			+ city 
			+ '&lang=fr&units=metric&mode=JSON&appid=<APIKEY>' // Modifier l'API Key !
	getCurrentWeatherByCity(url);
}

function getCurrentWeatherByCity(URL){
	// console.log(URL);
	window.fetch(URL)
			.then(function(res){
	 			if (res.ok) {
	 				return res.json();
	 			}
	 		})
	 		.then(function(res){
	 			screenCurrentWeather(res);
	 		})
			.catch(function(err){
				console.log("oh no !");
	})
}

function screenCurrentWeather(weather){
	console.log("ville : "+weather.name);
	document.getElementById("temperature")
 			.innerText="La température actuelle est de "
 			+weather.main.temp
 			+"°C "
 			+"à "
 			+weather.name
 			+".";
}
