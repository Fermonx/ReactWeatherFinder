import React, {Component} from 'react';
import propTypes from 'prop-types';

class Location extends Component
{
    constructor(...props)
    {
        super(...props);
    }
    render()
    {
        const {city} = this.props;
        return(
          <div>
              <h1 className="cityspacing">{city}</h1>
          </div>
        )
    }
}

Location.propTypes ={
  city: propTypes.string,
  country: propTypes.string
};

export default Location;