# 🌟 Exercise 1: What Are You Learning?
# Goal: Create a function that displays a message about what you’re learning.

# Step 1: Define a Function named display_message(). This function should not take any parameters.
def display_message():
    # Step 2: Print a Message
    print('I am learning about functions in Python.')

# Step 3: Call the Function. This will execute the code inside the function and print your message.
display_message()

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 2: What’s Your Favorite Book?
# Goal: Create a function that displays a message about a favorite book.

# Step 1: Define a function named favorite_book(). This function should accept one parameter called title.
def favorite_book(title):
    # Step 2: The function needs to output a message like “One of my favorite books is <title>”.
    print(f'One of my favorite books is {title}.')

# Step 3: Call the Function with an Argument
favorite_book("Alice in Wonderland")

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 3: Some Geography
# Goal: Create a function that describes a city and its country.

# Step 1: Define a Function with Parameters
# Define a function named describe_city().
# This function should accept two parameters: city and country.
# Give the country parameter a default value, such as “Unknown”.
def describe_city(city, country='Unknown'):
    # Step 2: Print a Message
    # Inside the function, set up the code to display a sentence like “ is in ”.
    # Replace <city> and <country> with the parameter values.
    print(f'{city} is in {country}.')

# Step 3: Call the Function
# Call the describe_city() function with different city and country combinations.
# Try calling it with and without providing the country argument to see the default value in action.
describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 4: Random
# Goal: Create a function that generates random numbers and compares them.

# Step 1: Import the random Module
# At the beginning of your script, use import random to access the random number generation functions.
import random

# Step 2: Define a Function with a Parameter
# Create a function that accepts a number between 1 and 100 as a parameter.
def compare_numbers(number):
    # Step 3: Generate a Random Number
    # Inside the function, use random.randint(1, 100) to generate a random integer between 1 and 100.
    random_number = random.randint(1, 100)

    # Step 4: Compare the Numbers
    # If they are the same, print a success message. Otherwise, print a fail message and display both numbers.
    if number == random_number:
        print('Success!')
    else:
        print(f'Fail! Your number: {number}, Random number: {random_number}.')

# Step 5: Call the Function
# Call the function with a number between 1 and 100.
compare_numbers(50)

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 5: Let’s Create Some Personalized Shirts! ok
# Goal: Create a function to describe a shirt’s size and message, with default values.

# Step 1: Define a Function with Parameters
# Define a function called make_shirt().
# This function should accept two parameters: size and text.
def make_shirt(size='large', text='I love Python'):
    # Step 2: Print a Summary Message
    # Set up the function to display a sentence summarizing the shirt’s size and message.
    print(f'The size of the shirt is {size} and the text is {text}.')

# Step 3: Call the Function
make_shirt("medium", "I'm a champion!")

# Step 4: Modify the Function with Default Values
# Modify the make_shirt() function so that size has a default value of “large” and text has a default value of “I love Python”.

# Step 5: Call the Function with Default and Custom Values
make_shirt()
make_shirt("medium")
make_shirt("small", "Hello, world!")

# Step 6 (Bonus): Keyword Arguments
# Call make_shirt() using keyword arguments (e.g., make_shirt(size="small", text="Hello!")).
make_shirt(size="medium", text="Hola, mundo!")

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 6: Magicians…
# Goal: Modify a list of magician names and display them in different ways.

# Step 1: Create a List of Magician Names
# Create a list called magician_names with the given names:
# [‘Harry Houdini’, ‘David Blaine’, ‘Criss Angel’]
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Step 2: Create a Function to Display Magicians
# Create a function called show_magicians() that takes the magician_names list as a parameter.
# Inside the function, iterate through the list and print each magician’s name.
def show_magicians(names):
    for name in names:
        print(name)

# Step 3: Create a Function to Modify the List
# Create a function called make_great() that takes the magician_names list as a parameter.
# Inside the function, use a for loop to iterate through the list and add “the Great” before each magician’s name.
def make_great(names):
    for i in range(len(names)):
        names[i] += ' the Great'

# Step 4: Call the Functions
# Call make_great() to modify the list.
# Call show_magicians() to display the modified list.
make_great(magician_names)
show_magicians(magician_names)

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 7: Temperature Advice
# Goal: Generate a random temperature and provide advice based on the temperature range.

# Step 1: Create the get_random_temp() Function
# Create a function called get_random_temp() that returns a random integer between -10 and 40 degrees Celsius.
def get_random_temp(month):
    # Determine season based on month
    if month in [12, 1, 2]:  # Winter
        return random.uniform(-10, 10)
    elif month in [3, 4, 5]:  # Spring
        return random.uniform(10, 20)
    elif month in [6, 7, 8]:  # Summer
        return random.uniform(20, 40)
    elif month in [9, 10, 11]:  # Fall/Autumn
        return random.uniform(10, 25)
    else:
        return None  # Invalid month

# Step 2: Create the main() Function
# Create a function called main(). Inside this function:
# Call get_random_temp() to get a random temperature.
# Store the temperature in a variable and print a friendly message like:
# “The temperature right now is 32 degrees Celsius.”
def main():
    # Get month input from the user
    while True:
        month = int(input("Enter a month (1-12): "))
        if 1 <= month <= 12:
            break
        else:
            print("Please enter a valid number between 1 and 12")

    temp = get_random_temp(month)
    if temp is None:
        print("Invalid month entered.")
        return

    print(f'The temperature right now is {temp:.1f} degrees Celsius.')  # .1f to round to 1 decimal place

    # Step 3: Provide Temperature-Based Advice
    # Inside main(), provide advice based on the temperature:
    # Below 0°C: e.g., “Brrr, that’s freezing! Wear some extra layers today.”
    # Between 0°C and 16°C: e.g., “Quite chilly! Don’t forget your coat.”
    # Between 16°C and 23°C: e.g., “Nice weather.”
    # Between 24°C and 32°C: e.g., “A bit warm, stay hydrated.”
    # Between 32°C and 40°C: e.g., “It’s really hot! Stay cool.”
    if temp < 0:
        print('Brrr, that\'s freezing! Wear some extra layers today.')
    elif temp < 16:
        print('Quite chilly! Don\'t forget your coat.')
    elif temp < 24:
        print('Nice weather.')
    elif temp < 32:
        print('A bit warm, stay hydrated.')
    else:
        print('It\'s really hot! Stay cool.')

# Step 4: Floating-Point Temperatures (Bonus)
# Modify get_random_temp() to return a random floating-point number using random.uniform() for more accurate temperature values.

# Step 5: Month-Based Seasons (Bonus)
# Instead of directly generating a random temperature, ask the user for a month (1-12) and determine the season using if/elif conditions.
# Modify get_random_temp() to return temperatures specific to each season.

main()
