# Part II - rock-paper-scissors.py
#
# Step 6: Implement get_user_menu_choice Function
# Create a function called get_user_menu_choice().
# Display the menu options (“Play a new game”, “Show scores”, “Quit”).
# Get the user’s choice.
# Validate the input (e.g., check if it’s one of the valid options).
# Return the user’s choice.
from collections import defaultdict

from game import Game


def get_user_menu_choice():
    """
    Displays a menu with three choices to the user and retrieves their selection.
    Provides an input prompt for the user to enter their choice and validates
    it against a predefined list of valid options. If an invalid option is
    entered, an empty string is returned; otherwise, their selection is returned.

    :return: The user's menu choice as a string ('1', '2', or '3'), or an
        empty string if an invalid choice is made.
    :rtype: str
    """
    print('\n====== MENU ======')
    print('1. Play a new game')
    print('2. Show scores')
    print('3. Quit')
    user_input = input('\nEnter the number of the option: ')
    valid_choices = ['1', '2', '3']
    if user_input not in valid_choices:
        return ''
    return user_input


# Step 7: Implement print_results Function
# Create a function called print_results(results).
# Take a dictionary called results as a parameter (e.g., {"win": 2, "loss": 4, "draw": 3}).
# Print the results in a user-friendly format (e.g., “Wins: 2, Losses: 4, Draws: 3”).
# Thank the user for playing.
def print_results(results: dict):
    """
    Prints the results of a game including the number of wins, losses, and draws.

    This function takes a dictionary containing the game results with keys 'win',
    'loss', and 'draw'. It formats and prints these results for the user, summarizing
    the outcomes of the game session.

    :param results: A dictionary containing game results with the following keys:
                    - 'win': int, the number of games won.
                    - 'loss': int, the number of games lost.
                    - 'draw': int, the number of games drawn.
    :return: None
    """
    print('\n====== RESULTS ======')
    print(f'Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}.')
    print('Thank you for playing!')


# Step 8: Implement main Function
# Create a function called main().
# Repeatedly show the menu until the user chooses to exit.
# Call get_user_menu_choice() to get the user’s choice.
# If the user chooses to play a game:
# Create a Game object.
# Call the play() method of the Game object.
# Store the result of the game in a dictionary (e.g., results).
# If the user chooses to exit:
# Call print_results() to display the game summary.
# Exit the program.
def main():
    """
    This function serves as the entry point for the rock-paper-scissors game. It manages
    the program flow, including displaying a menu to the user, processing the user's
    menu choices, starting new games, recording the outcomes, and printing the game
    results.

    The function employs a `defaultdict` to store and update the tally of game results.
    If the user chooses to quit, the function prints the recorded results before ending
    the program.

    :return: None
    """
    results = defaultdict(int) # to avoid missing keys, default values to 0
    print('\nWelcome to rock-paper-scissors!')
    while True:
        menu_choice = get_user_menu_choice()
        if menu_choice:  # evaluates to true if it is not equal to an empty string
            if menu_choice == '3':  # quit
                if results:
                    print_results(results)
                break
            elif menu_choice == '1':  # new game
                new_game = Game()
                result = new_game.play()
                # get the result if it doesn't exist default to 0
                results[result] = results.get(result, 0) + 1
            elif menu_choice == '2':  # show results
                if results:
                    print_results(results)
                else:
                    print('\nNo results yet!\n')
        else:
            print('\nInvalid input')
            continue


if __name__ == '__main__':
    main()
