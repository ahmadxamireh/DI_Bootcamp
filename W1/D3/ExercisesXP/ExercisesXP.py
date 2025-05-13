# 🌟 Exercise 1: Converting Lists into Dictionaries
# Instructions
# You are given two lists. Convert them into a dictionary where the first
# list contains the keys and the second list contains the corresponding values.
# Lists:
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected Output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = dict(zip(keys, values))
print(dictionary)

# 🌟 Exercise 2: Cinemax #2
# Instructions
# Write a program that calculates the total cost of movie tickets for a family based on their ages.
# Family members’ ages are stored in a dictionary.
# The ticket pricing rules are as follows:
# Under 3 years old: Free
# 3 to 12 years old: $10
# Over 12 years old: $15
# Family Data:
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# Loop through the family dictionary to calculate the total cost.
# Print the ticket price for each family member.
# Print the total cost at the end.

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

tickets_total = 0
for member in family:
   if 3 <= family[member] <= 12:
      tickets_total += 10
      print(f'{member.capitalize()} pays ${10}')
   elif family[member] > 12:
      tickets_total += 15
      print(f'{member.capitalize()} pays ${15}')
   else:
      print(f'{member.capitalize()} pays nothing!')

print(f'The total cost is ${tickets_total}')

# Bonus: Allow the user to input family members’ names and ages, then calculate the total ticket cost.
new_member_name = input("What is your new family member's name? ")
new_member_age = input("What is your new family member's age? ")

family[new_member_name] = int(new_member_age) # add it to the dictionary

# using ternary operator instead of nested loops again (I love ternary operator)
new_member_cost = 15 if int(new_member_age) > 12 else 10 if 3 <= int(new_member_age) <= 12 else 0
print(f'{new_member_name.capitalize()} pays {'nothing!' if new_member_cost == 0 else f'${new_member_cost}'}')
print(f'The new total cost is ${tickets_total + new_member_cost}')

# 🌟 Exercise 3: Zara
# Key Python Topics:
# Instructions
# Create and manipulate a dictionary that contains information about the Zara brand.
# Brand Information:
# name: Zara
# creation_date: 1975
# creator_name: Amancio Ortega Gaona
# type_of_clothes: men, women, children, home
# international_competitors: Gap, H&M, Benetton
# number_stores: 7000
# major_color:
#     France: blue,
#     Spain: red,
#     US: pink, green
# Create a dictionary called brand with the provided data.

brand = {
   'name': 'Zara',
   'creation_date': 1975,
   'creator_name': 'Amancio Ortega Gaona',
   'type_of_clothes': ['men', 'women', 'children', 'home'],
   'international_competitors': ['Gap', 'H&M', 'Benetton'],
   'number_stores': 7_000,
   'major_color': {'France': 'blue', 'Spain': 'red', 'US': ['pink', 'green']}
}

# Modify and access the dictionary as follows:
# Change the value of number_stores to 2.
brand['number_stores'] = 2

# Print a sentence describing Zara’s clients using the type_of_clothes key.
print(f'{brand["name"].upper()} serves a wide variety of clients: {', '.join(brand['type_of_clothes'])}.')

# Add a new key country_creation with the value Spain.
brand['country_creation'] = 'Spain'

# Check if international_competitors exists and, if so, add “Desigual” to the list.
if len(brand['international_competitors']) != 0:
   brand['international_competitors'].append('Desigual')

# Delete the creation_date key.
del brand['creation_date']

# Print the last item in international_competitors.
print(brand['international_competitors'][-1])

# Print the major colors in the US.
print(f'The major colors in the US are {' and '.join(brand["major_color"]["US"])}.')

# Print the number of keys in the dictionary.
print(f'The number of keys in the dictionary is {len(brand.keys())}.')

# Print all keys of the dictionary.
print(f'The keys in the dictionary are {list(brand.keys())}.')

# Bonus: Create another dictionary called more_on_zara with creation_date and number_stores.
# Merge this dictionary with the original brand dictionary and print the result.
more_on_zara = {
   'creation_date': 2025,
   'number_stores': 100
}
brand.update(more_on_zara)
print(f'The latest dictionary is {brand}.')

# 🌟 Exercise 4: Disney Characters
# Instructions
# You are given a list of Disney characters.
# Create three dictionaries based on different patterns as shown below:
# character List: users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Expected Results:
# 1. Create a dictionary that maps characters to their indices:
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
disney_characters = {name: users.index(name) for name in users}
print(disney_characters)

# 2. Create a dictionary that maps indices to characters:
# {0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
new_dictionary = dict(enumerate(users))
print(new_dictionary)

# 3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
sorted_characters = sorted(users)
sorted_dictionary = {name: sorted_characters.index(name) for name in sorted_characters}
print(sorted_dictionary)