# 3. Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of
# your program, and will rely on AnagramChecker for the anagram-related logic.
#
# 4. It should do the following:
# 4.1. Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

from anagram_checker import AnagramChecker as AC

checker = AC()


def exit_program():
    """
    Exits the program after displaying a goodbye message.

    This function prints a farewell message "Goodbye!" to the output
    and then terminates the program execution by invoking the `exit()` function.

    :return: None
    """
    print("Goodbye!")
    exit()


print('Welcome to the Anagram Checker!')

while True:
    print('\n===== MENU =====')
    print('1. Check Anagrams')
    print('0. Quit')
    user_input = input('\nPlease enter the number of the option you\'d like: ')
    if user_input == '0':
        exit_program()
    elif user_input == '1':
        while True:
            print('\n===== Check Anagrams =====')
            print('1. Enter a word to check its anagrams')
            print('2. Back to menu')
            print('0. Quit')
            user_input = input('\nPlease enter the number of the option you\'d like: ')
            if user_input == '0':
                exit_program()
            elif user_input == '1':
                # 4.2. If the user chooses to input a word, it must be accepted from the user’s keyboard input,
                # and then be validated:
                # Only a single word is allowed. If the user typed more than one word, show an error message.
                # (Hint: how do we know how many words were typed?)
                # Only alphabetic characters are allowed. No numbers or special characters.
                # Whitespace should be removed from the start and end of the user’s input.
                while True:
                    print('\n===== Check Word =====')
                    word_input = input('\nPlease enter a word to check its anagrams (or \'0\' to exit): ').strip()
                    if word_input == '0':
                        exit_program()
                    if word_input == '':
                        print('\nYou did not enter a word, please try again.')
                        continue
                    elif len(word_input.split()) > 1:
                        print('\nYou entered more than one word, please try again.')
                        continue
                    else:
                        if word_input.isalpha():
                            # 4.3. Once your code has decided that the user’s input is valid, it should find out the
                            # following:
                            # All possible anagrams to the user’s word.
                            # Create an AnagramChecker instance and apply it to the steps created above.
                            if checker.is_valid_word(word_input):
                                print('This is a valid English word.')
                                words = checker.get_anagrams(word_input)
                                if words:
                                    print(f'Anagrams for your word: {', '.join(words)}.')
                                else:
                                    print('No anagrams for your word.')
                                exit_program()
                            else:
                                print('This is not a valid English word, please try again.')
                                continue
                        else:
                            print('\nThis is not a word, please try again.')
                            continue
            elif user_input == '2':
                break
    else:
        print('\nInvalid input! Please try again.')
