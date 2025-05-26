# Mini Project: Vaccines
#
# What we will learn
# OOP
#
# Vaccines management system
# Your goal is to create a program to help a city with the vaccination of its citizens.
#
# Part 1
# You will have to create two classes:
# Human
# Queue
#
#
# Human
# Represents a citizen of the city, it has the following attributes: id_number (str), name (str), age (int),
# priority (bool) and blood_type (str). Its blood type can be “A”, “B”, “AB” or “O”.
#
# This class has no methods.

class Human:
    """
    Represents a human being with specific attributes and familial relationships.

    This class models the basic information about a person and allows for managing
    familial relationships. Each human instance can maintain a list of family members
    who are also instances of the Human class.

    :ivar id_number: A unique identifier for the individual.
    :type id_number: str
    :ivar name: The name of the individual.
    :type name: str
    :ivar age: The age of the individual in years.
    :type age: int
    :ivar priority: Indicates if the individual is a priority case (e.g., in a queue).
    :type priority: bool
    :ivar blood_type: The blood type of the individual. Must be one of 'A', 'B', 'AB',
        or 'O'.
    :type blood_type: str
    :ivar family: A list of family members living with the individual. Each member
        in the list is an instance of the Human class.
    :type family: list[Human]
    """


    def __init__(self, id_number: str, name: str, age: int, priority: bool, blood_type: str):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        if blood_type in ['A', 'B', 'AB', 'O']:
            self.blood_type = blood_type
        else:
            raise ValueError('Blood type must be A, B, AB, or O.')

        # Part 2
        # Human
        # Create an attribute family for the Human class.
        #
        # Initialized as empty, family is a list of all the humans that are living in the same house with this human.
        # Add a method add_family_member(self, person) that adds the person to this human’s family and this human to the
        # person’s family.
        self.family: list[Human] = []


    def add_family_member(self, person):
        """
        Adds a family member to the family list if they are not already in it.

        This method ensures a bidirectional relationship between the current object's
        family list and the given person's family list. If the person is already a
        member of the family, no changes are made.

        :param person: The individual to be added to the family list.
        :type person: Person
        :return: None
        """
        if person not in self.family:
            self.family.append(person)
            person.family.append(self)
            print('Family member added successfully.')
        else:
            print('Family member already exists.')


# Queue
# Represents a queue of humans waiting for their vaccine.
# It has the following attribute : humans, the list containing the humans that are waiting. It is initialized empty.
#
# Every human returned by get_next and get_next_blood_type is removed from the list.
# Those functions return None if the list is empty (ie. no one in the list).
# Bonus: Don’t use any of the following built-in methods: list.insert, list.pop, list.index, list.sort, sorted.

