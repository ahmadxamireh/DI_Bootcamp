# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results.
# For example, if the user inputs: 100,150,180
# The output should be:
# 18,22,24
import math
import random

c = 50
h = 30
user_input = input('Please enter a comma-separated string of numbers (ex: 100,150,180): ')
d = user_input.split(',')
result = []
for i in d:
    q = round(math.sqrt((2 * c * int(i))/ h)) # math.sqrt(9) or (9 ** 0.5)
    result.append(str(q))

print(f'{','.join(result)}')

# Exercise 2 : List of integers
# Instructions
# Given a list of 10 integers to analyze. For example:
#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76]
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

# Store the list of numbers in a variable.
numbers_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

# Print the following information:
# a. The list of numbers – printed in a single line
print(f'The list of numbers is: {numbers_list}.')

# b. The list of numbers – sorted in descending order (largest to smallest)
numbers_list.sort(reverse=True)
print(f'The list in descending order is: {numbers_list}.')

# c. The sum of all the numbers
print(f'The sum of the numbers is: {sum(numbers_list)}.')

# A list containing the first and the last numbers.
first_and_last = [numbers_list[0], numbers_list[-1]]
print(f'The first and last elements in the list: {first_and_last}.')

# A list of all the numbers greater than 50.
greater_than_50 = []
for numbers in numbers_list:
    if numbers > 50:
        greater_than_50.append(numbers)
print(f'The list of numbers greater than 50 is {greater_than_50}.')
# or greater_than_50 = [n for n in numbers if n > 50]

# A list of all the numbers smaller than 10.
smaller_than_10 = []
for number in numbers_list:
    if number < 10:
        smaller_than_10.append(number)
print(f'The list of numbers greater than 50 is {smaller_than_10}.')
# or smaller_than_10 = [n for n in numbers if n < 10]

# A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
squared_numbers = []
for number in numbers_list:
    squared_numbers.append(str(number ** 2))
print(f'The squared numbers are: {' '.join(squared_numbers)}.')
# or squared_numbers = [n ** 2 for n in numbers]

# The numbers without any duplicates – also print how many numbers are in the new list.
unique_numbers = list(set(numbers_list)) # typecasting to set to remove duplicates
print(f'The unique numbers are: {unique_numbers}.')

# The average of all the numbers.
numbers_average = sum(numbers_list) / len(numbers_list)
print(f'The average numbers are: {numbers_average}.')

# The largest number.
largest_number = max(numbers_list)
print(f'The largest number is {largest_number}.')

# 10.The smallest number.
smallest_number = min(numbers_list)
print(f'The smallest number is {smallest_number}.')

# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
sum_of_numbers = 0
number_of_values = 0
for number in numbers_list:
    sum_of_numbers += number
    number_of_values += 1
print(f'The manual sum of numbers is {sum_of_numbers}.')

average_of_numbers = sum_of_numbers / number_of_values
print(f'The average of numbers is {average_of_numbers}.')

smallest_number = numbers_list[0]
for i in range(0, number_of_values - 1):
    if smallest_number > numbers_list[i + 1]:
        smallest_number = numbers_list[i + 1]

print(f'The smallest number is {smallest_number}.')

# 12.Bonus: Instead of using pre-defined lists of numbers,
# ask the user for 10 numbers between -100 and 100.
# Ask the user for an integer between -100 and 100 – repeat this question 10 times.
# Each number should be added into a variable that you created earlier.

print("Please enter 10 numbers between -100 and 100:")
user_numbers = []
while len(user_numbers) < 10:
    number = int(input(f'Enter number #{len(user_numbers)+1}: '))
    if -100 <= number <= 100:
        user_numbers.append(number)
    else:
        print("Number must be between -100 and 100. Try again.")
print(f'The list of numbers is: {user_numbers}.')

# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself.
# Make sure that these random integers are between -100 and 100.
random_numbers = [random.randint(-100, 100)]
print("Randomly generated numbers:", random_numbers)

# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random!
# Generate a random positive integer no smaller than 50.

random_integer = random.randint(50, 100)
random_list = [random.randint(-100, 100) for _ in range(random_integer)]
print(f"Randomly generated {random_integer} numbers are:", random_list)

# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?
# Answer: It will work if we loop over the list itself or its length, but will not work if we hardcode 10.

# Exercise 3: Working on a paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
paragraph = """
She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word.
Debbie knew she was being selfish and unreasonable. She understood why the others in the room were angry and frustrated with her and the way she was acting. In her eyes, it didn't really matter how they felt because she simply didn't care.
"It was so great to hear from you today and it was such weird timing," he said. "This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago. I'd love to get together and tell you about it if you're up for a cup of coffee," he continued, laying the trap he'd been planning for years.
"""

# Characters to remove
punctuation = ['.', ',', '"', "'", '?', '!']

clean_paragraph = paragraph
for char in punctuation:
    clean_paragraph = clean_paragraph.replace(char, '')

# Convert to lowercase to avoid case sensitivity
clean_paragraph = clean_paragraph.lower()

words = clean_paragraph.split(' ')
sentences = clean_paragraph.split('.')

# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
print(f'The paragraph has {len(paragraph)} characters.')

# How many sentences it contains.
print(f'The paragraph has {len(sentences)} sentences.')

# How many words it contains.
print(f'The paragraph has {len(words)} words.')

# How many unique words it contains.
print(f'The paragraph has {len(set(words))} unique words.')

# Bonus: How many non-whitespace characters it contains.
print(f'The paragraph has {len(''.join(words))} non-whitespace characters.')

# Bonus: The average amount of words per sentence in the paragraph.
print(f'The average amount of words per sentence is {len(words) / len(sentences)}.')

# Bonus: the amount of non-unique words in the paragraph.
words_count_dict = {}# a dictionary to see how many times a word was repeated
for word in words:
    if word in words_count_dict:
        words_count_dict[word] += 1
    else:
        words_count_dict[word] = 1

non_unique_words = 0
for word in words_count_dict:
    if words_count_dict[word] > 1:
        non_unique_words += 1

print(f'The number of non-unique words is {non_unique_words}.')

# Exercise 4 : Frequency Of The Words
# Instructions
# Write a program that prints the frequency of the words from the input.
# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.
# Then, the output should be:
#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1

input_sentence = input('Enter a sentence: ')

word_frequency = {} # same as before, using dictionary to check frequency
for word in input_sentence.split(' '):
    if word in word_frequency:
        word_frequency[word] += 1
    else:
        word_frequency[word] = 1

for word in word_frequency:
    print(f'{word}:{word_frequency[word]}')