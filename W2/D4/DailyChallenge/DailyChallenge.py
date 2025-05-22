# Daily challenge : Text Analysis
#
# 👩‍🏫 👩🏿‍🏫 What You’ll learn
# OOP (Classes, Class Methods, Inheritance)
# Modules (File Handling, String Manipulation, Data Structures)
# Text Analysis Techniques
#
# Key Python Topics:
#
# OOP (Classes, Class Methods, Inheritance)
# File handling (open())
# String manipulation (split(), join(), translate(), regular expressions)
# Dictionaries
# Sets
# Lists
# string module
# re module (regular expressions)
#
#
# Instructions:
#
# Create a Text class to analyze text data, either from a string or a file. Then, create a TextModification class to
# perform text cleaning.
#
#
# Part I: Analyzing a Simple String
# Step 1: Create the Text Class
# Create a class called Text.
# The __init__ method should take a string as an argument and store it in an attribute (e.g., self.text).
import re, string
from collections import Counter


class Text:
    """
    This class provides a set of functionalities to perform text analysis, such as calculating the
    frequency of words, identifying the most common word, determining unique words, and creating
    text instances from file content. It is intended for use in textual data analysis and manipulation.

    :ivar text: The main text content for analysis.
    :type text: str
    """


    def __init__(self, text: str):
        self.text = text
        self.words = text.lower().split()


    # Step 2: Implement word_frequency Method
    # Create a method called word_frequency(word).
    # Split the text attribute into a list of words.
    # Count the occurrences of the given word in the list.
    # Return the count.
    # If the word is not found, return None or a meaningful message.
    def word_frequency(self, word: str):
        """
        Calculate the frequency of a given word in the text. The method is case-insensitive
        and handles words regardless of letter case. If the word is not found, a message
        indicating its absence is returned.

        :param word: The word whose frequency in the text is to be determined.
        :type word: str
        :return: The frequency of the word in the text. If the word is not found,
                 a string message is returned stating its absence.
        :rtype: int
        """
        word_count = self.words.count(word.lower())
        return word_count


    # Step 3: Implement most_common_word Method
    # Create a method called most_common_word().
    # Split the text into a list of words.
    # Use a dictionary to store word frequencies.
    # Find the word with the highest frequency.
    # Return the most common word.
    def most_common_word(self):
        """
        Determine the most frequently occurring word in a given text using a Counter object.
        The function splits the text into words, counts their occurrences, and returns the most
        common word. If the text is empty or no words are found, the function returns None.

        :raises ValueError: If the text attribute is not a string.
        :return: The most common word as a string or None if no words are found.
        :rtype: Optional[str]
        """
        # Counter() returns a counter object: Counter({'apple': 3, 'banana': 2, 'orange': 1})
        # .most_common(N) returns a list in descending order: [('apple', 3), ('banana', 2), ('orange', 1)]
        # N: Top N Most Common Elements, .most_common(2): [('apple', 3), ('banana', 2)]
        # returns an empty list if the counter object is empty
        common_words = Counter(self.words).most_common(1)
        return common_words[0][0] if common_words else None


    # Step 4: Implement unique_words Method
    # Create a method called unique_words().
    # Split the text into a list of words.
    # Use a set to store unique words.
    # Return the unique words as a list.
    def unique_words(self):
        """
        Extract unique words from the text attribute of the instance.

        This method takes the string stored in the ``self.text`` attribute, splits it
        into individual words based on spaces, and identifies the unique words using
        a set. The unique words are then returned as a list.

        :return: A list containing unique words from the text, or ``None`` if there
            are no unique words.
        :rtype: list[str] | None
        """
        unique_words = set(self.words)
        return list(unique_words) if unique_words else None


    # Part II: Analyzing Text from a File
    #
    # Step 5: Implement from_file Class Method
    # Create a class method called from_file(file_path).
    # Open the file at file_path in read mode.
    # Read the file content.
    # Create and return a Text instance with the file content as the text.
    @classmethod
    def from_file(cls, file_path: str):
        """
        Creates an instance of the class from the content of a file. This method reads the
        specified file and initializes an instance of the class using the file content.
        If the file does not exist, the method prints an error message and returns None.

        :param file_path: The path to the file from which to read content.
        :type file_path: str
        :return: An instance of the class initialized with the file content, or None if
                 the file is not found.
        :rtype: Text or None
        """
        try:
            with open(file_path, 'r') as f:
                return Text(f.read())
        except FileNotFoundError:
            print(f'File \'{file_path}\' was not found.')
            return None


