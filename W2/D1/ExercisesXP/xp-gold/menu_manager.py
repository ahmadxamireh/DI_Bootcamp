# Exercise 3: Restaurant Menu Manager
# Instructions
# The purpose of this exercise is to create a restaurant menu. The code will allow a manager to add and delete dishes.
#
# Create a python file called menu_manager.py.
#
# Create a class called MenuManager.

class MenuManager:
    # Create a method __init__ that instantiates an attribute called menu. The menu attributes value will be all the
    # current dishes (list of dictionaries). Each dish will be stored in a dictionary where the keys are name, price,
    # spice level and gluten index (which value is a boolean).
    # Here is a list of the dishes currently on the menu:
    #
    #     Soup – 10 – B - False
    #     Hamburger – 15 - A - True
    #     Salad – 18 - A - False
    #     French Fries – 5 - C - False
    #     Beef bourguignon– 25 - B - True
    #
    #     Meaning: For the spice level:
    #        • A = not spicy,
    #        • B = a little spicy,
    #        • C = very spicy
    #
    # The dishes provided above should be the value of the menu attribute.

    def __init__(self):
        self.menu = [
            {'name': 'soup', 'price': 10, 'spice level': 'B', 'gluten index': False},
            {'name': 'hamburger', 'price': 15, 'spice level': 'A', 'gluten index': True},
            {'name': 'salad', 'price': 18, 'spice level': 'A', 'gluten index': False},
            {'name': 'french fries', 'price': 5, 'spice level': 'C', 'gluten index': False},
            {'name': 'beef bourguignon', 'price': 25, 'spice level': 'B', 'gluten index': True}
        ]


    # Create a method called add_item(name, price, spice, gluten). This method will add new dishes to the menu.
    def add_item(self, name, price, spice, gluten):
        if name not in [item['name'] for item in self.menu]:
            self.menu.append({'name': name, 'price': price, 'spice level': spice, 'gluten index': gluten})
            print(f'The dish \'{name}\' was added successfully.')
        else:
            print(f'The dish \'{name}\' already exists in the menu.')


    # Create a method called update_item(name, price, spice, gluten). This method checks whether a dish is in the menu,
    # if the dish exists, then updates it. If not, notify the manager that the dish is not in the menu.
    def update_item(self, name, price, spice, gluten):
        for i, item in enumerate(self.menu):
            if item['name'] == name:
                item['price'] = price
                item['spice level'] = spice
                item['gluten index'] = gluten
                print(f'The dish \'{name}\' was updated successfully.')
                return
        print(f'{name} is not an available dish.')


    # Create a method called remove_item(name). This method should check if the dish is in the menu, if the dish exists,
    # then delete it and print the updated dictionary. If not, notify the manager that the dish is not in the menu.
    def remove_item(self, name):
        for i, item in enumerate(self.menu):
            if item['name'] == name:
                del self.menu[i]
                print(f'The dish \'{name}\' was removed successfully.')
                return
        print(f'{name} is not an available dish.')


    def __repr__(self) -> str:
        dishes = ''
        for item in self.menu:
            dishes += (f"{item['name'].title()} - {item['price']} - {item['spice level'].capitalize()} - "
                       f"{item['gluten index']}\n")
        out = f"""
Menu manager with {len(self.menu)} dishes as follows:

{dishes}
Meaning: For the spice level:
  • A = not spicy
  • B = a little spicy
  • C = very spicy
"""
        return out


menu = MenuManager()
print(menu)
menu.add_item('salad', 15, 'A', True)
menu.add_item('mashed potatoes', 10, 'B', False)
print(menu)
menu.remove_item('salad')
menu.update_item('kebab', 20, 'A', False)
