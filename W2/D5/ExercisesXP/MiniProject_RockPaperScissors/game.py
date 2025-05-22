# Mini Project: Rock Paper Scissors
#
# Key Python Topics:
#
# OOP (Classes, Methods)
# Modules (Importing)
# Random Number Generation (random.choice())
# User Input and Validation
# Conditional Logic
# Loops (while)
# Data Structures (Dictionaries)
# Game Logic
#
# What You Will Create:
#
# A Rock Paper Scissors game where the user plays against the computer, with a menu, game logic, and score tracking.
#
# Instructions:
#
# Create a directory for the game.
# Create rock-paper-scissors.py (for menu, input, and summary).
# Create game.py (for game logic).
import random


# Part I - game.py
#
# Step 1: Create the Game Class

class Game:
    """
    A class to simulate the game of Rock Paper Scissors.

    This class provides core functionality for playing the game. It includes
    methods for player interaction, computer decision-making, result determination,
    and game execution. Players are prompted to select an item (rock, paper, or
    scissors), and the computer selects an item randomly. The result of the game is
    then calculated based on the rules of Rock Paper Scissors.

    :ivar items: The list of valid items (choices) for the game.
    :type items: list[str]
    """
    def __init__(self):
        self.items = ['rock', 'paper', 'scissors']
    # Step 2: Implement get_user_item Method
    # Create a method called get_user_item(self).
    # Ask the user to select an item (rock/paper/scissors).
    def get_user_item(self) -> str:
        """
        Prompts the user to select an item from a predefined list of items and ensures
        that the input is valid. The function continuously prompts the user until a valid
        item is entered.

        :returns: The valid selection made by the user as a string.
        :rtype: str
        """
        while True:
            item = input("Please select an item (rock/paper/scissors): ").lower()
            if item in self.items:
                return item
            else:
                print("Invalid input")


    # Step 3: Implement get_computer_item Method
    # Create a method called get_computer_item(self).
    # Randomly select an item (rock/paper/scissors).
    # Return the computer’s item.
    def get_computer_item(self) -> str:
        """
        Select and return a random item from the list of available items.

        This method uses the random module to select one of the available items
        stored within the 'items' attribute of the class. The selected item is
        returned as a string. It assumes that the 'items' attribute is populated
        with a non-empty list or sequence.

        :return: A randomly selected item from 'items'.
        :rtype: str
        """
        return random.choice(self.items)

    # Step 4: Implement get_game_result Method
    # Create a method called get_game_result(self, user_item, computer_item).
    # Take user_item and computer_item as parameters.
    # Determine the result of the game based on the rules of Rock Paper Scissors.
    # Return “win”, “draw”, or “loss”.
    @staticmethod
    def get_game_result(user_item, computer_item):
        """
        Determine the game result based on the user's choice and the computer's choice
        in a game of rock-paper-scissors.

        The function evaluates the result of a rock-paper-scissors game based on the
        choices provided by the user and the computer. Depending on the input, it
        returns 'win', 'loss', 'draw', or 'error'.

        :param user_item: The choice of the user in the game. Must be either 'rock',
            'paper', or 'scissors'.
        :type user_item: str
        :param computer_item: The choice of the computer in the game. Must be either
            'rock', 'paper', or 'scissors'.
        :type computer_item: str
        :return: The result of the game from the user's perspective. Can be one of
            'win', 'loss', 'draw', or 'error' if either input is invalid.
        :rtype: str
        """
        outcomes = {
            'rock': {'rock': 'draw', 'paper': 'loss', 'scissors': 'win'},
            'paper': {'rock': 'win', 'paper': 'draw', 'scissors': 'loss'},
            'scissors': {'rock': 'loss', 'paper': 'win', 'scissors': 'draw'}
        }
        # if user_item is valid, it returns the corresponding dict, else returns empty {}.
        # then using method chaining, we lookup the resulting dict from above for computer_item.
        # if computer_item is valid, it returns the corresponding value, else returns 'error'.
        # also if the first part returns empty {}, it returns 'error'
        return outcomes.get(user_item, {}).get(computer_item, 'error')

    # Step 5: Implement play Method
    # Create a method called play(self).
    # Call get_user_item() to get the user’s choice.
    # Call get_computer_item() to get the computer’s choice.
    # Call get_game_result() to determine the result.
    # Print the outcome of the game (user’s choice, computer’s choice, result).
    # Return the result (“win”, “draw”, or “loss”) as a string.
    def play(self):
        """
        Play a single round of the game by obtaining the user's choice, the computer's
        choice, and determining the outcome based on these inputs.

        :raises ValueError: If the user's input is invalid.
        :rtype: str
        :return: The result of the game round, indicating whether the user won, lost,
            or it was a draw.
        """
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f'User: {user_item} vs. Computer: {computer_item}: {result}')
        return result