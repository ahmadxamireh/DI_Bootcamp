# 🌟 Exercise 1 : Hello World
# Instructions
# Print the following output in one line of code:
#
# Hello world
# Hello world
# Hello world
# Hello world
print('Hello world\n' * 4, end="") # end="" to remove the empty line at the end

# 🌟 Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of:
#
# (99^3)*8 (meaning 99 to the power of 3, times 8).
print((99 ** 3) * 8)

# 🌟 Exercise 3 : What is the output ?
# Instructions
# Predict the output of the following code snippets:
# >>> 5 < 3: False; 5 is not smaller than 3.
# >>> 3 == 3: True; 3 equals 3.
# >>> 3 == "3" : False; different types (int vs. str).
# >>> "3" > 3: TypeError; cannot compare str and int.
# >>> "Hello" == "hello" : False; case-sensitive comparison.

# 🌟 Exercise 4 : Your computer brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable, print a sentence that states the following:
# "I have a <computer_brand> computer."
computer_brand = 'Apple'
print(f'I have a {computer_brand} computer.')

# 🌟 Exercise 5 : Your information
# Instructions
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
# Have your code print the info message.
# Run your code.
name = 'Ahmad'
age = '27'
shoe_size = 43
info = f'My name is {name}, I\'m {age} years old and my shoe size is {shoe_size}. I\'m a person with passion for coding'
print(info)

# 🌟 Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable’s value should be a number.
# If a is bigger than b, have your code print "Hello World".
a,b = 9,7
if a > b:
    print('Hello World')

# 🌟 Exercise 7 : Odd or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.
num = input('Please enter a number:\t')
if int(num) % 2 == 0:
    print(f'The number {num} is even.')
else:
    print(f'The number {num} is odd.')

# 🌟 Exercise 8 : What’s your name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name. Print out a funny message based on the outcome.
usr = input('Please enter your name:\t')
if usr.lower() == name.lower(): # to avoid case sensitivity
    print('Yooo, your parents called you after me!🥳')
else:
    print('Your name could have been better.🙂')

# 🌟 Exercise 9 : Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
# If they are over 145 cm, print a message that states they are tall enough to ride.
# If they are not tall enough, print a message that says they need to grow some more to ride.
height = input('Please enter your height in cm:\t')
if int(height) > 145:
    print('You are tall enough to ride the DI Rollercoaster!🎢')
else:
    print('Access denied! You are a midget, grow up some then come back.🚫')