import React, {Component} from 'react';
import Temperature from './Temperature';
import ExtraInfo from './ExtraInfo';

let convert = require('convert-units');

class WeatherData extends Component
{
    constructor(props){
        super(props);
    }

    calculateTemperature(temp){
        return Math.floor(convert(temp).from('K').to('C'));
    }

    calculateWind(wind){
        return Math.floor(convert(wind).from('m/s').to('km/h'));
    }

    render()
    {
        const {datos} = this.props;

        return(
          <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-6 offset-1 box1">
                        <Temperature temperature={datos.main ? this.calculateTemperature(datos.main.temp) : 'Locating'}/>
                    </div>

                    <div className="col-6 offset-1 box2">
                        <ExtraInfo humidity={datos.main ? datos.main.humidity : 'Locating'} wind={datos.main ? this.calculateWind(datos.wind.speed) : 'Locating'} />
                    </div>

                </div>
            </div>
          </div>

        )

    }
}

export default WeatherData;
