# Exercise 1: Geometry
# Instructions
# Write a class called Circle that receives a radius as an argument (default is 1.0).
# Write two instance methods to compute perimeter and area.
# Write a method that prints the geometrical definition of a circle.
import math


class Circle:
    def __init__(self, radius: float = 1.0):
        self.radius = radius


    def area(self) -> float:
        return math.pi * math.pow(self.radius, 2)


    def perimeter(self) -> float:
        return 2 * math.pi * self.radius


    def __repr__(self) -> str:
        return (f'A circle with radius {self.radius} has an area size of {round(self.area(), 2)} and perimeter'
                f' {round(self.perimeter(), 2)}')


circle = Circle()
print(circle)
