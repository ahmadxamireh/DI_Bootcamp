# Create a file called menu_editor.py , which will have the following functions:
#
# 1. load_manager()- this function should create a new MenuManager instance.
from menu_manager import MenuManager


def load_manager():
    """
    Loads and returns an instance of the MenuManager class.

    This function is responsible for creating an instance of the MenuManager
    class and returning it. It is intended to initialize and provide access
    to the MenuManager object for further use.

    :return: An instance of the MenuManager class
    :rtype: MenuManager
    """
    return MenuManager()


# 2. show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to
# choose an item. Call the appropriate function that matches the user’s input.

def show_user_menu():
    """
    Displays a user menu, allowing interaction with menu management features such as adding, deleting, viewing
    menu items, or exiting the program. The function operates in a loop until the user opts to exit. Changes made
    are saved to a JSON file upon exiting.

    :return: None
    """
    menu_manager = load_manager()
    menu = '''
====================
    MENU
(a) Add an item
(d) Delete an item
(v) View the menu
(x) Exit
    '''
    while True:
        user_choice = input(f'{menu}\n\nPlease enter your choice: ')
        if user_choice == 'a':
            add_item_to_menu(menu_manager)
        elif user_choice == 'd':
            remove_item_from_menu(menu_manager)
        elif user_choice == 'v':
            show_restaurant_menu(menu_manager)
        elif user_choice == 'x':
            menu_manager.save_to_file()
            print('Goodbye!')
            break
        else:
            print('Please enter a valid choice.')


# 3. add_item_to_menu() - this will ask the user to input the item’s name and price. It will not interact with the menu
# itself, but simply call the appropriate function from the MenuManager object.
# If the item was added successfully print a message which states: item was added successfully.

def add_item_to_menu(menu_manager: MenuManager):
    """
    Adds a new item to the menu by prompting the user for the item's name and price.

    This function interacts with a provided MenuManager object to add an item to
    the menu. It ensures user input is collected for the name and price of the
    menu item, validates the inputs (e.g., ensuring the price is a valid number),
    and notifies the user of the operation's success or failure.

    :param menu_manager: The MenuManager object used to manage the menu items.
    :type menu_manager: MenuManager
    :return: None
    """
    try:
        item_name = input('Enter item name: ')
        item_price = float(input('Enter item price: '))

        if menu_manager.add_item(item_name, item_price):
            print(f'Item {item_name} added successfully')
        else:
            print(f'Item {item_name} already exists in the menu')

    except ValueError:
        print('Invalid price input')


# 4. remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove
# from
# the restaurant’s menu. The function should not interact with the menu itself, but simply call the appropriate
# function from the MenuManager object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def remove_item_from_menu(menu_manager: MenuManager):
    """
    Removes an item from the menu managed by the given MenuManager instance.
    Prompts the user for the item name, attempts its removal, and notifies
    the user of the outcome.

    This function interacts with the user via console input/output to gather
    the item name and display results. It operates with the provided
    MenuManager instance to perform the modification.

    :param menu_manager: A MenuManager instance responsible for handling the menu.
    :return: None
    """
    item_name = input('Enter item name: ')
    if menu_manager.remove_item(item_name):
        print(f'Item {item_name} removed successfully')
    else:
        print(f'Item {item_name} does not exist in the menu')


# 5. show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu(menu_manager: MenuManager):
    """
    Prints the menu managed by the provided MenuManager instance.

    The function takes a `MenuManager` object and outputs its content via
    the `print` function. This is typically used to display the current
    menu in a readable format.

    :param menu_manager: An instance of the MenuManager class that
        handles the restaurant's menu data.
    :type menu_manager: MenuManager
    :return: None
    """
    print(menu_manager)


if __name__ == '__main__':
    show_user_menu()
