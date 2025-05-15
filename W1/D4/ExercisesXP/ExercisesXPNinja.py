# Exercise 1 : What’s your name ?
# Instructions
# 1. Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# 2. middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and
# the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name, last_name, middle_name=''):
    if middle_name:
        print(f'{first_name} {middle_name} {last_name}'.title())
    else:
        print(f'{first_name} {last_name}'.title())

get_full_name(first_name="john", middle_name="hooker", last_name="lee")
get_full_name("bruce", "lee")

# ----------------------------------------------------------------------------------------------------
# Exercise 2 : From English to Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is
# separated with a slash /.

def english_to_morse(english_text):
    morse_code = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..',
        'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
        's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----',
        '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': '/', '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', '@': '.--.-.', '&': '.-...', ':': '---...',
        ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '\'': '.----.',
    }

    morse_text = ''
    for letter in english_text.lower():
        morse_text += morse_code[letter] + ' '
    return morse_text

def morse_to_english(morse_text):
    morse_code = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i',
        '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
        '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z', '.----': '1',
        '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '/': ' ', '.-.-.-': '.', '--..--': ',', '..--..': '?', '-.-.--': '!', '.--.-.': '@', '.-...': '&', '---...': ':',
        '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.----.': '\''
    }

    english_text = ''
    for code in morse_text.split():
        english_text += morse_code.get(code, '')
    return english_text

test_text = "Hello World!"
print("Original text:", test_text)
print(f"To Morse: {english_to_morse(test_text)}")

morse_result = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--"
print("\nMorse code:", morse_result)
print(f"Back to English: {morse_to_english(morse_result)}")

# ----------------------------------------------------------------------------------------------------
# Exercise 3 : Box of stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
#
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):

    max_width = max(len(arg) for arg in args)
    output = '*' * (max_width + 4)

    for arg in args:
        output += f'\n* {arg.ljust(max_width)} *' # left alignment

    output += '\n'+'*' * (max_width + 4)

    print(output)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# ----------------------------------------------------------------------------------------------------
# Exercise 4 : What is the purpose of this code?
# Analyse this code before executing it. What is the purpose of this code?

def insertion_sort(alist):
    for index in range(1, len(alist)):

        currentvalue = alist[index] # start at the second value, because a list with 1 value is sorted
        position = index # start at index 1

        # while the index is not 0 and the value on the left of the current value is bigger than it
        # 1. shift the value on the left to the current position
        # 2. decrement the index by one
        # 3. now we compare the current value to the value which is at index-2 and repeat
        while position > 0 and alist[position - 1] > currentvalue:
            alist[position] = alist[position - 1]
            position = position - 1
        #if the loop breaks, then place the current value at the index we reached
        alist[position] = currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