class Queue:
    """
    Manages the queue for prioritizing humans for vaccination.

    This class allows the management of a queue where humans are prioritized based
    on age and a specified priority flag. It provides functionalities to add, find,
    and manipulate the queue based on the vaccination order. Additionally, it
    supports sorting humans in the queue based on priority criteria and retrieving
    specific entries based on attributes like blood type.

    :ivar humans: List holding the humans in the queue.
    :type humans: list[Human]
    """


    def __init__(self):
        self.humans: list[Human] = []


    # This class is useful to manage who will get vaccinated in priority. It has the following methods:
    # 1. add_person(self, person) : Adds a human to the queue, if he is older than 60 years old or a priority person,
    # put him at the beginning of the list (at index 0) before every other.
    def add_person(self, person: Human):
        """
        Adds a person to the list of people to be vaccinated based on priority or age.

        This method checks whether the given person is already in the list of humans. 
        If the person is not in the list and is either marked with priority or aged 60 
        or above, they are prioritized and placed at the beginning of the list. Otherwise, 
        the person is appended to the end of the list. If the person is already in the 
        list, a message is displayed indicating that they have already been vaccinated.

        :param person: An instance of the Human class representing the person to 
            be added to the vaccination list.
        :return: A boolean indicating whether the person was added successfully 
            to the list.
        """
        # Check if person already exists in queue
        if person not in self.humans:
            # Create temporary list for priority handling
            temp = []
            # Check if person is priority (age >= 60 or priority flag)
            if person.age >= 60 or person.priority:
                # Add priority person to front of queue
                temp.append(person)
                temp += self.humans
                self.humans = temp
                return True
            else:
                # Add non-priority person to end of queue 
                self.humans.append(person)
                return True
        else:
            print(f'{person.name} with ID number {person.id_number} was already vaccinated.')
            return False


    # 2. find_in_queue(self, person) : Returns the index of a human in the queue.
    def find_in_queue(self, person: Human):
        if not self.humans:  # Check if queue is empty
            print('The queue is empty.')
            return None
        for i, human in enumerate(self.humans):
            if person.id_number == human.id_number:
                return i
        print(f'{person.name} with ID number {person.id_number} was not found.')
        return None


    # 3. swap(self, person1, person2): Swaps person1 with person2.
    def swap(self, person1: Human, person2: Human):
        """
        Swaps the positions of two given people in the queue, if both are present.

        The method searches for the two specified humans in the current queue.
        If both are found, their positions are swapped. If the queue is empty,
        or if either of the specified persons is not found in the queue, the
        method will print an appropriate message and return a failure indication.

        :param person1: The first person to swap in the queue.
        :type person1: Human
        :param person2: The second person to swap in the queue.
        :type person2: Human
        :return: True if the swap was successful, False otherwise. Returns None
                 if the queue is empty.
        :rtype: bool or None
        """
        if not self.humans:
            print('The queue is empty.')
            return None
        # Check if both persons are in the queue and swap their positions
        if person1 in self.humans:
            if person2 in self.humans:
                # Get their indexes
                p1_i = self.find_in_queue(person1)
                p2_i = self.find_in_queue(person2)
                # Perform the swap
                self.humans[p1_i] = person2
                self.humans[p2_i] = person1
                return True
            else:
                # Second person not found in queue
                print(f'{person2.name} with ID number {person2.id_number} is not in the queue.')
                return False
        else:
            # First person not found in queue
            print(f'{person1.name} with ID number {person1.id_number} is not in the queue.')
            return False


    # 4. get_next(self) : Returns the next human waiting in the queue. The next human should be the one located at
    # index 0 in the list.
    def get_next(self):
        """
        Retrieve the next human from the queue. If the queue is empty, prints a message
        indicating so and returns None. If the queue has at least one human, retrieves
        the first human in the queue and removes it from the list.

        :raises None: Does not raise any exceptions.
        :return: Returns the next human object from the queue if available, otherwise 
            None.
        :rtype: Optional[Any]
        """
        if not self.humans:
            print('The queue is empty.')
            return None

        if len(self.humans) > 1:
            next_human = self.humans[0]  # Get first human in queue if not empty
            self.humans = self.humans[1:]  # Remove first human and keep rest of queue
            return next_human
        else:
            next_human = self.humans[0]  # Get the only human in queue 
            self.humans = []  # Clear the queue since it will be empty
            return next_human


    # 5. get_next_blood_type(self, blood_type) : Returns the first human with this specific blood type.
    def get_next_blood_type(self, blood_type):
        """
        Determines the next human in the queue with a given blood type, removes them 
        from the queue and returns the human object. If the queue is empty or no 
        human with the specified blood type is found, the method handles accordingly. 
        A ValueError is raised if the provided blood type is invalid.

        :param blood_type: The blood type to search for in the queue
        :type blood_type: str
        :return: The next human in the queue with the specified blood type, or None
        :rtype: Optional[object]
        :raises ValueError: If the provided blood type is not one of 'A', 'B', 'AB', or 'O'
        """
        if blood_type in ['A', 'B', 'AB', 'O']:
            if not self.humans:
                print('The queue is empty.')
                return None
            # Iterate through queue to find first match
            for i, human in enumerate(self.humans):
                if human.blood_type == blood_type:
                    next_human = human
                    # Remove person from queue, handling last element case
                    if i < len(self.humans) - 1:
                        self.humans = self.humans[:i] + self.humans[i + 1:]
                    else:
                        self.humans = self.humans[:i]
                    return next_human
        else:
            raise ValueError('Blood type must be A, B, AB, or O.')


    # 6. sort_by_age(self) : Sorts the queue
    # - first the priority people
    # - then, the older people
    # - then the younger people
    def sort_by_age(self):
        """
        Sorts the list of humans in the queue by their priority and age.

        This method categorizes the humans in the queue into three groups: those with
        priority, those who are old (aged 60 and above), and the rest who are younger.
        It then sorts each category in decreasing order of age using a custom sorting
        function and reassigns the sorted list back to the queue.

        The sorting ensures that humans with priority appear first in the queue, followed
        by older humans, and finally younger humans.

        :raises TypeError: If the `self.humans` object is not iterable.

        :returns: A boolean value indicating if the sorting was successful.
        :rtype: bool or None
        """
        if not self.humans:
            print('The queue is empty.')
            return None

        # Create lists to store humans by category
        priority = []
        old = []
        young = []

        # Categorize each human based on priority and age
        for human in self.humans:
            if human.priority:
                priority.append(human)
            elif human.age >= 60:
                old.append(human)
            else:
                young.append(human)


        # Helper function to sort humans by age in descending order
        def manual_sort(arr: list) -> list:
            for i in range(len(arr)):
                for j in range(i + 1, len(arr)):
                    if arr[i].age < arr[j].age:
                        arr[i], arr[j] = arr[j], arr[i]
            return arr


        # Combine sorted lists in priority order: priority -> old -> young
        self.humans = manual_sort(priority) + manual_sort(old) + manual_sort(young)
        print('The queue is now sorted by priority and age.')
        return True


    # Part 2:
    # Queue
    # Add the rearrange_queue(self) method to the Queue class, so that there won’t be two members of the same family one
    # after the other in the line.
    def rearrange_queue(self):
        """
        Rearranges the queue to ensure that no human in the list is followed
        immediately by another member of their family, if possible. If the queue is
        empty, a message is printed, and no action is taken. If no valid swap can
        be made for a family member, a warning is issued.

        :param self: The instance of the class containing the `humans` attribute,
                     which is a list of human objects.

        :return: The updated list of humans after rearrangement or `None` if the
                 queue is empty.
        :rtype: list or None
        """
        if not self.humans:
            print("The queue is empty.")
            return None

        i = 0
        while i < len(self.humans) - 1:
            # Check if next person is family member of current person
            if self.humans[i + 1] in self.humans[i].family:
                j = i + 2
                found_swap = False
                # Look for non-family member to swap with
                while j < len(self.humans):
                    if self.humans[j] not in self.humans[i].family:
                        # Swap the family member with non-family member
                        self.humans[i + 1], self.humans[j] = self.humans[j], self.humans[i + 1]
                        found_swap = True
                        break
                    j += 1
                if not found_swap:
                    print(f'Warning: could not rearrange family member at index {i + 1}.')
            i += 1

        return self.humans