# Bonus: Text Modification
#
# Step 6: Create the TextModification Class
# Create a class called TextModification that inherits from Text.
class TextModification(Text):
    """
    Provides functionality to modify text by removing punctuation, stop words, and special characters.

    The TextModification class extends the Text class and enables additional operations on the text
    attribute, such as cleaning text data with specific methods.

    :ivar text: The text content to be modified.
    :type text: str
    """


    def __init__(self, text):
        super().__init__(text)


    # Step 7: Implement remove_punctuation Method
    # Create a method called remove_punctuation().
    # Use the string module to get a string of punctuation characters.
    # Use a string method or regular expressions to remove punctuation from the text attribute.
    # Return the modified text.
    def remove_punctuation(self):
        """
        Removes punctuation from the text stored in the `self.text` attribute. This method
        utilizes the `string.punctuation` for identifying punctuation marks. It returns the
        text without any punctuation, or `None` if the text is empty after removing the
        punctuation marks.

        :raises AttributeError: If the `self.text` attribute is not set.
        :raises TypeError: If `self.text` is not a string.
        :return: The text with punctuation removed or `None` if the resultant text is empty.
        :rtype: Optional[str]
        """
        punctuations = string.punctuation
        regex = re.compile('[%s]' % re.escape(punctuations))
        cleaned_text = regex.sub('', self.text)  # returns empty string if the text empty
        return cleaned_text if cleaned_text else None


    # Step 8: Implement remove_stop_words Method
    # Create a method called remove_stop_words().
    # Search online for a list of English stop words (common words like “a”, “the”, “is”).
    # Split the text into a list of words.
    # Filter out stop words from the list.
    # Join the remaining words back into a string.
    # Return the modified text.
    def remove_stop_words(self):
        """
        Removes stop words from the object's text attribute. Stop words are predefined
        common English words that are usually filtered out in natural language
        processing tasks due to their high frequency and low semantic value.

        :raises AttributeError: If the object does not have a ``text`` attribute.
        :raises TypeError: If the ``text`` attribute is not a string.

        :return: A string with the stop words removed if filtered words remain.
            Returns ``None`` if all words in the text are stop words or if the text is
            empty.
        :rtype: str or None
        """
        # a list of the most common 100 English words
        common_english_words = [
            "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
            "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
            "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
            "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
            "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
            "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
            "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
            "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
            "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
            "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"
        ]

        clean_text = self.remove_punctuation()
        words = clean_text.lower().split()
        # filtered_words = list(filter(lambda word: word in common_english_words, words))
        filtered_words = [word for word in words if word not in common_english_words]
        return ' '.join(filtered_words) if filtered_words else None


    # Step 9: Implement remove_special_characters Method
    # Create a method called remove_special_characters().
    # Use regular expressions to remove special characters from the text attribute.
    # Return the modified text.
    def remove_special_characters(self):
        """
        Removes all characters from the text that are not letters, digits, or
        whitespace.

        This function processes the text stored in the instance and cleans it
        by removing any special characters (e.g., punctuation) that are not
        considered alphanumeric or whitespace. The updated version of the text
        is returned without the unwanted characters.

        :return: A cleaned version of the text without special characters, or
                 None if the resulting text is empty.
        :rtype: Optional[str]
        """
        # Remove all characters that are not letters, digits, or whitespace
        clean_text = re.sub(r'[^\w\s]', '', self.text)
        return clean_text if clean_text else None


# --- Testing Text class ---
print("=== Text Analysis ===")
text = Text.from_file('text.txt')

if text:  # Ensure file was loaded successfully
    print("Word Frequency (of 'the'):", text.word_frequency('the'))
    print("Most Common Word:", text.most_common_word())
    print("Unique Words:", text.unique_words())

    # --- Testing TextModification class ---
    print("\n=== Text Cleaning ===")
    mod = TextModification(text.text)

    no_punct = mod.remove_punctuation()
    print("Without Punctuation:\n", no_punct)

    no_stop = mod.remove_stop_words()
    print("Without Stop Words:\n", no_stop)

    no_special = mod.remove_special_characters()
    print("Without Special Characters:\n", no_special)
else:
    print("Text file could not be loaded.")
