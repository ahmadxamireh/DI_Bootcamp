# 🌟 Exercise 1: Pets
#
# Instructions:
#
# Use the provided Pets and Cat classes to create a Siamese breed, instantiate cat objects, and use the Pets class to
# manage them.
import random


class Pets:
    """
    Represents a generic class of pets that have a name and a walk method.

    :ivar animals: A list of animal objects that the class manages.
    """


    def __init__(self, animals):
        self.animals = animals


    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    """
    Represents a Cat with basic attributes and a simple behavior.

    :ivar is_lazy: Indicates whether the cat is lazy.
    :ivar name: Name of the cat.
    :ivar age: Age of the cat.
    """
    is_lazy = True


    def __init__(self, name, age):
        self.name = name
        self.age = age


    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    """
    Represents a Bengal cat, a subclass of Cat.
    It inherits all attributes and methods from Cat.
    """


    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    """
    Represents a Chartreux cat, a subclass of Cat.
    It inherits all attributes and methods from Cat.
    """


    def sing(self, sounds):
        return f'{sounds}'


# Step 1: Create the Siamese Class
# Create a class called Siamese that inherits from the Cat class.
# You can add any specific attributes or methods for the Siamese breed, or leave it as is if there are no unique
# behaviors. we should tell them what to add, maybe a new attribute or methods

class Siamese(Cat):
    """
    Represents a Siamese cat, inheriting from the Cat base class.
    It inherits all attributes and methods from Cat.

    :ivar color: The color of the Siamese cat. Defaults to 'White'.
    """
    color = 'White'


    def jump(self):
        return f'{self.name} is jumping'


# Step 2: Create a List of Cat Instances
# Create a list called all_cats that contains instances of Bengal, Chartreux, and Siamese cats.
# Example: all_cats = [bengal_obj, chartreux_obj, siamese_obj]
# Give each cat a name and age.

bengal = Bengal(name='Bella', age=5)
chartreux = Chartreux(name='Doofy', age=2)
siamese = Siamese(name='Milo', age=9)

all_cats = [bengal, chartreux, siamese]

# Step 3: Create a Pets Instance
# Create an instance of the Pets class called sara_pets, passing the all_cats list as an argument.
sara_pets = Pets(all_cats)

# Step 4: Take Cats for a Walk
# Call the walk() method on the sara_pets instance.
# This should print the result of calling the walk() method on each cat in the list.
sara_pets.walk()
print(siamese.jump())
print(siamese.color)


# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 2: Dogs
# Goal: Create a Dog class with methods for barking, running speed, and fighting.
#
# Instructions:
#
# Step 1: Create the Dog Class
# Create a class called Dog with name, age, and weight attributes.
# Implement a bark() method that returns “ is barking”.
# Implement a run_speed() method that returns weight / age * 10.
# Implement a fight(other_dog) method that returns a string indicating which dog won the fight, based on run_speed *
# weight.

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight


    def bark(self):
        return f'{self.name} is barking.'


    def run_speed(self):
        return self.weight / (self.age * 10)


    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f'{self.name} has won the fight!'
        elif self_power < other_power:
            return f'{other_dog.name} has won the fight!'
        else:
            return 'It\'s a tie!'


# Step 2: Create Dog Instances
# Create three instances of the Dog class with different names, ages, and weights.
dog1 = Dog('Fluffy', 3, 10)
dog2 = Dog('Bobby', 6, 15)
dog3 = Dog('Mittens', 1, 5)

# Step 3: Test Dog Methods
# Call the bark(), run_speed(), and fight() methods on the dog instances to test their functionality.
print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog2))


# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 3: Dogs Domesticated
# Goal: Create a PetDog class that inherits from Dog and adds training and tricks.
#
# Instructions:
#
# Step 1: Import the Dog Class
# In a new Python file, import the Dog class from the previous exercise.

# import Dog

# Step 2: Create the PetDog Class
#
# Create a class called PetDog that inherits from the Dog class.
# Add a trained attribute to the __init__ method, with a default value of False.
# Trained means that the dog is trained to do some tricks.

