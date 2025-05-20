# 🌟 Exercise 1: Currencies
# Goal: Implement dunder methods for a Currency class to handle string representation, integer conversion, addition,
# and in place addition.

class Currency:
    """
    Represents a monetary currency with a specified type and amount.

    This class allows performing operations such as addition with integers and
    other Currency objects, provided the currency types match. It also provides
    methods for converting the currency object to an integer and representing
    it as a string for better readability.

    :ivar currency: The type of the currency.
    :ivar amount: The monetary value associated with the currency.
    """
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount


    def __int__(self):
        # Take Currency object and return integer amount
        return self.amount


    def __add__(self, other):
        # Handle addition between Currency objects and integers
        if isinstance(other, int):
            # Add integer directly to amount
            total = self.amount + other
        elif isinstance(other, Currency):
            # Add amounts of two Currency objects if currencies match
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            total = self.amount + other.amount
        else:
            # Raise error for unsupported operand types
            raise TypeError(f"Unsupported operand type(s) for +=: 'Currency' and '{type(other).__name__}'")
        return total


    def __iadd__(self, other):
        # Handle in-place addition between Currency objects and integers
        if isinstance(other, int):
            # Add integer directly to amount
            self.amount += other
        elif isinstance(other, Currency):
            # Add amounts of two Currency objects if currencies match
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        else:
            # Raise error for unsupported operand types
            raise TypeError(f"Unsupported operand type(s) for +=: 'Currency' and '{type(other).__name__}'")
        return self


    def __str__(self):
        # Return string representation with proper plural form
        return f'{self.amount} {self.currency}{'s' if self.amount > 1 else ''}'


    def __repr__(self):
        # Use same representation as str() method
        return self.__str__()


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
# '5 dollars'
print(int(c1))
# 5
print(repr(c1))
# '5 dollars'
print(c1 + 5)
# 10
print(c1 + c2)
# 15
print(c1)
# 5 dollars
c1 += 5
print(c1)
# 10 dollars
c1 += c2
print(c1)
# 20 dollars
print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 3: String module
# Goal: Generate a random string of length 5 using the string module.
#
# Instructions:
# Use the string module to generate a random string of length 5, consisting of uppercase and lowercase letters only.
#
# Step 1: Import the string and random modules
# Import the string and random modules.
import string, random

# Step 2: Create a string of all letters
text = string.ascii_letters

# Step 3: Generate a random string
# Use a loop to select 5 random characters from the combined string.
# Concatenate the characters to form the random string.
random_string = ''.join(random.choice(text) for _ in range(5))
print(random_string)

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 4: Current Date
# Goal: Create a function that displays the current date.
#
# Instructions:
#
# Use the datetime module to create a function that displays the current date.
#
# Step 1: Import the datetime module
from datetime import datetime


# Step 2: Get the current date
def display_current_date():
    today = datetime.now()
    print(f'Today\'s date is: {today.strftime('%d/%m/%Y')}')


# Step 3: Display the date
display_current_date()

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 5: Amount of time left until January 1st
# Goal: Create a function that displays the amount of time left until January 1st.
#
# Instructions:
#
# Use the datetime module to calculate and display the time left until January 1st.
#
# Step 1: Import the datetime module
import datetime


def time_until_january_1st():
    # Step 2: Get the current date and time
    current_date = datetime.datetime.now()

    # Step 3: Create a datetime object for January 1st of the next year
    future_date = datetime.datetime(year=current_date.year + 1, month=1, day=1)

    # Step 4: Calculate the time difference
    diff = future_date - current_date

    # Step 5: Display the time difference
    return (f'Time left until January 1st: {diff.days} days, {diff.seconds // 3600} hours and '
            f'{diff.seconds // 60 % 60} minutes')


print(time_until_january_1st())


# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 6: Birthday and minutes
#
# Instructions:
#
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message
# stating how many minutes the user lived in his life.

def calculate_age(birthdate):
    today = datetime.datetime.now()
    birthdate = datetime.datetime.strptime(birthdate, '%d/%m/%Y')

    diff = today - birthdate
    if diff.days < 0:
        return 0
    return diff.days * 24 * 60


birthdate = '24/5/1997'
minutes_alive = format(calculate_age(birthdate), ',')
print(f'Birthdate: {birthdate}, {'not born yet!' if minutes_alive == 0 else f'alive for {minutes_alive} minutes!'}')

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 7: Faker Module
# Goal: Use the faker module to generate fake user data and store it in a list of dictionaries.
# Read more about this module HERE
#
# Instructions:
#
# Install the faker module and use it to create a list of dictionaries, where each dictionary represents a user with
# fake data.
#
# Step 1: Install the faker module

# Step 2: Import the faker module
import faker

fake = faker.Faker()

# Step 3: Create an empty list of users
users = []


# Step 4: Create a function to add users
# Create a function that takes the number of users to generate as an argument.
# Inside the function, use a loop to generate the specified number of users.
# For each user, create a dictionary with the keys name, address, and language_code.
# Use the faker instance to generate fake data for each key:
# name: faker.name()
# address: faker.address()
# language_code: faker.language_code()
# Append the user dictionary to the users list.

def generate_users(n):
    for i in range(n):
        user = {'name': fake.name(), 'address': fake.address(), 'langauge_code': fake.language_code()}
        users.append(user)

# Step 5: Call the function and print the users list
generate_users(10)
print(users)