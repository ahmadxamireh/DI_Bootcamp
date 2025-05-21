# Instructions:
# Consider this list
#
# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
# Look at this result:
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. Take a look at the googletrans module

# ** the latest update of googletrans requires await **

# asyncio is used for asynchronous programming in Python.
import asyncio
from googletrans import Translator

# This is an asynchronous function that will be run using asyncio.
async def translate_words():
    # The list of French words
    french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

    # Create a translator instance
    translator = Translator()

    # Create a dictionary using async operations
    translations = {}
    for word in french_words:
        # Uses await to asynchronously wait for the translation of each word.
        translation = await translator.translate(word, src='fr', dest='en')
        translations[word] = translation.text

    return translations


# Run the async function

result = asyncio.run(translate_words())
print(result)
