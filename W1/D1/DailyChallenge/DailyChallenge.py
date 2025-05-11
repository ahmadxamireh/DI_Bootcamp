# 1. Ask for User Input:
# The string must be exactly 10 characters long.
import random

user_input = input('Please type something that is 10 characters long:\t')

# 2. Check the Length of the String:
# If the string is less than 10 characters, print: "String not long enough."
# If the string is more than 10 characters, print: "String too long."
# If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.
if len(user_input) < 10:
    print('String not long enough.')
elif len(user_input) > 10:
    print('String too long.')
else:
    print('Perfect string')
    # 3. Print the First and Last Characters:
    # Once the string is validated, print the first and last characters.
    print(f'The first character is {user_input[0]}.')
    print(f'The last character is {user_input[-1]}.')
    # 4.Build the String Character by Character:
    # Using a for loop, construct and print the string character by character.
    # Start with the first character, then the first two characters, and so on, until the entire string is printed.
    for i in range(len(user_input) + 1): # +1 to accommodate for the last char
        print(user_input[:i])
    #5. Bonus: Jumble the String (Optional)
    # As a bonus, try shuffling the characters in the string and print the newly jumbled string.
    temp = list(user_input) # converting to a list of chars
    random.shuffle(temp)
    print(''.join(temp))