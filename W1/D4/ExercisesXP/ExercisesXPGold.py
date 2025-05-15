# Exercise 1 : When will I retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).
#
# 1. Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be
# enough.)
def get_age(year, month, day):
    current_year = 2025
    current_month = 5
    return (current_year - year) - (current_month < month)
    # the tuple returns true if the birth month has passed (true = 1)

# 2. After calculating the age of a person, the function should return the age (the age is an integer).

# 3. Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth
# is able to retire or not.

# 4. Calculate. You may need to do a little more hard-coding here.

# 5. Return True if the person can retire, and False if he/she can’t.

def can_retire(gender, date_of_birth):
    birthday = date_of_birth.split('/')  # birthday format YYYY/MM/DD
    age = get_age(int(birthday[0]), int(birthday[1]), int(birthday[2]))
    if gender == 'm':
        return age >= 67
    else:
        return age >= 62

# Ask for the user’s gender as “m” or “f”.
user_gender = input('Please enter your gender (m/f): ')

# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
birthday = input('Please enter your date of birth (yyyy/mm/dd): ')

# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
print(f'You {'can' if can_retire(user_gender, birthday) else "can't"} retire.')

# ----------------------------------------------------------------------------------------------------
# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

def summation(x):
    print(int(x) + int(x * 2) + int(x * 3) + int(x * 4))

summation(input('Please enter an integer: '))

# ----------------------------------------------------------------------------------------------------
# Exercise 3 : Double Dice
# Instructions
# 1. Create a function that will simulate the rolling of a dice.
# Call it throw_dice. It should return an integer between 1 and 6.
from random import randint
def throw_dice():
    return randint(1, 6)

# 2. Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number,
# ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.
def throw_until_doubles():
    throws = 0
    while True:
        throws += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return throws

# 3. Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of
# those function calls (in other words, how many throws it took until doubles were thrown, each time) in a
# collection. (What kind of collection? Read below to understand what we will need the data for, and this should help
# you decide which data structure to use).
def main():
    throws = []
    for i in range(100):
        throws.append(throw_until_doubles())

    # 4. After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to
    # reach 100 doubles.
    total_throws = sum(throws)
    print(f'Total throws: {total_throws}')

    # 5. Also print out a message telling the user the average amount of throws it took to reach doubles. Round this
    # off to 2 decimal places.
    print(f'Average throws to reach doubles: {round(total_throws / len(throws), 2)}')

main()
