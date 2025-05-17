# Mini-Project #2 - Hangman#
#
# Use python to create a Hangman game.
#
# Instructions
# The computer chooses a random word and marks stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg,
# right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts
# are on the gallows.
# The player can’t guess the same letter twice.


import random

def update_masked_word(letters: set, word: str) -> str:
    """
    It takes a set of guessed letters and checks whether the letter is in the word.
    It replaces each unguessed letter with * and keeps the guessed ones.
    In case the character in the word is not a letter, keep it.
    :param letters: A set of guessed letters.
    :param word: A random word to guess.
    :return: An updated word containing the guessed letters, if any.
    """
    return ''.join([(char if ((char in letters) or (not char.isalpha())) else '*') for char in word])

def update_hangman(index: int, guessed_word: str, parts: list) -> str:
    """
    It takes the current round number the game has reached, and the guessed word so far to display it.
    It also takes a set of hangman parts to keep track of the game.
    At every iteration, update the hangman parts list and return an updated figure.
    If the index is -1, skip updating the figure and return the last version of it.
    :param index: The current game round number.
    :param guessed_word: The guessed word so far.
    :param parts: The hangman body parts so far.
    :return: An updated figure of the hangman.
    """
    if index == 0:
        parts[0] = 'O'
    elif index == 1:
        parts[1] = '|'
    elif index == 2:
        parts[2] = '/'
    elif index == 3:
        parts[3] = '\\'
    elif index == 4:
        parts[4] = '/'
    elif index == 5:
        parts[5] = '\\'
    else:  # -1
        pass

    hangman = f'''
    The word is: {guessed_word}
      _____
      |   | 
      |   {parts[0]}
      |  {parts[2]}{parts[1]}{parts[3]}
      |  {parts[4]} {parts[5]}
    __|__
    '''
    return hangman

def play():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share',
                 'credit card', 'rush', 'south']
    word = random.choice(wordslist)

    guessed_letters = set()  # to make lookup for a letter O(1), instead of using lists O(n)
    hangman_parts = [' ', '', ' ', '', '', ''] # an empty list to keep track of the game's progress.

    print(f'Guess the following word{'s' if ' ' in word else ''}: {update_masked_word(guessed_letters, word)}')

    i = 0
    while i < 6:  # max 6 wrong guesses before the full body is drawn

        letter = input('Guess a letter (A to Z): ').lower()  # to avoid case sensitivity

        if len(letter) == 1 and letter.isalpha():  # Return True if the character is an alphabetic string and of
            # length 1 (because we only want one letter), False otherwise.
            if letter in guessed_letters:
                print('You already guessed this letter. Try again.')
                print(f'Guessed letters list: {guessed_letters}.')
                continue

            guessed_letters.add(letter)  # add the letter to the set of guessed letters
            print(f'Guessed letters list: {guessed_letters}.')

            guessed_word = update_masked_word(guessed_letters, word)  # update the word based on user guess

            if letter in word:
                print('You guessed correctly!')
                print(update_hangman(-1, guessed_word, hangman_parts))  # -1 so we do not update the drawing
                if '*' not in guessed_word:
                    print('Congratulations! You won!')
                    return
            else:
                print(f'The letter is not in the word! {6 - (i + 1)} guesses left!')
                print(update_hangman(i, guessed_word, hangman_parts))
                i += 1  # increment by 1 for every wrong guess
        else:
            print('Invalid input! Please make sure to enter one letter between A to Z.')
    else:
        print(f'You lost! The word was {word}.')

play()
