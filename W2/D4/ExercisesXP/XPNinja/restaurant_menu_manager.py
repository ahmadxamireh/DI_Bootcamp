# Exercise 1: Restaurant Menu Manager - Regular Expressions
# Instructions
# Goal: The Manager wants to have a special Valentine’s night, but there are some rules.
#
# 1. Create a new list of special Valentine's Day items inside the JSON file. For now the list should be empty.

# 2. Ask the manager for a new Valentine item to add, if the item is correct (i.e., follows the rules below),
# then add it to the list inside the JSON file.

# 2.1. Each word in the item name should begin with an uppercase letter, and because it’s Valentine's Day,
# the first word needs to begin with a capital “V”.

# 2.2. If the name contains connection words, they should begin in lowercase.
# Example: Vegetable Soup of Valentines-day

# 2.3. The name of the meal needs to contain at least two “e”, and no numbers.

# 2.4. The price needs to match the following pattern: XX,14, where X are numbers.
import json, re


def load_menu():
    try:
        with open('valentines_special.json', 'r') as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"valentine_items": []}


def save_menu(menu):
    with open('valentines_special.json', 'w') as file:
        json.dump(menu, file, indent=4)


def valid_name(name):
    # First word must start with capital 'V', then allow either Capitalized or lowercase connection words
    basic_regex = r"^V[a-z]*(?: (?:[A-Z][a-z]*|of|and|the|in|on|at|with|for|to|by|from|but|or|nor|as|yet|so|a|an))*$"
    has_two_es = name.lower().count('e') >= 2
    no_digits = not any(char.isdigit() for char in name)
    return re.fullmatch(basic_regex, name) and has_two_es and no_digits


# Validate price in form XX,14
def valid_price(price):
    return re.fullmatch(r"^\d{2},14$", price)


# 3. Create an algorithm that displays a heart made of stars (*), when the menu is showed.
def show_heart():
    heart = [
        "  ***   ***  ",
        " ***** ***** ",
        "*************",
        " *********** ",
        "  *********  ",
        "   *******   ",
        "    *****    ",
        "     ***     ",
        "      *      "
    ]
    print("\n".join(heart))


# Main function
def main():
    menu_data = load_menu()
    print("""
    Valentine's Day Menu Rules:

    1. The item name must start with a capital 'V'.
    2. Each word in the name must begin with an uppercase letter.
    3. Connection words (like 'of', 'and', 'the', etc.) must be in lowercase.
       Example: Valentine Soup of Love
    4. The name must contain at least two 'e' letters.
    5. The name must not contain any numbers.
    6. The price must follow the format: XX,14 — where X are digits.
       Example: 45,14

    Please follow all the rules when adding a new Valentine's menu item.
    """)
    name = input("Enter the Valentine's item name: ").strip()
    price = input("Enter the price (XX,14): ").strip()

    if not valid_name(name):
        print("Invalid name format. Please follow the Valentine's rules.")
        return

    if not valid_price(price):
        print("Invalid price format. Must be like 42,14.")
        return

    menu_data["valentine_items"].append({'name': name, 'price': price})
    save_menu(menu_data)

    print("Item added successfully!\n")
    show_heart()
    print("\nCurrent Valentine's Menu:")
    for item in menu_data["valentine_items"]:
        print(f"- {item['name']} | {item['price']}")


if __name__ == '__main__':
    main()
