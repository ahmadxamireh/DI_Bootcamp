# Daily challenge : Advanced Algorithm
#
# Instructions
# Here is a python code that generates a list of 20,000 random numbers, called list_of_numbers, and a target number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

# Create a program that finds, within list_of_numbers, all the pairs of number that sum to the target number.
def find_pairs(list_of_numbers, target_number):
    pairs = set()
    numbers_seen = {}  # used dictionary for faster lookup O(1)
    for number in list_of_numbers:
        difference = target_number - number  # get the difference between our number and a random number
        if difference in numbers_seen:  # if the difference exists in the seen numbers list
            # sort tuples to avoid duplicates such as (1, 3727) and (3727, 1)
            pairs.add(tuple(sorted((number, difference))))
        # this tries to get the current value (count) for the number from the dictionary.
        # if the number already exists, it returns its current count. (10: 1)
        # if the number does not exist yet, it returns 0 (default value). (10: 0)
        # dict.get(key, default_value): if the key exists, it returns the value associated, else returns the default value.
        numbers_seen[number] = numbers_seen.get(number, 0) + 1  # we add 1 because we’ve just seen the number again.

    return list(pairs)

pairs = find_pairs(list_of_numbers, target_number)
# print out 3 examples
for i in range(min(3, len(pairs))):  # just in case there are just 2 items in the list
    print(f'{pairs[i][0]} and {pairs[i][1]} sums to the target_number {target_number}')
