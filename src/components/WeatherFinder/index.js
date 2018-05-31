import React, {Component} from 'react';
import Index from './Location/index';
import WeatherFind from './WeatherData/index';

const location = 'Valencia, Es';
const api_key = '';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

navigator.geolocation.getCurrentPosition(function(position) {
    save_location(position.coords.latitude, position.coords.longitude);
});

function save_location(y, x){

}

class WeatherFinder extends Component
{
  datos;
  constructor(...props){
      super (...props);
      this.state = { datos:{} };
  }

  componentDidMount() {
    fetch(api_weather).then(data => {
        return (data.json())
    }).then(weather_data => {
        let datos = weather_data;
        this.setState({datos});
    })
  }

    actualizar = ()=>{
        console.log(this.datos);
    };

    render()
    {
        const {datos} = this.state;
        return(
            <div>
                <Index city={datos.name} />
                <br/>
                <hr className="line"/>
                <WeatherFind datos={datos}/>

            </div>
        )
    }
}

export default WeatherFinder;
