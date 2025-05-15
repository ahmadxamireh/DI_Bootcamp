# Write a program which takes a string and a character as an input, and finds out the number of occurrences the
# character has in the string.
#
# String: Programming is cool!
# Character: o
# 3
#
# String: This is a great example
# Character: y
# 0

string = input('Enter a string: ')
character = input('Enter a character: ')

print(string.count(character))