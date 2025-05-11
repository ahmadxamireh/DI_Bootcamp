# Ex1
print('Hello world\n' * 4, end="") # end="" to remove the empty line at the end

# Ex2
print((99 ** 3) * 8)

# Ex3
# 5 < 3: False; 5 is not smaller than 3.
# 3 == 3: True; 3 equals 3.
# 3 == "3" : False; different types (int vs. str).
# "3" > 3: TypeError; cannot compare str and int.
# "Hello" == "hello" : False; case-sensitive comparison.

# Ex4
computer_brand = 'Apple'
print(f'I have a {computer_brand} computer.')

# Ex5
name = 'Ahmad'
age = '27'
shoe_size = 43
info = f'My name is {name}, I\'m {age} years old and my shoe size is {shoe_size}. I\'m a person with passion for coding'
print(info)

# Ex6
a,b = 9,7
if a > b:
    print('Hello World')

# Ex7
num = input('Please enter a number:\t')
if int(num) % 2 == 0:
    print(f'The number {num} is even.')
else:
    print(f'The number {num} is odd.')

# Ex8
usr = input('Please enter your name:\t')
if usr.lower() == name.lower(): # to avoid case sensitivity
    print('Yooo, your parents called you after me!🥳')
else:
    print('Your name could have been better.🙂')

# Ex9
height = input('Please enter your height in cm:\t')
if int(height) > 145:
    print('You are tall enough to ride the DI Rollercoaster!🎢')
else:
    print('Access denied! You are a midget, grow up some then come back.🚫')