# Daily challenge GOLD: Caesar Cypher
# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
#
# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.
#
# The method is named after Julius Caesar, who used it in his private correspondence.
#
# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

name = input('Hello there, what is your name? ')
action = input(f'Hi {name}. Would you like to encrypt or decrypt? ').lower()
message = input('What is your message? ')
shift = int(input('How many times would you like to shift your message? '))

# chr(__: int) Return the string representing a character whose Unicode code point is the integer i. For example, chr(97) returns the string 'a', while chr(8364) returns the string '€'.
# ord(__c: str) Given a string representing one Unicode character, return an integer representing the Unicode code point of that character. For example, ord('a') returns the integer 97 and ord('€') (Euro sign) returns 8364.

ciphered_message = ''
if action == 'encrypt':
    for letter in message:
        ciphered_message += chr(ord(letter) - shift)
    print(f'Your encrypted message is: {ciphered_message}')
elif action == 'decrypt':
    for letter in message:
        ciphered_message += chr(ord(letter) + shift)
    print(f'Your decrypted message is: {ciphered_message}')
else:
    print('Invalid action.')

