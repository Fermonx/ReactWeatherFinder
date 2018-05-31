import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';

const IconState = timeState=>{
    switch (timeState)
    {
        case "nublado": return "cloud";
        case "cloudy": return "day-cloudy";
        case "soleado": return "day-sunny";
        case "lluvioso": return "rain";
        case "nevado": return "snowy";
        case "viento": return "windy";

        default: return "day-sunny";
    }
};

const GetTimeIcon = timeState =>{
    return ( <WeatherIcons name={IconState(timeState)} size="2x"/>);
};


class Temperature extends Component
{
    constructor(...props)
    {
        super(...props);
    }

    render()
    {
        const {temperature} = this.props;
        const {timeState} = this.props;

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="tempTitle">
                                    Forecast
                                </div>
                            </div>
                            <div className="row">
                                <GetTimeIcon timeState={'cloudy'} size="2x"/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="tempTitle">
                                    Temperature
                                </div>
                            </div>
                            <div className="row">
                                <span className="inputSize">{temperature}</span>
                                <WeatherIcons name="degrees" size="2x"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Temperature.propTypes = {
    temperature : propTypes.number.isRequired,
    timeState : propTypes.string.isRequired
};

export default Temperature;

/*

<div className="row">
                        <div className="col-6">
                            <div className="tempTitle">
                                Forecast
                            </div>
                        </div>
                        <div className="col-md-6">
                            <WeatherIcons name={this.getIcons(icon)} size="3x"/>
                        </div>
                        <div className="col-8">
                            <div className="tempTitle">
                                Temperature
                            </div>
                        </div>
                        <div className="col-md-8">
                            <span className="inputSize">{temperature}</span>
                            <WeatherIcons name="degrees" size="2x"/>
                        </div>
                    </div>
                    <div className="row">

                    </div>


 */





/*
<div className="tempTitle">Forecast</div>
                <h2> <WeatherIcons name={this.getIcons(icon)} size="2x"/></h2>
                <h3>
                    <WeatherIcons name="thermometer" size="1x" />
                        <span className="inputSize">{temperature}</span>
                    <WeatherIcons name="degrees" size="1x"/></h3>
 */