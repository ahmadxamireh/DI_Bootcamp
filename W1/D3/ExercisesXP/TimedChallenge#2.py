# Perfect number
# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.
#
# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.
# Hint: Google perfect numbers
# Example
#
# Input -- Enter the number:6
# Output -- True
#
# Input -- Enter the number:10
# Output --  False

number = int(input('Enter the number: '))

sum_of_divisors = sum([i for i in range(1, number) if number % i == 0])

print(True if sum_of_divisors == number else False)