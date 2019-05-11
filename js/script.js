var city = 
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=pune&APPID=c9a462e35e4b57d97a275cb572624431", function(data){
	console.log(data);
	var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp = Math.floor(data.main.temp - 273.00);
	var weather = data.weather[0].main;
	$('.icon').attr('src', icon);
	$('.temp').append(temp);
	$('.weather').append(weather);
});