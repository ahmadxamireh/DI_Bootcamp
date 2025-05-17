# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****
for i in range(1, 6, 2):
    print(('x' * i).center(5))
print()
# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****
for i in range(1, 6):
    print(('x' * i).rjust(5))
print()
# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *
for i in range(1, 6):
    print(('x' * i).ljust(5))
for i in range(5, 0, -1):
    print(('x' * i).rjust(5))

# Exercise 2
# Analyze this code before executing it. Write some comments next to each line. Write the value of each variable and
# their changes and add the final output. Try to understand the purpose of this program.
my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):  # range: 0-4
    minimum = i  # 0 / 1
    for j in range(i + 1, len(my_list)):  # range: 1-5 / 2-5
        if my_list[j] < my_list[minimum]:  # 24 < 2: false / 12 < 24: true
            minimum = j # 2
            if minimum != i: # 2 != 1: true
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # swap positions
print(my_list)
# verdict: the function sorts in ascending order