def main():
    # Create some humans
    h1 = Human("001", "Alice", 30, False, "A")
    h2 = Human("002", "Bob", 70, False, "O")
    h3 = Human("003", "Charlie", 50, True, "B")
    h4 = Human("004", "Dana", 80, True, "AB")
    h5 = Human("005", "Eve", 25, False, "A")
    h6 = Human("006", "Frank", 40, False, "O")

    # Set up family relationships
    h2.add_family_member(h3)  # Bob and Charlie live together

    # Create a queue
    q = Queue()

    # Add humans to the queue
    q.add_person(h1)  # normal
    q.add_person(h2)  # elderly
    q.add_person(h3)  # priority
    q.add_person(h4)  # elderly + priority
    q.add_person(h5)  # family of h1
    q.add_person(h6)  # normal

    print("\nInitial queue:")
    for h in q.humans:
        print(f"{h.name} (Age: {h.age}, Priority: {h.priority})")

    # Test find_in_queue
    print("\nIndex of Charlie:", q.find_in_queue(h3))
    print("Index of Bob:", q.find_in_queue(h2))

    # Test swap
    print("\nSwapping Bob and Frank...")
    q.swap(h2, h6)
    print("Queue after swap:")
    for h in q.humans:
        print(h.name)

    # Test get_next
    print("\nNext to vaccinate:", q.get_next().name)
    print("Queue after one vaccinated:")
    for h in q.humans:
        print(h.name)

    # Test get_next_blood_type
    print("\nNext with blood type 'A':", q.get_next_blood_type("A").name)
    print("Queue after filtering A:")
    for h in q.humans:
        print(h.name)

    # Test sort_by_age
    print("\nSorting queue by age and priority...")
    q.sort_by_age()
    for h in q.humans:
        print(f"{h.name} (Age: {h.age}, Priority: {h.priority})")

    # Test rearrange_queue
    print("\nRearranging queue to separate family members...")
    q.rearrange_queue()
    for idx, h in enumerate(q.humans):
        print(f"Index {idx}: {h.name}")


if __name__ == '__main__':
    main()
