# Exercise: Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert it into a list using Python (don’t do it by hand!).
cars_list = cars.split(", ")

# Print out a message saying how many manufacturers/companies are in the list.
print(f'We have {len(cars_list)} manufacturers/companies in total.')

# Print the list of manufacturers in reverse/descending order (Z-A).
print(sorted(cars_list, reverse=True))

# Using loops or list comprehension:
# 1. Find out how many manufacturers’ names have the letter ‘o’ in them.
name_with_o = [car for car in cars_list if 'o' in car]
print(f'There are {len(name_with_o)} manufacturers/companies that have the letter \'o\' in the name.')

# 2. Find out how many manufacturers’ names do not have the letter ‘i’ in them.
name_with_o = [car for car in cars_list if 'i' not in car]
print(f'There are {len(name_with_o)} manufacturers/companies that do not have the letter \'i\' in the name.')

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_list_2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Remove these programmatically. (Hint: you can use set to help you).
unique_cars = set(cars_list_2)

# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”),
# also print out a message saying how many companies are now in the list.
print(f'The {len(unique_cars)} unique companies are: {', '.join(unique_cars)}.')

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

print([car[::-1] for car in sorted(unique_cars)]) # [::-1] reverses a string

# Complex way to do it
# print([''.join([car[i] for i in range(len(car)-1, -1, -1)]) for car in sorted(unique_cars)])