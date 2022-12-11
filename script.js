const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43eceb9566msh6e473de4eff8cfep17825bjsn6df72586f6d8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getDelhiData = (name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + name, options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			d1.textContent = data.humidity + "%"
			d2.textContent = data.max_temp + "℃"
			d3.textContent = data.min_temp + "℃"
			let date = new Date(data.sunrise)
			d4.textContent = `${date.getHours()}:${date.getMinutes()}`
			let date2 = new Date(data.sunset)
			d5.textContent = `${date2.getHours()}:${date2.getMinutes()}`
			d6.textContent = data.wind_speed + "Km/hr"
		})
		.catch(err => console.error(err));
}

let getBangaloreData = (name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + name, options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			b1.textContent = data.humidity + "%"
			b2.textContent = data.max_temp + "℃"
			b3.textContent = data.min_temp + "℃"
			let date = new Date(data.sunrise)
			b4.textContent = `${date.getHours()}:${date.getMinutes()}`
			let date2 = new Date(data.sunset)
			b5.textContent = `${date2.getHours()}:${date2.getMinutes()}`
			b6.textContent = data.wind_speed + "Km/hr"
		})
		.catch(err => console.error(err));
}

let getAhmedabadData = (name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + name, options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			a1.textContent = data.humidity + "%"
			a2.textContent = data.max_temp + "℃"
			a3.textContent = data.min_temp + "℃"
			let date = new Date(data.sunrise)
			a4.textContent = `${date.getHours()}:${date.getMinutes()}`
			let date2 = new Date(data.sunset)
			a5.textContent = `${date2.getHours()}:${date2.getMinutes()}`
			a6.textContent = data.wind_speed + "Km/hr"
		})
		.catch(err => console.error(err));
}

let getCalcuttaData = (name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + name, options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			c1.textContent = data.humidity + "%"
			c2.textContent = data.max_temp + "℃"
			c3.textContent = data.min_temp + "℃"
			let date = new Date(data.sunrise)
			c4.textContent = `${date.getHours()}:${date.getMinutes()}`
			let date2 = new Date(data.sunset)
			c5.textContent = `${date2.getHours()}:${date2.getMinutes()}`
			c6.textContent = data.wind_speed + "Km/hr"
		})
		.catch(err => console.error(err));
}

let getMumbaiData = (name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + name, options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			m1.textContent = data.humidity + "%"
			m2.textContent = data.max_temp + "℃"
			m3.textContent = data.min_temp + "℃"
			let date = new Date(data.sunrise)
			m4.textContent = `${date.getHours()}:${date.getMinutes()}`
			let date2 = new Date(data.sunset)
			m5.textContent = `${date2.getHours()}:${date2.getMinutes()}`
			m6.textContent = data.wind_speed + "Km/hr"
		})
		.catch(err => console.error(err));
}

getDelhiData("delhi")
getMumbaiData("mumbai")
getAhmedabadData("ahmedabad")
getBangaloreData("bangalore")
getCalcuttaData("calcutta")

btn1.onclick = () => {
	window.location.href = "https://www.msn.com/en-in/weather/forecast"
}
btn2.onclick = () => {
	window.location.href = "https://www.msn.com/en-in/weather/forecast"
}
btn3.onclick = () => {
	window.location.href = "https://www.msn.com/en-in/weather/forecast"
}

cityName.textContent = "Delhi"

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.catch(error => {
		console.log(error);
	})
	.then(data => {
		cloud_pct.textContent = data.cloud_pct
		humidity.textContent = data.humidity + "%"
		max_temp.textContent = data.max_temp + "℃"
		min_temp.textContent = data.min_temp + "℃"
		let date = new Date(data.sunrise)
		sunrise.textContent = `${date.getHours()}:${date.getMinutes()}`
		let date2 = new Date(data.sunset)
		sunset.textContent = `${date2.getHours()}:${date2.getMinutes()}`
		temp.textContent = data.temp + "℃"
		wind_degrees.textContent = data.wind_degrees
		wind_speed.textContent = data.wind_speed + "Km/hr"
	})
	.catch(err => console.error(err));

btn_search.addEventListener("click", (e) => {
	e.preventDefault()
	let input = document.getElementById("input_city_name")
	let city_name = input.value

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city_name.toLowerCase(), options)
		.then(response => response.json())
		.catch(error => {
			console.log(error);
		})
		.then(data => {
			if (data.cloud_pct==undefined) alert("please enter valid city name")
			else {
				cityName.textContent = city_name
				cloud_pct.textContent = data.cloud_pct
				humidity.textContent = data.humidity + "%"
				max_temp.textContent = data.max_temp + "℃"
				min_temp.textContent = data.min_temp + "℃"
				let date = new Date(data.sunrise)
				sunrise.textContent = `${date.getHours()}:${date.getMinutes()}`
				let date2 = new Date(data.sunset)
				sunset.textContent = `${date2.getHours()}:${date2.getMinutes()}`
				temp.textContent = data.temp + "℃"
				wind_degrees.textContent = data.wind_degrees
				wind_speed.textContent = data.wind_speed + "Km/hr"
			}

		})
		.catch(err => console.error(err));
})
