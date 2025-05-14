# Challenge 1: Letter Index Dictionary
# Goal: Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).
# Instructions:
# 1. User Input:
# Ask the user to enter a word.
# Store the input word in a variable.
word = input("Please enter a word: ").lower()

# 2. Creating the Dictionary:
# Iterate through each character of the input word using a loop.
# And check if the character is already a key in the dictionary.
# If it is, append the current index to the list associated with that key.
# If it is not, create a new key-value pair in the dictionary.
# Ensure that the characters (keys) are strings.
# Ensure that the indices (values) are stored in lists.

char_dictionary = {}
for i in range(len(word)):
    if word[i] not in char_dictionary:
        char_dictionary[word[i]] = [i]
    else:
        char_dictionary[word[i]].append(i)

# 3. Expected Output:
# For the input “dodo”, the output should be: {"d": [0, 2], "o": [1, 3]}.
# For the input “froggy”, the output should be: {"f": [0], "r": [1], "o": [2], "g": [3, 4], "y": [5]}.
# For the input “grapes”, the output should be: {"g": [0], "r": [1], "a": [2], "p": [3], "e": [4], "s": [5]}.

print(f'For the input "{word}", the output should be: {char_dictionary}')

# Challenge 2: Affordable Items
# Goal: Create a program that prints a list of items that can be purchased with a given amount of money.
# Instructions:
# 1. Store Data:
# * You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign).
# * You will also be given a string (wallet) representing the amount of money you have.

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

# 2. Data Cleaning:

cleaned_wallet = int(wallet.replace('$', ''))
cleaned_items = {}
for item, price in items_purchase.items():
    cleaned_items[item] = int(price.replace('$', '').replace(',', ''))

# 3. Determining Affordable Items:

affordable_items = {}
affordable_total = 0
for item, price in cleaned_items.items():
    if price <= cleaned_wallet and (affordable_total + price) <= cleaned_wallet:
        affordable_items[item] = price
        affordable_total += price

# 4. Sorting and Output:
# Sort the list of affordable items in alphabetical order.
# If the list is empty (no items can be afforded), return the string “Nothing”.
# Otherwise, return the sorted list.

# Given:
# items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
# wallet = "$300"
# The output should be: ["Bread", "Fertilizer", "Water"].

# Given:
# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100"
# The output should be: ["Apple", "Bananas", "Fan", "Honey", "Spoon"].

# Given:
# items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
# wallet = "$1"
# The output should be: "Nothing".

print(f'{sorted(affordable_items.keys()) if len(affordable_items) != 0 else 'Nothing'}')