# Reverse the Sentence
# Write a program to reverse the sentence wordwise.
# Example:
# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

sentence = input('Please enter a sentence: ')
print(sentence)
print(' '.join(sentence.split()[::-1])) # [::-1] reverses a string or a list of items
