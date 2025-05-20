# Exercise 1: Upcoming Holiday
# Instructions
# 1. Write a function that displays today’s date.
# 2. The function should also display the amount of time left from now until the next upcoming holiday and print which
# holiday that is. (Example: the next holiday is New Years’ Eve in 30 days).
# Hint: Use a module to find the datetime and name of the upcoming holiday.
import random
from datetime import datetime
from random import shuffle

import holidays


def display_today():
    """
    Displays today's date, the name and date of the next upcoming holiday in the USA,
    and the days remaining until that holiday.

    If there are no holidays remaining for the current year, it informs the user accordingly.
    """
    # Get current date and time
    today = datetime.now()
    # Format and print current date
    print(f'Today is {today.strftime("%A, %d %B %Y")}')

    # Get a list of US holidays for the current year
    us_holidays = holidays.country_holidays('USA', years=today.year)

    # Find the next upcoming holiday
    upcoming = [(date, name) for date, name in sorted(us_holidays.items()) if date > today.date()]
    if upcoming:
        # Get the next holiday date and name
        next_date, holiday_name = upcoming[0]
        # Calculate days until the next holiday
        days_left = (next_date - today.date()).days
        print(f"The next holiday is {holiday_name} in {days_left} days.")
    else:
        print("No more holidays this year.")


display_today()


# ----------------------------------------------------------------------------------------------------
# Exercise 2 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on all those planets :
#
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Example: if someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years

def calculate_age(age_in_seconds: int, planet: str = 'earth'):
    """
    Calculate the age of a person in years on a given planet based on their age in seconds.

    This function takes the age in seconds and calculates the equivalent age
    in years on the specified planet. It uses the orbital period of each planet
    relative to Earth's years to determine the result. By default, the calculation
    is performed for Earth if no planet is specified.

    :param age_in_seconds: The age of the person in seconds.
    :param planet: The name of the planet for which the age should be calculated.
                   Defaults to 'earth'.
    :return: The age in years on the specified planet.
    :rtype: float
    """
    # Dictionary of orbital periods relative to Earth years
    orbital_periods = {
        'earth': 1.0,
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132,
    }
    # Number of seconds in an Earth year
    one_earth_year_in_seconds = 365.25 * 24 * 60 * 60

    # Convert planet name to lowercase for case-insensitive comparison
    planet_name = planet.lower()

    # Return message for invalid planet names
    if planet_name not in orbital_periods:
        return f'{planet.capitalize()} is outside of the Milky Way!'

    # Calculate age on specified planet
    age = age_in_seconds / (one_earth_year_in_seconds * orbital_periods[planet_name])

    # Return formatted string with age rounded to 2 decimal places
    return f'You are {round(age, 2)} years old on {planet_name.capitalize()}.'


# List of planets to test including invalid planet 'Namek'
planets = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'Namek']
# Test age in seconds (approximately 28 Earth years)
age_in_seconds = 883_612_800
# Calculate and print age for each planet
for planet in planets:
    print(calculate_age(age_in_seconds, planet))

# ----------------------------------------------------------------------------------------------------
# Exercise 3 : Regular Expression #1
# Instructions
# Hint: Use the RegEx (module)
# Use the regular expression module to extract numbers from a string.
import re


def return_numbers(string):
    """
    Extracts all numeric characters from a given string and prints them as a continuous sequence.

    This function uses regular expressions to find all numbers in the input string 
    and joins them together into a single string output.

    :param string: The input string from which numbers are to be extracted.
    :type string: str
    :return: None
    """
    regex = re.compile(r'\d+')  # Match one or more digits
    print(''.join(re.findall(regex, string)))  # Find all matches and join into a single string


return_numbers('k5k3q2g5z6x9bn')

# ----------------------------------------------------------------------------------------------------
# Exercise 4 : Regular Expression #2
# Instructions
# Hint: Use the RegEx (module)
#
# Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
# The name should contain only letters.
# The name should contain only one space.
# The first letter of each name should be upper-cased.
import re


