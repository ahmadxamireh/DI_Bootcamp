# Daily Challenge: Pagination
#
# Instructions: Pagination System
#
# 📄 What is Pagination?
#
# In web development, pagination helps break large lists into smaller, manageable chunks (pages), making it easier to
# navigate content like search results, product listings, or articles.
#
# Here’s a visual example:
#
# Page 1      Page 2      Page 3
# [a, b, c]   [d, e, f]   [g, h, i]
#
# Goal:
#
# Create a Pagination class that simulates a basic pagination system.
#
# Step 1: Create the Pagination Class
# Define a class called Pagination to represent paginated content.
# It should optionally accept a list of items and a page size when initialized.
import math


class Pagination:
    """
    Handles pagination of a list of items.

    Provides functionality to manage and navigate through items displayed across
    multiple pages with a specified page size. Supports operations such as navigating
    to specific pages, moving forward or backward between pages, and displaying items
    on the current page.

    :ivar items: A list of items to paginate.
    :ivar page_size: Number of items per page.
    :ivar current_idx: Index of the current page.
    :ivar total_pages: Total number of pages.
    """


    # Step 2: Implement the __init__ Method
    # Accept two optional parameters:
    # items (default None): a list of items
    # page_size (default 10): number of items per page
    #
    # Behavior:
    #
    # If items is None, initialize it as an empty list.
    # Save page_size and set current_idx (current page index) to 0.
    # Calculate total number of pages using math.ceil.

    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)  # ceil: This is the smallest integer >= x.


    # Step 3: Implement the get_visible_items() Method
    # This method returns the list of items visible on the current page.
    # Use slicing based on the current_idx and page_size.

    def get_visible_items(self):
        return self.items[self.current_idx * self.page_size: (self.current_idx + 1) * self.page_size]


    # Step 4: Implement Navigation Methods
    #
    # 📝 Note:
    #
    # Pages are indexed internally from 0, but user input is expected to start at 1.
    # All navigation methods (except go_to_page) should return self to allow method chaining.
    # These methods should help navigate through pages:

    # go_to_page(page_num)
    # → Goes to the specified page number (1-based indexing).
    # → If page_num is out of range, raise a ValueError.
    def go_to_page(self, page_num):
        try:
            page_num = int(page_num)
            if page_num < 1 or page_num > self.total_pages:
                raise ValueError("out-of-range")
        except ValueError as e:
            if str(e) == "out-of-range":
                print(f"Page number {page_num} is out of range.")
            else:
                print("Invalid input: not an integer.")
            return
        self.current_idx = page_num - 1


    # first_page()
    # → Navigates to the first page.
    def first_page(self):
        self.current_idx = 0
        return self


    # last_page()
    # → Navigates to the last page.
    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self


    # next_page()
    # → Moves one page forward (if not already on the last page).
    def next_page(self):
        if self.current_idx == self.total_pages - 1:
            print('You are on the last page!')
            return self
        self.current_idx += 1
        return self


    # previous_page()
    # → Moves one page backward (if not already on the first page).
    def previous_page(self):
        if self.current_idx == 0:
            print('You are on the first page!')
            return self
        self.current_idx -= 1
        return self


    # Step 5: Add a Custom __str__() Method
    # This magic method should return a string displaying the items on the current page, each on a new line.
    def __str__(self):
        return '\n'.join(self.get_visible_items())


# Step 6: Test Your Code
#
# Use the following test cases:

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
print(p.current_idx)
print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.current_idx)
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.current_idx)
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
# Index 10 is out of bounds!
print(p.current_idx + 1)
# 7

p.first_page().next_page().next_page()
print(p.get_visible_items())

p.go_to_page(0)
# Raises ValueError
