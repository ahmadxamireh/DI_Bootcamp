import json

# Retrieve the data into the python file, inside a variable called family.
with open('file.json', 'r') as file:
    family = json.load(file)

# Nicely print the details about Jane's children
print("Jane's children:")
for child in family["children"]:
    print(f"Name: {child['firstName']}, Age: {child['age']}")

# inside the family variable, add to each child a key favorite_color with a value
favorite_colors = ["blue", "green"]  # You can choose any colors
for i, child in enumerate(family["children"]):
    child["favorite_color"] = favorite_colors[i]

# Then, save back all the new data into the .json file
with open('file.json', 'w') as file:
    json.dump(family, file, indent=2)