def name_check(name):
    """
    Checks if the given name follows the specified format.

    This function validates the provided name string against a specific format
    where the first name and last name both start with an uppercase letter followed
    by one or more alphabetic characters, separated by a space.
    There can be no digit in either name, check for a full match.

    :param name: A string representing the name to be validated.
    :return: A boolean indicating whether the given name matches the expected format.
    """
    regex = re.compile(r'^[A-Z][a-zA-Z]+\s[A-Z][a-zA-Z]+$')
    if re.fullmatch(regex, name):
        print(f'The given name "{name}" is valid.')
    else:
        print(f'The given name "{name}" is not valid.')


full_name = input('Enter your full name: ')
print(name_check(full_name))

# ----------------------------------------------------------------------------------------------------
# Exercise 5: Python Password Generator
# Instructions
# Create a Python program that will generate a good password for you.
#
# Program flow:
#
# 1. Ask the user to type in the number of characters that the password should have (password length) – between 6 and 30
# characters.
# Validate the input. Make sure the user is inputting a number between 6 and 30. Create a loop which will continue to
# ask the user for an input until they enter a valid one.
#
# 2. Generate a password with the required length.
# Print the password with a user-friendly message which reminds the user to keep the password in a safe place!
#
# * Rules for the validity of the password
#
# 1. Each password should contain:
# At least 1 digit (0-9)
# At least 1 lower-case character (a-z)
# At least 1 upper-case character (A-Z)
# At least 1 special character (eg. !, @, #, $, %, ^, _, …)
# Once there is at least 1 of each, the rest of the password should be composed of more characters from the options
# presented above.
#
# 2. Create a test function first!
#
# 3. Do the following steps 100 times, with different password lengths:
# Generate a password.
# Test the password to ensure that:
# it fulfills all the requirements above (eg. it has at least one digit, etc.)
# it has the specified length.
import string


def generate_password(length: int = 10):
    """
    This function generates a random password which adheres to certain strength
    requirements. The password includes at least one digit, one lowercase letter,
    one uppercase letter, one special character, and has a length between 6 and 
    30. Users can specify the desired length of the password, with a default value
    of 10 characters. The resulting password ensures compliance with strong password
    requirements by utilizing a regular expression pattern to validate its structure.

    :param length: Desired length of the generated password. Must be an integer.
        Defaults to 10. Length must allow for proper structure validation.
    :return: A randomly generated password that meets the specified strength
        requirements.
    :rtype: str
    """
    # Define character sets for password generation
    digits = string.digits  # 0-9
    lower_alphabet = string.ascii_lowercase  # a-z
    upper_alphabet = string.ascii_uppercase  # A-Z 
    special_characters = string.punctuation  # Special characters like !@#$%^&*

    # Combine all character sets into one
    characters = digits + lower_alphabet + upper_alphabet + special_characters

    # Regular expression pattern to validate password requirements:
    # - Must start with any character (^)
    # - Must contain at least one digit (?=.*[0-9])
    # - Must contain at least one lowercase letter (?=.*[a-z])
    # - Must contain at least one uppercase letter (?=.*[A-Z])
    # - Must contain at least one special character (?=.*[^A-Za-z0-9])
    # - Must be between 6-30 characters in length (.{6,30})
    # - Must end properly ($)
    regex = re.compile(r'^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,30}$')

    # Keep generating passwords until one matches all requirements
    while True:
        # Generate random password of specified length
        password = ''.join(random.choice(characters) for _ in range(length))
        # Check if the password meets all requirements
        if regex.fullmatch(''.join(password)):
            break

    return password


def test_password_generator():
    """
    Tests the password generation functionality by generating and printing
    100 randomly generated passwords. Each password length is chosen randomly
    between a specified range.

    :raises ValueError: If the generated password does not meet the expected 
        constraints or range.
    :return: None
    """

    print("Running 100 password generation tests:\n")

    # Generate and print 100 test passwords
    for i in range(100):
        password = generate_password(random.randint(6, 30))
        print(f'Password #{i + 1}: {password}')


# Main execution loop
while True:
    try:
        # Get password length from the user
        num = int(input('Enter password length (between 6 and 30): '))
        # Validate input length
        if num < 6:
            print('The password must be at least 6 characters long.')
            continue
        elif num > 30:
            print('The password must be at most 30 characters long.')
            continue
        break
    except ValueError:
        print('Invalid input. Try again with only digits.')

# Generate and display password
password = generate_password(num)
print('Your password is: ' + ''.join(password))
print('Please keep your password secure and in a safe place.\n')

# Run test cases
test_password_generator()
