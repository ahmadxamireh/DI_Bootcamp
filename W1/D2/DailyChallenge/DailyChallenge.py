# Challenge 1: Multiples of a Number
# Instructions:
# 1. Ask the user for two inputs:
# A number (integer).

first_input = input('Please enter a number (integer): ')

# A length (integer).

second_input = input('Please enter a length (integer): ')

# 2. Create a program that generates a list of multiples of the given number.
# 3. The list should stop when it reaches the length specified by the user.

list_of_multiples = []
for i in range(1, int(second_input) + 1):
    list_of_multiples.append(i * int(first_input))

print(list_of_multiples)

# Challenge 2: Remove Consecutive Duplicate Letters
# Instructions:
# 1. Ask the user for a string.

string_input = input('Please enter a string: ')

# 2. Write a program that processes the string to remove consecutive duplicate letters.
# The new string should only contain unique consecutive letters.
# For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).

string_as_list = list(string_input.lower())
i = 0

while i < len(string_as_list) - 1:
    if string_as_list[i] == string_as_list[i+1]:
        string_as_list.pop(i+1)
    else:
        i += 1

# 3. The program should print the modified string.
print(''.join(string_as_list))