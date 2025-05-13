# Instructions
# Ask the user for their birthdate (specify the format, for example, DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~
#
# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.
#
# Bonus: If they were born on a leap year, display two cakes!
import datetime

birthday = input('Enter your birthday (DD/MM/YYYY): ')

birthday_breakdown = birthday.split('/')

birth_day = birthday_breakdown[0]
birth_month = birthday_breakdown[1]
birth_year = birthday_breakdown[2]

current_year = datetime.datetime.now().year

age = current_year - int(birth_year)
number_of_candles = age % 10

cake = f'''
    ---{'i' * number_of_candles}---
   |:H:a:p:p:y:|
 __|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
'''
# Check if birth year is a leap year
is_leap = False
if (int(birth_year) % 4 == 0 and int(birth_year) % 100 != 0) or (int(birth_year) % 400 == 0):
    is_leap = True

if is_leap:
    print(cake * 2)  # two cakes for leap year
else:
    print(cake)