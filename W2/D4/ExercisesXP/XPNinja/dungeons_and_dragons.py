# Exercise 2: Dungeons & Dragons
# Instructions
# 1. For a game of Dungeons & Dragons, each player starts by generating a character they can play with. This character
# has, among other things, six attributes/stats:
# Strength
# Dexterity
# Constitution
# Intelligence
# Wisdom
# Charisma
#
# 2. These six abilities have scores that are determined randomly. You do this by rolling four 6-sided dice and record
# the sum of the largest three dice. You do this six times, once for each ability.
# For example, the six throws of four dice may look like:
# 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
# 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
# 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to a constitution.
# 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
# 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
# 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.
#
# 3. Create a class called Character and a class called Game for this exercise.
import random


class Character:
    """
    Representation of a role-playing character with various attributes derived from
    dice throws. This class models characters with characteristics such as strength,
    dexterity, constitution, intelligence, wisdom, and charisma, alongside their name
    and age.

    The character's attributes are randomly generated through a dice-rolling
    mechanism, simulating traditional tabletop RPG stat generation.

    :ivar name: The name of the character.
    :type name: str
    :ivar age: The age of the character.
    :type age: int
    """
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        self.strength = self.throw_dice()
        self.dexterity = self.throw_dice()
        self.constitution = self.throw_dice()
        self.intelligence = self.throw_dice()
        self.wisdom = self.throw_dice()
        self.charisma = self.throw_dice()


    @staticmethod
    def throw_dice() -> int:
        """
        Generates a random dice roll result by simulating four six-sided dice rolls,
        removing the lowest roll, and summing the remaining three.

        This method is a static utility for simulating a dice roll using four six-sided dice
        commonly seen in tabletop games like D&D. By removing the smallest value among four dice rolls
        and summing the remaining three, the method provides results in a range suited to such game mechanics.

        :rtype: int
        :return: The sum of the three highest rolls after discarding the lowest roll
                 from four simulated six-sided dice rolls.
        """
        rand_ints = [random.randint(1, 6) for _ in range(4)]
        rand_ints.sort()  # sort so we could have the smallest integer at index 0
        rand_ints.pop(0)  # remove the smallest integer
        return sum(rand_ints)


    def __repr__(self):
        return (f'Character: {self.name}, Age: {self.age}, Strength: {self.strength}, Dexterity: {self.dexterity}, '
                f'Constitution: {self.constitution}, Intelligence: {self.intelligence}, Wisdom: {self.wisdom}, '
                f'Charisma: {self.charisma}')


# Each user then creates his/her character, let them establish what the character's name and age are.
# Output the characters created into the following formats:
# txt: a nicely formatted text file for the players to use
# json: a json file of all the characters and attributes
# Hint: the Character class should be in charge of creating characters, the Game class should be in charge of how
# many times the Character gets instantiated and of exporting the data in JSON or txt

class Game:
    """
    Represents a game with a collection of players.

    This class facilitates adding players and exporting the player data
    to both text (.txt) and JSON (.json) file formats. Each player is
    represented as a `Character` object, and their attributes can be
    saved as structured data.

    :ivar players: A list containing all players added to the game. Each
        player is represented as a `Character` object.
    :type players: list
    """
    def __init__(self):
        self.players = []


    def add_player(self, name: str, age: int):
        """
        Adds a new player to the collection and returns the created player object.

        This method creates an instance of the `Character` class using the provided
        player's name and age, then appends it to the list of players. Finally, the
        created `Character` instance is returned.

        :param name: The name of the player being added.
        :type name: str
        :param age: The age of the player being added.
        :type age: int
        :return: The newly created `Character` instance.
        :rtype: Character
        """
        character = Character(name, age)
        self.players.append(character)
        return character


    def export_to_txt(self, filename='characters.txt'):
        """
        Writes the information of all players to a text file. Each player's representation
        is written to a new line in the specified file. If no filename is provided, the
        data will be written to a default file named 'characters.txt'.

        :param filename: The name of the text file where player information will be exported.
                         If not specified, defaults to 'characters.txt'.
        :type filename: str
        :return: None
        """
        with open(filename, 'w') as f:
            for player in self.players:
                f.write(f'{str(player)}\n')


    def export_to_json(self, filename='characters.json'):
        """
        Exports the character data to a JSON file. The method collects all character
        information such as name, age, and attributes into a dictionary, formats it,
        and writes it to a specified JSON file.

        :param filename: The name of the JSON file to which the character data will
            be exported. Default is 'characters.json'.
        :type filename: str
        :return: None
        """
        import json
        characters_dict = {
            'characters': [
                {
                    'name': p.name,
                    'age': p.age,
                    'strength': p.strength,
                    'dexterity': p.dexterity,
                    'constitution': p.constitution,
                    'intelligence': p.intelligence,
                    'wisdom': p.wisdom,
                    'charisma': p.charisma
                } for p in self.players
            ]
        }
        with open(filename, 'w') as f:
            json.dump(characters_dict, f, indent=4)


# The point of this exercise is to generate characters for players looking to start a game quickly.
# Start by asking the user how many players are playing.
def main():
    game = Game()
    number_of_players = int(input('How many players are playing? '))

    for player in range(number_of_players):
        name = input(f'What is the name of player {player + 1}? ')
        age = int(input(f'What is the age of player {player + 1}? '))
        character = game.add_player(name, age)
        print(f'Player {player + 1} has the following stats:')
        print(character)

    game.export_to_txt()
    game.export_to_json()


if __name__ == '__main__':
    main()
