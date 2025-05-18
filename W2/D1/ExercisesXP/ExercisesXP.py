# 🌟 Exercise 1: Cats
#
# Instructions:
#
# Use the provided Cat class to create three cat objects. Then, create a function to find the oldest cat and print
# its details.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
# Use the Cat class to create three cat objects with different names and ages.
cat1 = Cat("Fluffy", 3)
cat2 = Cat("Bobby", 6)
cat3 = Cat("Mittens", 1)

# Step 2: Create a Function to Find the Oldest Cat
# Create a function that takes the three cat objects as input.
# Inside the function, compare the ages of the cats to find the oldest one.
# Return the oldest cat object.
def find_oldest_cat(cat1, cat2, cat3):
    oldest_cat = cat1
    if cat2.age > cat1.age:
        oldest_cat = cat2
    if cat3.age > cat2.age:
        oldest_cat = cat3
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# Step 3: Print the Oldest Cat’s Details
# Call the function to get the oldest cat.
# Print a formatted string: “The oldest cat is <cat_name>, and is <cat_age> years old.”
# Replace <cat_name> and <cat_age> with the oldest cat’s name and age.
find_oldest_cat(cat1, cat2, cat3)

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 2 : Dogs
# Goal: Create a Dog class, instantiate objects, call methods, and compare dog sizes.
#
# Instructions:
#
# Create a Dog class with methods for barking and jumping. Instantiate dog objects, call their methods, and compare
# their sizes.
#
# Step 1: Create the Dog Class
# Create a class called Dog.
# In the __init__ method, take name and height as parameters and create corresponding attributes.
# Create a bark() method that prints “ goes woof!”.
# Create a jump() method that prints “ jumps cm high!”, where x is height * 2.

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

# Step 2: Create Dog Objects
# Create davids_dog and sarahs_dog objects with their respective names and heights.
davids_dog = Dog("Jojo", 5)
sarahs_dog = Dog("Milo", 10)

# Step 3: Print Dog Details and Call Methods
# Print the name and height of each dog.
print(f"Davids dog is {davids_dog.name} and is {davids_dog.height} cm tall.")
print(f"Sarahs dog is {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")

# Call the bark() and jump() methods for each dog.
davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

# Step 4: Compare Dog Sizes
if davids_dog.height > sarahs_dog.height:
    print(f'David\'s dog {davids_dog.name} is taller.')
elif davids_dog.height < sarahs_dog.height:
    print(f'Sarah\'s dog {sarahs_dog.name} is taller.')
else:
    print(f'Both dogs are the same size.')

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 3 : Who’s the song producer?
# Goal: Create a Song class to represent song lyrics and print them.
#
# Instructions:
#
# Create a Song class with a method to print song lyrics line by line.
#
# Step 1: Create the Song Class
# Create a class called Song.
# In the __init__ method, take lyrics (a list) as a parameter and create a corresponding attribute.
# Create a sing_me_a_song() method that prints each element of the lyrics list on a new line.

class Song:
    def __init__(self, lyrics: list):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 4 : Afternoon at the Zoo
# Goal:
#
# Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them,
# and organizing them into alphabetical groups.
#
# Instructions
# Step 1: Define the Zoo Class
# 1. Create a class called Zoo.

class Zoo:
    # 2. Implement the __init__() method:
    # It takes a string parameter zoo_name, representing the name of the zoo.
    # Initialize an empty list called animals to keep track of animal names.
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    # 3. Add a method add_animal(new_animal):
    # This method adds a new animal to the animals list.
    # Do not add the animal if it is already in the list.
    def add_animal(self, animal_name):
        if animal_name not in self.animals:
            self.animals.append(animal_name)
            print(f"New animal added: {animal_name}")
        else:
            print(f"Animal already exists: {animal_name}")

    # 4. Add a method get_animals():
    # This method prints all animals currently in the zoo.
    def get_animals(self):
        print(f"Animals in {self.zoo_name}:")
        for animal in self.animals:
            print(f"- {animal}")

    # 5. Add a method sell_animal(animal_sold):
    # This method checks if a specified animal exists on the animals list and if so, remove from it.
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"Animal sold: {animal_sold}")
        else:
            print(f"Animal does not exist: {animal_sold}")

    # 6. Add a method sort_animals():
    # This method sorts the animals alphabetically.
    # It also groups them by the first letter of their name.
    # The result should be a dictionary where:
    # Each key is a letter.
    # Each value is a list of animals that start with that letter.
    def sort_animals(self):
        self.animals.sort()
        animals_dict = {}
        for animal in self.animals:
            letter = animal[0]
            if letter in animals_dict:
                animals_dict[letter].append(animal)
            else:
                animals_dict[letter] = [animal]
        print(animals_dict)
        return animals_dict

    # 7. Add a method get_groups():
    # This method prints the grouped animals as created by sort_animals().
    def get_groups(self):
        print("Animal groups:")
        for letter, animals in self.sort_animals().items():
            print(f"{letter}: {animals}")

# Step 2: Create a Zoo Object
# Create an instance of the Zoo class and pass a name for the zoo.
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Call the Zoo Methods
# Use the methods of your Zoo object to test adding, selling, displaying, sorting, and grouping animals.
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()
