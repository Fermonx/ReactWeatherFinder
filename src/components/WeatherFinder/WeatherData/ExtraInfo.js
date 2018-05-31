import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';

class ExtraInfo extends Component
{
    constructor(...props)
    {
        super(...props);
    }
    render()
    {

        const {humidity, wind} = this.props;

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <h4>Humidity</h4>
                                <div className="row col-12">
                                    <span className="humidValue">{`${humidity}%`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="row">
                                <h4>Wind</h4>
                                <div className="row col-12">
                                    <span className="humidValue">{` ${wind}km/H`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExtraInfo;

ExtraInfo.propTypes ={
    humidity: propTypes.number.isRequired,
    wind: propTypes.string.isRequired
};
