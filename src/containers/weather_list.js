import React, { Component } from 'react';
import { connect } from 'react-redux'


import Chart from '../components/chart'
import GoogleMap from '../components/maps'
 class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidites = cityData.list.map(weather => weather.main.humidity)
    const {lat, lon} = cityData.city.coord



    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} units='K' color='orange' />
        </td>
        <td>
          <Chart data={pressures}  units='hPa'color='red' />
        </td>
        <td>
          <Chart data={humidites} units='%' color='blue' />
        </td>
      </tr>
    )
  }

  render() {
    return (

      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStatetoProps({ weather }) {
  return { weather } // es6 { weater } === { weather: weather }
}


export default connect(mapStatetoProps)(WeatherList)
