var city = window.prompt("What is your city?");
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=c9a462e35e4b57d97a275cb572624431", function(data){
	var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp = Math.floor(data.main.temp - 273.00) + "&#8451; / " + Math.floor(((data.main.temp - 273.00)*1.80)+32) + "&#8457;";
	var weather = data.weather[0].main;
	var city_json = data.name;
	$('.icon').attr('src', icon);
	$('.city').append(city_json);
	$('.temp').append(temp);
	$('.weather').append(weather);
});