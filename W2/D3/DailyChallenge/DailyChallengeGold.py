# Daily Challenge GOLD - User Info
#
# Instruction: Information from the user
# Harder Daily Challenge
# Notice: solve this exercise using a lambda function.
#
# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.

i = 0
users = []  # [('ahmad', 1, 1), ('Ahmad', 2, 2), ('AHmad', 3, 1)]

while i < 5:
    try:
        user_input = input(f"#{i + 1} Enter name, age and score separated by commas (ex: Ahmad,28,100): ")
        temp = user_input.split(",")
        name = temp[0]
        age = int(temp[1])
        score = int(temp[2])
        i += 1
    except ValueError:
        print("Invalid input. Please try again.")
        continue
    else:
        users.append((name, age, score))

print(users)
# print(sorted(users, key=lambda x: x[0]))  # -> [('AHmad', 3, 1), ('Ahmad', 2, 2), ('ahmad', 1, 1)]
# print(sorted(users, key=lambda x: x[1]))  # -> [('ahmad', 1, 1), ('Ahmad', 2, 2), ('AHmad', 3, 1)]
# print(sorted(users, key=lambda x: x[2]))  # -> [('ahmad', 1, 1), ('AHmad', 3, 1), ('Ahmad', 2, 2)]

# Sort the list based on a tuple that contains: name, then age, then score. (lexicographical ordering)
print(sorted(users, key=lambda x: (x[0], x[1], x[2])))  # Name > Age > Score sorting priority

# Tom,19,80
# John,20,90
# Jony,17,91
# Jony,17,93
# Json,21,85
# Then, the output of the program should be:
# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'), ('Json', '21', '85'), ('Tom', '19', '80')]