class PetDog(Dog):
    """
    Represents a pet dog that inherits from the Dog class.

    :ivar trained: Indicates whether the dog is trained. Defaults to False.
    """


    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained


    # Implement a train() method that prints the output of bark() and sets trained to True.
    def train(self):
        self.trained = True
        print(self.bark())  # inherited from the parent class


    # Implement a play(*args) method that prints “ all play together”.
    # *args on this method is a list of dog instances.
    def play(self, *args):
        playing_dogs = [f'{dog.name}' for dog in args]
        if len(playing_dogs) == 1:
            print(f'{self.name} and {playing_dogs[0]} are playing together.')
        elif len(playing_dogs) > 1:
            print(f'{self.name}, {', '.join(playing_dogs[:-1])} and {playing_dogs[-1]} all play together.')
        else:
            print(f'{self.name} is playing alone!')


    # Implement a do_a_trick() method that prints a random trick if trained is True.
    # Use this list for the ramdom tricks:
    # tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
    # Choose a random index from it each time the method is called.
    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained:
            print(f'{self.name} {random.choice(tricks)}')  # .choice: Choose a random element from a non-empty sequence.
        else:
            print(f'{self.name} is not trained to do tricks!')


# Step 3: Test PetDog Methods
# Create instances of the PetDog class and test the train(), play(*args), and do_a_trick() methods.
first_dog = PetDog('Casper', 2, 10)
second_dog = PetDog('Rover', 5, 15)
third_dog = PetDog('Buddy', 1, 5)

first_dog.train()
first_dog.play(second_dog)
third_dog.play(first_dog, second_dog)
second_dog.do_a_trick()


# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 4: Family and Person Classes
#
# Instructions:
#
# Step 1: Create the Person Class
# Define a Person class with the following attributes:
# first_name
# age
# last_name (string, should be initialized as an empty string)

class Person:
    def __init__(self, first_name, age, last_name=''):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name


    # Add a method called is_18():
    # It should return True if the person is 18 or older, otherwise False.
    def is_18(self):
        return self.age >= 18


# Step 2: Create the Family Class
# Define a Family class with:
# A last_name attribute
# A member list that will store Person objects (should be initialized as an empty list)

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []


    # Add a method called born(first_name, age):
    # It should create a new Person object with the given first name and age.
    # It should assign the family’s last name to the person.
    # It should add this new person to the members list.
    def born(self, first_name, age):
        self.members.append(Person(first_name, age, self.last_name))


    # Add a method called check_majority(first_name):
    # It should search the members list for a person with that first_name.
    # If the person exists, call their is_18() method.
    # If the person is over 18, print:
    # "You are over 18, your parents Jane and John accept that you will go out with your friends"
    # Otherwise, print:
    # "Sorry, you are not allowed to go out with your friends."
    def check_majority(self, first_name):
        for member in self.members:
            if first_name == member.first_name:
                if member.is_18():
                    print('You are over 18, your parents Jane and John accept that you will go out with your friends')
                    return  # exit after finding the person
                else:
                    print('Sorry, you are not allowed to go out with your friends.')
                    return  # exit after finding the person
        # if the loop completes without finding a person
        print(f'{first_name} is not a member of the {self.last_name.capitalize()} family!')


    # Add a method called family_presentation():
    # It should print the family’s last name.
    # Then, it should print each family member’s first name and age.
    def family_presentation(self):
        if not self.members:
            print(f'There are no members of the {self.last_name.capitalize()} family.')
            return
        print(f'This is the {self.last_name.capitalize()} family:')
        for member in self.members:
            print(f'- name: {member.first_name}, age: {member.age}.')


# Expected Behavior:
# Once implemented, your program should allow you to:
# Create a family with a last name.
# Add members to the family using the born() method.
# Use check_majority() to see if someone is allowed to go out.
# Display family information with family_presentation().
# Don’t forget to test your classes by creating an instance of Family, adding members, and calling each method to see
# the expected output.
new_family = Family('Smith')
new_family.family_presentation()
new_family.born('John', 20)
new_family.born('Jane', 19)
new_family.check_majority('John')
new_family.check_majority('Mary')
new_family.family_presentation()
