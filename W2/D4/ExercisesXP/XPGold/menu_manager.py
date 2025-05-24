# Create a file called menu_manager.py. The file should contain a class called MenuManager, with the following
# functions:
#
# 1. __init__() - The function should read the menu from the restaurant_menu.json file and store it in a variable
# called menu.
import json, copy


class MenuManager:
    """
    Manages a restaurant's menu stored in a JSON file.

    This class provides functionality to manage a restaurant's menu, including:
    loading the menu from a file, adding new menu items, removing existing items,
    and saving the updated menu back to the file. It also supports displaying
    the menu contents for review or output purposes.

    :ivar path: File path to the restaurant's menu JSON file.
    :type path: str
    :ivar original_menu: The original menu loaded from the JSON file.
    :type original_menu: dict
    :ivar updated_menu: A deep copy of the `original_menu`, used for updates.
    :type updated_menu: dict
    """


    def __init__(self):
        self.path = 'restaurant_menu.json'
        try:
            with open(self.path, 'r') as file:
                # Load the menu from JSON file
                self.original_menu = json.load(file)
                # Create a deep copy to allow nested modifications
                self.updated_menu = copy.deepcopy(self.original_menu)

        except FileNotFoundError:
            raise FileNotFoundError('menu.json not found')
        except IOError as e:
            raise IOError(f'An IOError occurred: {e}')


    def get_item_names(self):
        """
        Returns a list of item names in lowercase from the updated menu.

        This method processes the `updated_menu` attribute and extracts all item
        names, converting them to lowercase for uniformity. The `updated_menu`
        is expected to have a specific data structure containing a list of
        items, each of which is a dictionary with a 'name' key.

        :return: A list of item names in lowercase extracted from `updated_menu`.
        :rtype: list of str
        """
        return [self.updated_menu['items'][i]['name'].lower() for i in range(len(self.updated_menu['items']))]


    # 2. add_item(name, price) – this method should add an item to the menu, although do not save the changes to the
    # file yet.

    def add_item(self, name: str, price: float):
        """
        Add a new item to the menu if it does not already exist.

        This method checks if the item with the given name already exists
        in the menu. If it does not, it adds the item with formatted name
        and price to the menu. Otherwise, no changes are made to the menu.

        :param name: Item name to be added to the menu.
        :type name: str
        :param price: Price of the item to be added.
        :type price: float
        :return: True if the item was successfully added, otherwise False.
        :rtype: bool
        """
        if name.lower() not in self.get_item_names():
            self.updated_menu['items'].append({'name': name.title(), 'price': price})
            return True
        else:
            return False


    # 3. remove_item(name) – if the item is in the menu, this function should remove it from the menu (and again do
    # not save the changes to the file yet) and return True. If the item was not in the menu, return False.
    # (Hint: use Python’s del operator).

    def remove_item(self, name: str):
        """
        Removes an item from the updated menu based on the provided name.

        This method checks if the given name matches any of the existing item
        names in the updated menu (case-insensitive). If a match is found,
        the item is removed from the list of items in the updated menu. If no
        match is found, no item is removed.

        :param name: The name of the item to be removed from the updated menu.
        :type name: str
        :return: A boolean value indicating whether the item was successfully
            removed. Returns True if the item was found and removed, otherwise
            returns False.
        :rtype: bool
        """
        if name.lower() in self.get_item_names():
            for i in range(len(self.updated_menu['items'])):
                if self.updated_menu['items'][i]['name'].lower() == name.lower():
                    del self.updated_menu['items'][i]
                    return True
        else:
            return False


    # 4. save_to_file() - When the manager is finished updating the menu this function should be called and it should
    # save all the updates and write them into the the restaurant_menu.json file (ie. the file which holds the menu).

    def save_to_file(self):
        """
        Saves the updated menu to the specified file path. If no changes have been made
        compared to the original menu, it does not perform any operation. If changes
        exist, updates the menu file with the new content in JSON format. Provides
        feedback to the user about the process.

        :raises IOError: If there is an issue opening or writing to the specified file.
        """
        if self.updated_menu == self.original_menu:
            print('No changes made to the original menu.')
        else:
            try:
                with open(self.path, 'w') as file:
                    json.dump(self.updated_menu, file, indent=2)
                    print('Menu updated successfully')
            except IOError as e:
                print(f'An IOError occurred: {e}')


    def __repr__(self):
        """
        Generate a string representation of the restaurant's menu.

        This method formats and generates a string preview of the restaurant's current menu.
        It aligns item names for better readability and organizes the item details with
        appropriate formatting. The menu consists of names of the food items with their respective
        prices rounded to two decimal places.

        :return: A formatted string representing the restaurant's menu.
        :rtype: str
        """
        print('The Restaurant\'s Menu is:')
        menu_width = len(max(self.get_item_names(), key=len))
        output = ''
        for item in self.updated_menu['items']:
            output += f'- {item['name'].title().ljust(menu_width)} : ${round(float(item['price']), 2)}\n'

        return output
