# Mini-project : Anagram checker
#
# What you will learn
# OOP
# Python Files I/O
#
# What you will create
#
# 🌟 Anagram checker
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.
#
#
#
# Instructions
#
# 1. Create a new file called anagram_checker.py which contains a class called AnagramChecker.
from collections import Counter


class AnagramChecker:
    """
    A class for checking words against a predefined valid word list and finding anagrams.

    This class provides functionality to verify if a word exists in the word list,
    and to find all possible anagrams for a given word. The word list is loaded
    from a text file during initialization. The user functions include checking
    for the validity of a word and retrieving anagrams.

    :ivar path: Path to the text file containing the word list.
    :type path: str
    :ivar text: Contents of the word list file as a single string.
    :type text: str
    :ivar words: List of words loaded from the text file, converted to lowercase.
    :type words: list[str]
    """


    # 2. The class should have the following methods:
    # __init__ - should load the word list file (text file) into a variable
    # so that it can be searched later on in the code.
    def __init__(self):
        """
        Initialize the class with the path to the SOWPODS dictionary file. This reads the contents
        of the file, converts all text to lowercase, and splits the text into individual words.
        If the file cannot be found or an input/output error occurs during reading, appropriate
        exceptions are raised.

        :param path: Path to the SOWPODS dictionary file
        :type path: str

        :raises FileNotFoundError: If the file specified by `path` does not exist
        :raises IOError: If an I/O error occurs while reading the file
        """
        self.path = 'sowpods.txt'
        try:
            with open(self.path, 'r') as f:
                self.text = f.read()
                self.words = self.text.lower().split()
        except FileNotFoundError:
            raise FileNotFoundError(f"File {self.path} not found")
        except IOError as e:
            raise IOError(f"An IOError occurred: {e}")


    # is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
    def is_valid_word(self, word: str):
        """
        Checks whether the given word is valid. A valid word must be a string consisting
        of alphabetic characters only and must exist within the predefined collection
        of words.

        :param word: The word to check for validity.
        :type word: str
        :return: True if the word is valid, otherwise False.
        :rtype: bool
        """
        if word.lower().isalpha():
            if word.lower() in self.words:
                return True
            else:
                # print(f'The word "{word}" is not valid.')
                return False
        else:
            # print('The provided input is not a string.')
            return False


    # get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function
    # should return a list containing [“mate”, “tame”, “team”].)
    def get_anagrams(self, word: str):
        """
        Get the list of anagrams for a given word from a predefined list of words.

        This method searches for anagrams of the provided word by comparing its letters
        to the letters of other words in a predefined word list. It checks if the words
        are of the same length as the input word and ensures they are not identical to it.
        Anagrams are words that contain the exact same characters as the input word
        but in a different order.

        :param word: The word for which possible anagrams need to be identified.
        :type word: str
        :return: A list of words that are anagrams of the input word.
        :rtype: list
        """
        lowered_word = word.lower()
        # get a list of words that match the same length as the test word
        filtered_words = list(filter(lambda w: (len(w) == len(lowered_word) and w != lowered_word), self.words))
        anagram_words = []
        for filtered_word in filtered_words:
            if self.is_anagram(lowered_word, filtered_word):
                anagram_words.append(filtered_word)
        return anagram_words


    # Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and
    # return True if they contain the same letters (but not in the same order), and False if not.
    @staticmethod
    def is_anagram(word1: str, word2: str):
        """
        Determines if two words are anagrams of each other. An anagram is a word or phrase formed
        by rearranging the letters of a different word or phrase, typically using all original
        letters exactly once.

        :param word1: The first word to compare
        :type word1: str
        :param word2: The second word to compare
        :type word2: str
        :return: True if the words are anagrams, False otherwise
        :rtype: bool
        """
        return Counter(word1) == Counter(word2)

# Note: None of the methods in the class should print anything.
