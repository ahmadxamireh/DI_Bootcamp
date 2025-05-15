# Daily challenge: Solve the Matrix
# Goal: Decrypt a hidden message from a matrix string by processing it column-wise and filtering characters.
#
# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# Python Basics
# Conditionals
# Loops
# Functions
# Lists (2D lists/matrices)
# String Manipulation
#
# Key Python Topics:
#
# Strings
# Lists (2D lists)
# Loops (for loops)
# Conditional statements (if, else)
# String methods (.isalpha(), etc.)
# String concatenation.
#
# Instructions:
#
# You are given a “Matrix” string:
#
MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''

# This represents a grid of characters, and your task is to decode the hidden message within.
# Understanding the Matrix:
# Imagine this string arranged in rows and columns, forming a grid.
# To work with it in Python, you’ll need to transform this string into a 2D list (a list of lists),
# where each inner list represents a row.

# Step 1: Transforming the String into a 2D List
_2d_matrix_list = []
for item in MATRIX_STR.split('\n'):
    _2d_matrix_list.append(list(item))
_2d_matrix_list.pop(0) # remove the first empty item because it is not part of the matrix

# Step 2: Processing Columns
# Neo reads the matrix column by column, from top to bottom, starting from the leftmost column.
# You’ll need to write code that iterates through the columns of your 2D list.
# Think about how you can access the elements of a 2D list by column.

# Step 3: Filtering Alpha Characters
# only select alpha characters (letters).
# For each character in a column, check if it’s an alpha character.
# If it is, add it to a temporary string.
# Think about how you can check if a character is an alphabet letter.

# Step 4: Replacing Symbols with Spaces
# Replace every group of symbols (non-alpha characters) between two alpha characters with a space.
# After you have gathered the alpha characters, you will need to iterate through them, and where there are non alpha characters between them, you will insert a space.
# Think about how you can keep track of when you encounter an alphabet character, and when you encounter a non alphabet character.

# Step 5: Constructing the Secret Message
# Combine the filtered and processed characters to form the decoded message.
# Print the decoded message.

matrix_message = []
matrix_rows_count = len(_2d_matrix_list) # returns the number of rows in the matrix
matrix_columns_count = len(max(_2d_matrix_list, key=len)) # returns the length of the longest row

decoded_message = ''
temp_string = ''

for column in range(matrix_columns_count):
    for row in range(matrix_rows_count):
        char = _2d_matrix_list[row][column]
        matrix_message.append(char)
        if char.isalpha(): # if char is a letter, add it to the temp_string.
            temp_string += char
        elif temp_string: # else: assign it to decoded_message and put a space instead of the symbol.
            decoded_message += temp_string + ' '
            temp_string = ''  # reset temp_string

print(decoded_message)