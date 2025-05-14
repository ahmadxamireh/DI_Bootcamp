# Exercise 1: Birthday Look-up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message
# (“Sorry, we don’t have the birthday information for <person’s name>”)

# Exercise 3: Add Your Own Birthday
# Instructions
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# I combined the 3 exercises in one solution

birthdays = {
    'Michael': '1947/01/24',
    'Alex': '1991/05/27',
    'Roman': '1989/04/04',
    'Nico': '2000/10/17',
    'Arthur': '2025/05/20'
}

user_name = input("Please enter your name: ")

print(f'Hello, {user_name}.\nYou can look up the birthdays of the people in the list!”')

# Ask the user for a person’s name – store it in a variable.
new_name = input('Please enter a name to add to the birthdays list: ')
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
new_birthday = input(f'Please enter {new_name}\'s birthday: ')
# Now add this new data into your dictionary.
birthdays[new_name] = new_birthday

print(f'The list of names is: {', '.join(birthdays.keys())}.')

while True:
    # Ask the user to give you a person’s name and store the answer in a variable.
    name = input("Please enter a person\'s name (type quit to exit): ").lower()
    if name == 'quit':
        break
    if name not in [person.lower() for person in birthdays.keys()]:
        print(f'Sorry, we don’t have the birthday information for {name.capitalize()}.')
        continue
    # Get the birthday of the name provided by the user.
    name_birthday = birthdays[name.capitalize()]
    # Print out the birthday with a nicely-formatted message.
    print(f'{name.capitalize()}\'s birthday is {name_birthday}.')
    break

# Exercise 4: Fruit Shop

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

# 1. Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.

print(f'Our current stock is: {', '.join([f'{name} costs {stock}' for name, stock in items.items()])}.')

# 2. Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_price = sum(details['price'] * details['stock'] for details in items.values())

# total_price = 0
# for item, details in items.items():
#     total_price += details["price"] * details["stock"]

print(f'The total price is: {total_price}.')