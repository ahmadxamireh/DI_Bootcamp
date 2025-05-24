# Daily challenge: OOP Quizz
#
# Key Python Topics:
#
# OOP (Classes, Methods)
# Data Structures (Lists)
# Random Number Generation (random.shuffle())
# Instructions:
#
#
# Exercise 1: Quizz
# Answer the following questions:
#
# What is a class?

print(
    'A class is a blueprint or template for creating objects. It defines attributes and methods that the instances of '
    'the class will have.')
# What is an instance?
print(
    'An Instance is created when calling the class by its name, creating a copy of it that holds its own attributes '
    'and shares the methods of the Class blueprint. Each time the class is called, a new instance is created.')
# What is encapsulation?
print(
    'Encapsulation is the concept of restricting direct access to some of an object\'s components, usually through '
    'access modifiers and methods, to protect the internal state.')
# What is abstraction?
print('Abstraction is using a method without really knowing how exactly it works under the hood; hiding unnecessary '
      'details and its complex implementation, showing only what is relevant to use. Ex: max().')
# What is inheritance?
print(
    'Inheritance is when a class (subclass) derives from another class (superclass), gaining access to its attributes '
    'and methods (parent and child relationship).')
# What is multiple inheritance?
print('Multiple inheritance is when a class inherits from more than one superclass.')
# What is polymorphism?
print(
    'Polymorphism allows different classes to be treated as instances of the same superclass, with each class '
    'implementing behavior in its own way.')
# What is method resolution order or MRO?
print(
    'MRO (Method Resolution Order) defines the order in which classes are searched when executing a method, '
    'particularly in the case of multiple inheritance. Ex: ClassC(ClassA, ClassB), ClassC prioritizes the methods in '
    'the first class it inherits from which is ClassA.')
