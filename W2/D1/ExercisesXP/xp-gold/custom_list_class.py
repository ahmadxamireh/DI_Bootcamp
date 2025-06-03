# Exercise 2: Custom List Class
# Instructions
# Create a class called MyList, the class should receive a list of letters.
# Add a method that returns the reversed list.
# Add a method that returns the sorted list.
# Bonus: Create a method that generates a second list with the same length as MyList. The list should be constructed
# with random numbers. (use list comprehension).
import random


class MyList:
    def __init__(self, letters: list):
        self.letters = letters


    def reversed_list(self) -> list:
        return list(reversed(self.letters))


    def sorted_list(self) -> list:
        return sorted(self.letters)


    def generate_list(self) -> list:
        return random.sample(range(0, 50), len(self.letters))


lst = MyList(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
print(lst.reversed_list())
print(lst.sorted_list())
print(lst.generate_list())
