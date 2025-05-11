# Exercise 1 : Hello World-I love Python
# Instructions
# Print the following output in one line of code:
#
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python
print('Hello world\n' * 4 + 'I love python\n' * 4, end='')

# Exercise 2 : What is the Season ?
# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)
month = int(input('Please input a month between 1 and 12:\t'))
if 3 <= month <= 5:
    print('It\'s Spring time, let\'s go on a trip!')
elif 6 <= month <= 8:
    print('It\'s Summer time, let\'s go to the beach!')
elif 9 <= month <= 11:
    print('It\'s Autumn time, let\'s carve a pumpkin!')
elif month == 12 or 1 <= month <= 2:
    print('It\'s Winter time, let\'s play in the snow!')
else:
    print('What planet are you living on?')