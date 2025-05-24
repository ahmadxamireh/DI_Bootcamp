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
import random

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


# ----------------------------------------------------------------------------------------------------
# Exercise 2: Create a deck of cards class
# The Deck of cards class should NOT inherit from a Card class.
#
# The requirements are as follows:
#
# 1. The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# 2. The Deck class:
# - Should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# - Should have a method called deal which deals a single card from the deck. After a card is dealt, it should be
# removed from the deck.

class Card:
    """
    Represents a playing card with a suit and a rank.

    This class models a standard playing card. A card object is composed of
    a suit (e.g., hearts, spades) and a rank (e.g., Ace, 2, 3). Each card
    is uniquely identified by its combination of suit and rank. The `Card`
    class provides basic functionality to create and work with such cards.

    :ivar suit: The suit of the card (e.g., hearts, spades).
    :type suit: str
    :ivar rank: The rank of the card (e.g., Ace, 2, King).
    :type rank: str
    """


    def __init__(self, suit: str, rank: str):
        """
        Represents a playing card with a suit and rank.

        A Card object encapsulates the suit and rank attributes to define specific
        characteristics of a standard playing card. These attributes identify the
        card uniquely and can be utilized in card games or related simulations.

        :param suit: The suit of the card (e.g., 'Hearts', 'Diamonds', 'Clubs', 'Spades').
        :type suit: str
        :param rank: The rank of the card (e.g., '2', 'K', 'A').
        :type rank: str
        """
        self.suit = suit
        self.rank = rank


    def __str__(self):
        """
        Converts the object to its string representation.

        This method provides a user-readable string representation of the object,
        typically summarizing its significant attributes in a friendly, formatted
        way.

        :return: A string representation of the object.
        :rtype: str
        """
        return f'{self.rank} of {self.suit}'


class Deck:
    """
    Deck class represents a standard deck of 52 playing cards.

    This class is used to create a deck of cards with all suits and ranks. It offers the ability to shuffle the deck
    and deal cards one by one. A deck starts as fully populated with 52 cards and can be manipulated as needed
    for card games or other purposes.

    :ivar cards: The list of Card objects currently in the deck.
    :type cards: list[Card]
    :ivar suits: The list of suits used in a standard deck of cards.
    :type suits: list[str]
    :ivar ranks: The list of ranks used in a standard deck of cards.
    :type ranks: list[str]
    """


    def __init__(self):
        """
        Represents a deck of playing cards.

        This class initializes a standard deck of 52 playing cards consisting of all
        combinations of four suits (Clubs, Diamonds, Hearts, Spades) and thirteen ranks
        (A, 2-10, J, Q, K). Each card in the deck is represented as an instance
        of the `Card` class and stored in the `cards` attribute.

        Attributes
        ----------
        cards : list
            A list containing the `Card` instances representing the full deck of cards.
        suits : list
            A list of strings representing the four suits of a standard playing card
            deck: Clubs, Diamonds, Hearts, Spades.
        ranks : list
            A list of strings representing the thirteen ranks of a standard playing card
            deck: Ace, 2 through 10, Jack, Queen, and King.
        """
        self.cards = []
        self.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        self.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        for suit in self.suits:
            for rank in self.ranks:
                self.cards.append(Card(suit, rank))


    def shuffle(self):
        """
        Shuffles the deck of cards if the deck contains exactly 52 cards. If the
        deck size is different from 52, shuffling fails, and an appropriate
        message is printed.
        """
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            print('Shuffling failed, deck not full.')


    def deal(self):
        """
        Deals a card from the deck if available. Removes the dealt card from the deck and returns it.
        If the deck is empty, a message indicating this will be returned.

        :return: A string describing the dealt card or a message indicating the deck is empty.
        :rtype: str
        """
        if len(self.cards) > 0:
            popped_card = self.cards.pop()
            return f'Dealt {popped_card}'  # __str__ of Card will be called automatically
        else:
            return 'The deck is empty.'


def main():
    deck = Deck()
    deck.shuffle()
    print("Dealing 5 cards:")
    for _ in range(5):
        card = deck.deal()
        print(card)
    print(f'Cards remaining: {len(deck.cards)}')


if __name__ == '__main__':
    main()
