# Exercise 1
# Write a script that inserts an item at a defined index in a list.

fruits = ['Apple', 'Banana', 'Pear']
fruits.insert(1, 'Orange')
print(fruits)

# Exercise 2
# Write a script that counts the number of spaces in a string.
text = "Hello World, my name is Python!"
spaces = 0
for c in text:
    if c == ' ':
        spaces += 1
print(f'Number of spaces: {spaces}')

# Exercise 3
# Write a script that calculates the number of upper case letters and lower case letters in a string.
text = "Hello World, my name is Python!"
upper, lower = 0, 0
for c in text:
    if c.isupper():
        upper += 1
    elif c.islower():
        lower += 1
print("Upper case letters: ", upper)
print("Lower case letters: ", lower)

# Exercise 4
# Write a function to find the sum of an array without using the built-in function:
def my_sum(arr):
    total = 0
    for i in arr:
        total += i
    return total

numbers = [1, 2, 3, 4, 5]
print(my_sum(numbers))

# Exercise 5
# Write a function to find the max number in a list
def find_max(arr):
    maximum = 0
    for i in arr:
        if i > maximum:
            maximum = i
    return maximum

numbers = [1, 2, 9, 4, 5]
print(f'The maximum number is: {find_max(numbers)}')

# Exercise 6
# Write a function that returns the factorial of a number
def factorial(num):
    if num > 1:
        return num * factorial(num - 1)
    else:
        return num

print(factorial(4))

# Exercise 7
# Write a function that counts an element in a list (without using the count method):
def list_count(arr, element):
    count = 0
    for i in arr:
        if i == element:
            count += 1
    return count

print(list_count(['a', 'a', 't', 'o'], 'a'))

# Exercise 8
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
def norm(arr):
    sum_of_squares = 0
    for i in arr:
        sum_of_squares += i ** 2
    return sum_of_squares ** 0.5

print(norm([1, 2, 2]))

# Exercise 9
# Write a function to find if an array is monotonic (sorted either ascending of descending)
def is_mono(arr):
    if arr == sorted(arr) or arr == sorted(arr, reverse=True):
        return True
    else:
        return False

print(is_mono([7, 6, 5, 5, 2, 0]))
print(is_mono([2, 3, 3, 3]))
print(is_mono([1, 2, 0, 4]))

# Exercise 10
# Write a function that prints the longest word in a list.
def longest_word(arr):
    longest = ''
    for word in arr:
        if len(word) > len(longest):
            longest = word
    return longest

print(longest_word(['hello', 'world', 'python']))

# Exercise 11
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
def separate_list(arr):
    integers = []
    strings = []
    for item in arr:
        if type(item) == int:
            integers.append(item)
        else:
            strings.append(item)
    return integers, strings

print(separate_list([1, 'a', 2, 'b']))

# Exercise 12
# Write a function to check if a string is a palindrome:
# palindrome: a word, phrase, or sequence that reads the same backward as forward
def is_palindrome(string):
    return string == string[::-1]

print(is_palindrome('radar'.lower()))
print(is_palindrome('Radar'.lower()))
print(is_palindrome('John'.lower()))

# Exercise 13
# Write a function that returns the number of words in a sentence with length > k:
def sum_over_k(sentence, k):
    count = 0
    for word in sentence.split():
        if len(word) > k:
            count += 1
    return count

print(sum_over_k('Do or do not there is no try', 2))

# Exercise 14
# Write a function that returns the average value in a dictionary (assume the values are numeric):
def dict_avg(dictionary):
    total = 0
    for value in dictionary.values():
        total += value
    return total / len(dictionary)

print(dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))

# Exercise 15
# Write a function that returns common divisors of 2 numbers:
def common_div(num1, num2):
    divisors = []
    for i in range(1, min(num1, num2) + 1):
        if num1 % i == 0 and num2 % i == 0:
            divisors.append(i)
    return divisors

print(common_div(10, 20))

# Exercise 16
# Write a function that tests if a number is prime:
# >>> is_prime(11)
# >>> True
def is_prime(num):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                return False
        return True
    else:
        return False

print(is_prime(4))
print(is_prime(5))

# Exercise 17
# Write a function that prints elements of a list if the index and the value are even:
def weird_print(arr):
    even = []
    for i in range(len(arr)):
        if i % 2 == 0 and arr[i] % 2 == 0:
            even.append(arr[i])
    return even

print(weird_print([1, 2, 2, 3, 4, 5]))

# Exercise 18
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
def type_count(**kwargs):
    types = {}
    for value in kwargs.values():
        if type(value).__name__ not in types:  # . __name__ extracts just the name of the function/type/class
            types[type(value).__name__] = 1
        else:
            types[type(value).__name__] += 1
    return ', '.join(f"{k}: {v}" for k, v in types.items())

print(type_count(a=1, b='string', c=1.0, d=True, e=False))

# Exercise 19
# Write a function that mimics the builtin .split() method for strings.
# By default, the function uses whitespace, but it should be able to take an argument for any character and split with
# that argument.
def split_string(string, sep=' '):
    result = []
    word = ''
    for char in string:
        if char == sep:  # if the character equals the separator
            if word != '':  # if the word is not an empty string
                result.append(word)
                word = ''  # reset the temporary word
        else:
            word += char
    if word != '':  # add the remaining word after the last separator if it exists
        result.append(word)
    return result

print(split_string('Hello World, my name is Python!'))

# Exercise 20
# Convert a string into a password format.

def password_format(string):
    return '*' * len(string)

print(password_format('mypassword'))
