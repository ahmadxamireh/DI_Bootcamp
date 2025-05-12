# Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

first_list = list(range(0, 5))
second_list = list(range(5, 10))
combined_lists = first_list + second_list
print(f'The concatenated list is: {combined_lists}')

# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500, 2500):
    if i % 5 == 0 or i % 7 == 0:
        print(i)

# Exercise 3: Check the index
# Instructions
# Using this variable
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
usr = input('Please enter your name: ')
if usr in names:
    print(f'The index of {usr} in the list is {names.index(usr)}')
else:
    print(f'{usr} is not in the list.')

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
# Test Data
# Input the 1st number: 25
# Input the 2nd number: 78
# Input the 3rd number: 87
# The greatest number is: 87

list_of_numbers = []
user_input = 0
for i in range(0, 3):
    if i == 0:
        user_input = input('Input the 1st number: ')
        list_of_numbers.append(int(user_input))
    elif i == 1:
        user_input = input('Input the 2nd number: ')
        list_of_numbers.append(int(user_input))
    else:
        user_input = input('Input the 3rd number: ')
        list_of_numbers.append(int(user_input))
        print(f'\nThe greatest number is: {max(list_of_numbers)}')

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether it's a vowel or a consonant.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
for letter in alphabet:
    if letter in 'aeiou':
        print(f'The letter {letter} is a vowel.')
    else:
        print(f'The letter {letter} is a consonant.')

# Exercise 6: Words and letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

print('Please enter 7 words:')

words = []
for i in range(0, 7):
    word = input(f'Enter word #{i + 1}: ')
    words.append(word)

letter = input('Please type a single character: ')

for word in words:
    if letter.lower() in word.lower():
        print(f'The letter {letter}\'s first appearance in the word {word} is at index {word.index(letter)}.')
    else:
        print(f'The letter {letter} does not appear in the word {word}.')

# Exercise 7: Min, Max, Sum
# Instructions
# Create a list of numbers from one to one million and then use min() and max()
# to make sure your list actually starts at one and ends at one million.
# Use the sum() function to see how quickly Python can add a million numbers.

numbers_list = list(range(1, 1_000_001))  # list of numbers from 1 to 1 million inclusive
print(f'The minimum number is: {min(numbers_list)}')
print(f'The maximum number is: {max(numbers_list)}')
print(f'The sum of the numbers is: {sum(numbers_list)}')

# Exercise 8 : List and Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers.
# Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98
# Then, the output should be:
# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

csv_inputs = input('Please enter a sequence of comma-separated numbers: ')
csv_list = csv_inputs.split(',')
print(csv_list)
csv_tuple = tuple(csv_list)
print(csv_tuple)

# Exercise 9 : Random number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.

import random

while True:
    input_number = input('Please type a number between 1 and 9 inclusive: ')
    if 1 > int(input_number) or int(input_number) > 9:
        continue
    break

rand_number = random.randint(1, 9)
if int(input_number) == rand_number:
    print('Winner')
else:
    print('better luck next time')

# Bonus: use a loop that allows the user to keep guessing until they want to quit.

rand_number_2 = random.randint(1, 9)

while True:
    input_number_2 = input('Please type a number between 1 and 9 inclusive: ')
    if input_number_2 == 'quit':
        print('Goodbye')
        break
    if 1 > int(input_number_2) or int(input_number_2) > 9:
        continue
    elif int(input_number_2) == rand_number_2:
        print('Winner')
        break
    else:
        print('Sorry, that is not a number. Try again.')
        continue

# Bonus 2: on exiting the loop tally up and display total games won and lost.

games_lost = 0
games_won = 0

while True:
    input_number_3 = input('Please type a number between 1 and 9 inclusive: ')
    if input_number_3 == 'quit':
        print('You quit :(')
        print(f'You won {games_won} games, and lost {games_lost} games.')
        break
    if 1 > int(input_number_3) or int(input_number_3) > 9:
        continue
    elif int(input_number_3) == random.randint(1, 9):
        print('Winner')
        games_won += 1
    else:
        print('Sorry, that is not a number. Try again.')
        games_lost += 1
        continue