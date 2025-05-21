# Download this text file http://www.practicepython.org/assets/nameslist.txt and do the following steps

with open('words.txt', 'r') as file:
    # Read the file line by line
    lines: list[str] = file.readlines()
    content = ''.join(lines)
    words = content.split()

print('File line by line:')
for line in lines:
    print(line.strip())

# Read only the 5th line of the file
print(f'\n5th line: {lines[4]}')

# Read only the 5 first characters of the file
print(f'\nFirst 5 characters: {content[:5]}')

# Read all the file and return it as a list of strings. Then split each word.
print(words)

# Find out how many occurrences of the names "Darth", "Luke" and "Lea" are in the file
print(f'Darth: {words.count('Darth')}')
print(f'Luke: {words.count("Luke")}')
print(f'Lea: {words.count("Lea")}')

# Append your first name at the end of the file
# this will nit appear in the file becaause of the code after it
with open('words.txt', "a") as f:
    f.write("\nAhmad")

# Append "SkyWalker" next to each first name "Luke"
# since this one uses 'w' it overwrites the original file
updated_lines = [line.replace('Luke', 'Luke SkyWalker') for line in lines]
with open('words.txt', "w") as f:
    f.writelines(updated_lines)