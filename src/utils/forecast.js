const request = require('request')

// read with default - celsius, meters ...
// const url = 'http://api.weatherstack.com/current?access_key=84b2615b268ef750c4c6f386690b7a34&query=37.8267,-122.4233'

const forecast = (latitude, longitude, callback) => {
    // or change it to farenheit - check API documentation 
//    const url = 'http://api.weatherstack.com/current?access_key=84b2615b268ef750c4c6f386690b7a34&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=84b2615b268ef750c4c6f386690b7a34&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body} = {}) => {
        if(error) {
            callback('Unable to connect the weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search.!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out')
        }
    })
}

module.exports = forecast
