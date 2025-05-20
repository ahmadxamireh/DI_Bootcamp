# Daily Challenge - Circle
#
# Instructions:
#
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.
#
# Other abilities of a Circle instance:
#
# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
import math, turtle


class Circle:
    """
    Represents a geometric circle and provides various operations and comparisons.

    The Circle class facilitates the creation of a circle by specifying either
    a radius or diameter. It calculates basic properties such as area,
    circumference, and allows comparison and addition of circles based on radius.

    :ivar radius: Radius of the circle.
    :type radius: float
    :ivar diameter: Diameter of the circle.
    :type diameter: float
    """


    def __init__(self, radius=None, diameter=None):
        # Initialize a circle with either radius or diameter
        # Both are dependent attributes, so they must be set together
        # One value determines the other, and vice versa
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError('Either radius or diameter must be specified.')


    def area(self):
        # Calculate and return the area of the circle
        return math.pi * self.radius ** 2


    def circumference(self):
        # Calculate and return the circumference of the circle
        return 2 * math.pi * self.radius


    def __add__(self, other):
        # Add two circles by combining their radii
        return Circle(self.radius + other.radius)


    def __gt__(self, other):
        # Compare circles based on radius size
        return self.radius > other.radius


    def __eq__(self, other):
        # Check if two circles have equal radii
        return self.radius == other.radius


    def __repr__(self):
        # String representation showing circle attributes
        out = f'''
The circle's attributes:
- radius: {self.radius}
- diameter: {self.diameter}
- area: {round(self.area(), 2)}
- circumference: {round(self.circumference(), 2)}
        '''
        return out


# Create circle instances
circle1 = Circle(radius=200)
circle2 = Circle(diameter=100)

# Print circle information and comparisons
print(circle1)
print(circle2)
print(circle1 + circle2)
print(circle1 == circle2)

# Draw circles using turtle
for c in sorted([circle1, circle2]):
    turtle.circle(c.radius)
turtle.exitonclick()
