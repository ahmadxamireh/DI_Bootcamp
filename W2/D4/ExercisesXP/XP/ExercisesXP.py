# 🌟 Exercise 1: Random Sentence Generator
# Goal: Create a program that generates a random sentence of a specified length from a word list.
#
# Key Python Topics:
#
# File handling (open(), read())
# Lists
# Random number generation (random.choice())
# String manipulation (split(), join(), lower())
# Error handling (try, except)
# Input validation
#
#
# Instructions:
#
# 1. Download the provided word list and save it in your development directory.
# 2. Create a function to read the words from the file.
# 3. Create a function to generate a random sentence of a given length.
# 4. Create a main function to handle user input and program flow.
#
#
# Step 1: Create the get_words_from_file function
# Create a function named get_words_from_file that takes the file path as an argument.
# Open the file in read mode ("r").
# Read the file content.
# Split the content into a list of words.
# Return the list of words.
import random


def get_words_from_file(path: str):
    """
    Reads a file, processes its content, and extracts words into a list. The function
    ensures safe file handling by using a context manager and handles specific exceptions
    like file not found or input/output errors.

    It attempts to open the file at the given path in read mode and reads all lines in the
    file. The lines are joined into a single string, and words within the string are
    extracted by splitting on whitespace.

    :param path: The path to the file to be read and processed, provided as a string.
    :type path: str
    :return: A list of words extracted from the file, or None if the file is not found
        or if an error occurs during reading.
    :rtype: list[str] | None
    """
    # Context Manager: ensures the file is properly closed, even if an error occurs during file reading.
    try:
        with open(path, 'r') as file:
            lines = file.readlines()  # ['AA\n', 'AAH\n', 'AAHED\n', 'AAHING\n', 'AAHS\n', ..etc]
            content = ''.join(lines)  # this joins the list above, and since each word ends with \n it is on a new line
            words = content.split()  # ['AA', 'AAH', 'AAHED', 'AAHING', 'AAHS', ..etc]
            return words
    except FileNotFoundError:
        # Handle a missing file
        print('File not found')
        return None
    except IOError:
        # Handle general I/O errors
        print("Error reading the file.")
        return None


# Step 2: Create the get_random_sentence function
# Create a function named get_random_sentence that takes the sentence length as an argument.
# Call get_words_from_file to get the list of words.
# Select a random word from the list length times.
# Create a sentence with the selected words.
# Convert the sentence to lowercase.
# Return the sentence.

def get_random_sentence(length: int):
    """
    Generates a random sentence composed of a specified number of words. This
    function reads words from a provided text file, selects the specified number
    of random words from the list, and concatenates them into a single string
    with lowercase formatting. The function can include duplicate words in the
    output.

    :param length: The number of words to include in the randomly generated
        sentence.
    :type length: int
    :return: A random sentence consisting of the specified number of words,
        converted to lowercase.
    :rtype: str
    """
    words = get_words_from_file('words.txt')
    if words is not None:
        # rand_words = random.sample(words, length) # randomly pick a specified number of unique words
        rand_words = random.choices(words, k=length)  # randomly pick a specified number of words
        return ' '.join(rand_words).lower()
    else:
        print('Bad file name!')
        return None


# Step 3: Create the main function
# Create a function named main.
# Print a message explaining the program’s purpose.
# Ask the user for the desired sentence length.
# Validate the user input:
# Check if it is an integer.
# Check if it is between 2 and 20 (inclusive).
# If the input is invalid, print an error message and exit.
# If the input is valid, call get_random_sentence with the length and print the generated sentence.

def main():
    """
    Main function that serves as the entry point for the Random Sentence Generator program.

    This function interacts with the user by requesting input for the desired length of the
    sentence to be generated. It validates the input for type and value range, then invokes
    a function to generate the random sentence if the input is valid.

    :raises ValueError: If the user input cannot be converted to an integer.
    :return: None
    """
    print('Welcome to the Random Sentence Generator!')
    sentence_len = input('Enter the desired sentence length (2-20): ')
    try:
        sentence_len = int(sentence_len)
        if sentence_len < 2 or sentence_len > 20:
            print('Invalid sentence length.')
            return
        rand_sentence = get_random_sentence(sentence_len)
        if rand_sentence:
            print(rand_sentence)
    except ValueError:
        print('Invalid sentence length.')
        return


main()

# ----------------------------------------------------------------------------------------------------
# 🌟 Exercise 2: Working with JSON
# Goal: Access a nested key in a JSON string, add a new key, and save the modified JSON to a file.
#
# Key Python Topics:
#
# JSON parsing (json.loads())
# JSON serialization (json.dump())
# Dictionaries
# File handling (open())
#
#
# Instructions:
#
# Using the follow code:
#

sampleJson = """{
    "company": {
        "employee": {
            "name": "emma",
            "payable": {
                "salary": 7000,
                "bonus": 800
            }
        }
    }
}"""

# Access the nested “salary” key.
# Add a new key “birth_date” wich value is of format “YYYY-MM-DD”, to the “employee” dictionary: "birth_date": 
# "YYYY-MM-DD".
# Save the modified JSON to a file.
#
#
# Step 1: Load the JSON string
# Import the json module.
# Use json.loads() to parse the JSON string into a Python dictionary.
import json

# Parse JSON string into a dictionary
json_data = json.loads(sampleJson)

# Step 2: Access the nested “salary” key
# Access the “salary” key using nested dictionary access (e.g., data["company"]["employee"]["payable"]["salary"]).
# Print the value of the “salary” key.

print(json_data['company']['employee']['payable']['salary'])

# Step 3: Add the “birth_date” key
# Add a new key-value pair to the “employee” dictionary: "birth_date": "YYYY-MM-DD".
# Replace "YYYY-MM-DD" with an actual date.

json_data['company']['employee']['birth_date'] = "1997-05-24"  # Add birthdate field to employee dictionary

# Step 4: Save the JSON to a file
# Open a file in write mode ("w").
# Use json.dump() to write the modified dictionary to the file in JSON format.
# Use the indent parameter to make the JSON file more readable.
with open('sample.json', 'w', encoding='utf-8') as file:
    json.dump(json_data, file, indent=2)
