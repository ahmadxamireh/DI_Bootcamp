# 🌟 Exercise 1: Favorite Numbers
# Instructions:
# Create a set called my_fav_numbers and populate it with your favorite numbers.
# Add two new numbers to the set.
# Remove the last number you added to the set.
# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.

my_fav_numbers = {7, 9, 69, 97}
my_fav_numbers.add(101)
my_fav_numbers.add(49)
my_fav_numbers.remove(49)
print(f'My Favorite Numbers: {my_fav_numbers}')
friend_fav_numbers = {1, 2, 3, 4}
print(f'Friend\'s Favorite Numbers: {friend_fav_numbers}')
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f'Our Favorite Numbers: {our_fav_numbers}') # unordered set

# 🌟 Exercise 2: Tuple
# Instructions:
# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

int_tuple = (1, 2, 3, 4, 5)
new_numbers = (6, 7, 8, 9)
# int_tuple += (6, 7, 8, 9) # this line creates a new tuple and then reassigns the value of the original
new_tuple = int_tuple + new_numbers
print(new_tuple)
print(int_tuple) # this tuple was not modified

# 🌟 Exercise 3: List Manipulation
# Instructions:
# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list.
# Remove "Blueberries" from the list.
# Add "Kiwi" to the end of the list.
# Add "Apples" to the beginning of the list.
# Count how many times "Apples" appear in the list.
# Empty the list.
# Print the final state of the list.

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(f'The basket contains {basket.count("Apples")} apples.')
basket.clear()
print(f'The basket now contains {len(basket)} items: {basket}.')

# 🌟 Exercise 4: Floats
# Instructions:
# Recap: What is a float? What’s the difference between a float and an integer?
# Create a list containing the following sequence of mixed floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?

mixed_list = []
for i in range(1, 5):
    mixed_list.append(i + 0.5)
    mixed_list.append(i + 1)
print(f'Mixed List: {mixed_list}')

# 🌟 Exercise 5: For Loop
# Instructions:
# Write a for loop to print all numbers from 1 to 20, inclusive.
# Write another for loop that prints every number from 1 to 20 where the index is even.

for _ in range(1, 21): # _ is a variable name
    print(_)

for number in range(1, 21):
    if number % 2 == 0:
        print(f'{number} is even.')

# 🌟 Exercise 6: While Loop
# Instructions:
# Write a while loop that keeps asking the user to enter their name.
# Stop the loop if the user’s input is your name.

while True:
    user_name = input('Enter your name (Hint: my name is Ahmad): ')
    if user_name.lower() == 'ahmad':
        print(f'Hello {user_name.capitalize()}!')
        break

# 🌟 Exercise 7: Favorite Fruits
# Key Python Topics:
# Instructions:
# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
# Ask the user to input the name of any fruit.
# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!"

while True:
    user_input = input('Enter your favorite fruits (separated by spaces): ')
    if user_input == '':
        continue # avoid empty string
    favorite_fruits = user_input.split(sep=' ') # split creates a new list
    print(f'Your favorite fruits are: {favorite_fruits}.')
    while True:
        random_fruit_input = input('Enter a fruit: ')
        if random_fruit_input == '':
            continue
        else:
            break
    if random_fruit_input.lower() in [fruit.lower() for fruit in favorite_fruits]: # to avoid case sensitivity
        print('You chose one of your favorite fruits! Enjoy!')
    else:
        print('You chose a new fruit. I hope you enjoy it!')
    break

# 🌟 Exercise 8: Pizza Toppings
# Instructions:
# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.

i = 1 # to number inputs
pizza_toppings = []
print('Enter pizza toppings one by one (click enter after each topping, type quit to exit):')

while True:
    topping_input = input(f'Topping #{i}: ')
    if topping_input == '':
        continue
    elif topping_input.lower() == 'quit':
        break
    print(f'Adding {topping_input} to your pizza.')
    pizza_toppings.append(topping_input)
    i += 1
num_of_toppings = len(pizza_toppings)
print(f'Your pizza has {num_of_toppings} toppings, they are: {', '.join(pizza_toppings)}.')
print(f'Your total cost is ${10 + 2.50 * num_of_toppings}')

# 🌟 Exercise 9: Cinemax Tickets
# Instructions:
# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

family_ages_input = input('Enter the age of each person in the family (separated by spaces): ')
family_ages = family_ages_input.split(sep=' ')
tickets_total = 0
for age in [int(_) for _ in family_ages]:
    if age < 3:
        tickets_total += 0
    elif 3 <= age <= 12:
        tickets_total += 10
    else:
        tickets_total += 15
print(f'The total ticket cost is ${tickets_total}.')

# Bonus:
# Imagine a group of teenagers wants to see a restricted movie (only for ages 16–21).
# Write a program to:
# Ask for each person’s age.
# Remove anyone who isn’t allowed to watch.
# Print the final list of attendees.

attendees_ages = []
num_of_people = int(input("How many people want to watch the restricted movie? "))

for i in range(num_of_people):
    age = int(input(f"Enter age for person {i + 1}: "))
    if 16 <= age <= 21:
        attendees_ages.append(age)  # only allowed ages are added

print(f"The list of people allowed to watch the movie (ages): {attendees_ages}")

# 🌟 Exercise 10: Sandwich Orders
# Instructions:
# Using the list:
# sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
# The deli has run out of “Pastrami”, so use a loop to remove all instances of “Pastrami” from the list.
# Prepare each sandwich, one by one, and move them to a list called finished_sandwiches.
# Print a message for each sandwich made, such as: "I made your Tuna sandwich."
# Print the final list of all finished sandwiches.

sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
print(f'Sandwich orders: {sandwich_orders}')
finished_sandwiches = []
while 'Pastrami' in sandwich_orders:
    sandwich_orders.remove('Pastrami')

for order in sandwich_orders:
    finished_sandwiches.append(order)
    print(f'I made your {order} sandwich.')

print(f'The list of finished sandwiches is: {finished_sandwiches}.')