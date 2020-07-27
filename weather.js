
document.getElementById('myBtn').onclick = () => {

  let city = document.getElementById('myInput').value;
 

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a7081c3ea07c98dec8b6748366a1e415`
  ).then(data1 => data1.json()
  ).then(data2 => {
  
  //  console.log(data2)
  //  console.log(data2.name)
  //  console.log(data2.main.temp)
  //  console.log(data2.weather[0].description)

  document.getElementById('info').innerHTML = `
      <ul>
          <li>Country:${data2.sys.country}</li>
          <li>City:${data2.name}</li>
          <li>Humidity:${data2.main.humidity}%</li>
          <li>Temp:${data2.main.temp}</li>
          <li>Wind:${data2.wind.speed}km/h</li>
          <li>Description:${data2.weather[0].description}</li>
      </ul>
  
  `
})
}