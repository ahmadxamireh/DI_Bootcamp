# Mini Project: Weather App
#
# What you will learn
# Python functions, loops, conditionals
# Python Modules
#
# Building a Weather App
# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python
# OpenWeatherMap).

# 1. Get the current weather in Tel Aviv.

from pyowm.owm import OWM

owm = OWM('a785333ad1751b04ca04739a1a5a0170')
weather_mgr = owm.weather_manager()

observation = weather_mgr.weather_at_place('Tel Aviv, IL')
weather = observation.weather
print('weather status:', weather.status)
print('detailed status: ', weather.detailed_status)

# 2. Get current wind info of Tel Aviv.

wind_dict_in_meters_per_sec = weather.wind()  # Default unit: 'meters_sec'
print('wind speed:', wind_dict_in_meters_per_sec['speed'], 'm/s')
print('wind direction:', wind_dict_in_meters_per_sec['deg'], 'deg')

# 3. Get today’s sunrise and sunset times of Tel Aviv.

print('sunrise unix:', weather.sunrise_time())  # default unit: 'unix'
print('sunrise iso:', weather.sunrise_time(timeformat='iso'))
print('sunrise date:', weather.sunrise_time(timeformat='date'))
print('sunset unix:', weather.sunset_time())  # default unit: 'unix'
print('sunset iso:', weather.sunset_time(timeformat='iso'))
print('sunset date:', weather.sunset_time(timeformat='date'))

# 4. Display all this information in a user-friendly way.
# Done above

# 5. Recreate these steps, but this time, ask the user for a location (display the information in a user-friendly way).
# - Instead of working with the name of the city, retrieve the id of the city.
# - Check out the documentation section: “Identifying cities and places via city IDs”

reg = owm.city_id_registry()

while True:
    city_name = input('Enter city name: ')
    list_of_tuples = reg.ids_for(city_name, matching='exact')
    if len(list_of_tuples) == 0:
        print('No such city found, try again.')
        continue
    # if city name is London -> list_of_tuples[0] = (2643743, 'London', 'GB', None, 51.50853, -0.12574)
    observation2 = weather_mgr.weather_at_place(list_of_tuples[0][1])
    weather2 = observation2.weather
    print('weather status:', weather2.status)
    print('detailed status: ', weather2.detailed_status)

    wind_dict_in_meters_per_sec = weather2.wind()  # Default unit: 'meters_sec'
    print('wind speed:', wind_dict_in_meters_per_sec['speed'], 'm/s')
    print('wind direction:', wind_dict_in_meters_per_sec['deg'], 'deg')

    print('sunrise unix:', weather2.sunrise_time())  # default unit: 'unix'
    print('sunrise iso:', weather2.sunrise_time(timeformat='iso'))
    print('sunrise date:', weather2.sunrise_time(timeformat='date'))
    print('sunset unix:', weather2.sunset_time())  # default unit: 'unix'
    print('sunset iso:', weather2.sunset_time(timeformat='iso'))
    print('sunset date:', weather2.sunset_time(timeformat='date'))

    break

# 6. Retrieve weather forecasts: The OpenWeatherMap free tier gives you access to 5-day forecasts.
# The forecasts contain the weather data in three-hour intervals.
# The methods for retrieving the forecast are:

# weather_mgr.forecast_at_place('Los Angeles, US', '3h')
# weather_mgr.forecast_at_id(5391959, '3h')
# weather_mgr.forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')

# - Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.

daily_forecast = weather_mgr.forecast_at_place('Jerusalem, IL', 'daily').forecast
three_h_forecast = weather_mgr.forecast_at_place('Jerusalem, IL', '3h').forecast

for weather in daily_forecast:
    weather.get_reference_time('iso'), weather.get_status()

# 7. Use this API to retrieve the Air Pollution in a specific city.

# get an air pollution manager object
mgr = owm.airpollution_manager()

# Get latest CO Index on geocoordinates
list_of_tuples = reg.ids_for('Jerusalem', matching='exact')
lat = list_of_tuples[0][4]
lon = list_of_tuples[0][5]

aqi = mgr.air_quality_at_coords(lat, lon)
print(aqi.air_quality_data)
