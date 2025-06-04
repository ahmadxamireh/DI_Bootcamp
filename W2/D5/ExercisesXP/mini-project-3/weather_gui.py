# Mini project: XP Ninja
# BONUS: Your goal is to produce a weather GUI that shows the three-day humidity forecast for a city of your choice.
# If you’ve never built a GUI with Python, don’t worry! We’ll be going through step by step how to build it. We will
# be using Matplotlib to plot the weather data. Matplotlib uses Tkinter behind the scenes to display the interactive
# GUI.
#
# You will have to use:
#
# the matplotlib module for the bar chart
# the pytz and datetime module for the date
# the pyowm module for the weather

import matplotlib.pyplot as plt
from datetime import datetime
from pyowm import OWM


# Instructions:
#
# 1. Start by updating the values for the ylabel and title by creating a function called init_plot().

def init_plot():
    plt.title('3-Day Humidity Forecast - Tel Aviv')
    plt.ylabel('Humidity (%)')
    plt.xlabel('Date')
    plt.grid(True)


def get_weather_data():
    owm = OWM('insert your API key here')
    mgr = owm.weather_manager()
    forecast = mgr.forecast_at_place('Tel Aviv, IL', 'daily').forecast

    dates = []
    humidity_values = []

    for weather in list(forecast)[:3]:
        dates.append(datetime.fromtimestamp(weather.reference_time()).strftime('%Y-%m-%d'))
        humidity_values.append(weather.humidity)

    return dates, humidity_values


# 2. Create a function called plot_temperatures() to determine the details of the bar chart.

def plot_temperatures(dates, data):
    plt.bar(dates, data, width=0.8)
    plt.xticks(rotation=45)


# 3. Create a function called write_humidity_on_bar_chart() to display the % humidity in the bar chart.

def write_humidity_on_bar_chart(data):
    for i in range(len(data)):
        plt.text(i, data[i], str(data[i]) + '%', ha='center', va='bottom')

# 4. Style the bar chart

def style_bar_chart():
    plt.style.use('fivethirtyeight')
    plt.rcParams['font.family'] = 'serif'
    plt.rcParams['font.serif'] = 'Ubuntu'
    plt.rcParams['font.monospace'] = 'Ubuntu Mono'
    plt.rcParams['font.size'] = 10
    plt.rcParams['axes.labelsize'] = 10
    plt.rcParams['axes.labelweight'] = 'bold'
    plt.figure(figsize=(10, 6))


def main():
    style_bar_chart()
    init_plot()

    dates, humidity_values = get_weather_data()
    plot_temperatures(dates, humidity_values)
    write_humidity_on_bar_chart(humidity_values)

    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    main()