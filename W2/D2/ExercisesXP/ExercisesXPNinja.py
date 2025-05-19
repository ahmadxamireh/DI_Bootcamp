# Exercise: Conway’s Game of Life Instructions
#
# These are the rules of the Game of Life (as stated in Wikipedia):
#
# The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is
# in one of two possible states, alive or dead, (or populated and unpopulated, respectively).
#
# Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically,
# or diagonally adjacent. At each step in time, the following transitions occur:
#
# Any live cell with fewer than two live neighbors dies, as if by underpopulation.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by overpopulation.
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
# Using these rules, implement the Game. (Hint: use Classes !!!!)
# Use a few different initial states to see how the game ends.
#
# Notes:
#
# Display the grid after each generation
# The end of the game is fully determined by the initial state. So have it pass through your program and see how it
# ends.
# Be creative, but use classes
# The game can have fixed borders and can also have moving borders. First implement the fixed borders. Each “live”
# cell that is going out of the border, exits the game.
# Bonus: Make the game with ever expandable borders, make the maximum border size a very large number(10,000) so you
# won’t cause a memory overflow
import time


class Cell:
    """
    Represents a cell in a grid, which can either be alive or dead.

    :ivar coordinates: The coordinates of the cell in the grid as a tuple
        representing (row, column) indices.
    :ivar is_alive: A boolean value indicating whether the cell is alive
        (`True`) or dead (`False`).
    """


    def __init__(self, coordinates: tuple[int, int], is_alive: bool):
        # Initialize cell with coordinates and alive/dead status
        self.coordinates = coordinates
        self.is_alive = is_alive


class Matrix:
    """
    Represents a 2D grid for Conway’s Game of Life

    :ivar width: Represents the number of columns in the grid.
    :ivar height: Represents the number of rows in the grid.
    :ivar matrix: A 2D list representing the grid of cells.
        Each element is an instance of the `Cell` class.
    """


    def __init__(self, width, height):
        # Initialize grid dimensions and create an empty matrix
        self.width = width
        self.height = height
        self.matrix = self.create_matrix()  # initializes a matrix with dead cells


    def create_matrix(self):
        # Create a 2D matrix of dead cells with corresponding coordinates
        return [[Cell((x, y), False) for y in range(self.width)] for x in range(self.height)]


    def get_cell_status(self, x, y):
        # Return cell status at given coordinates, False if out of bounds
        if x < 0 or y < 0 or x >= self.height or y >= self.width:
            return False  # Out of bounds = dead
        return self.matrix[x][y].is_alive


    def set_cell_status(self, x, y, status: bool):
        # Set the alive/dead status of a cell at given coordinates if in bounds
        if 0 <= x < self.height and 0 <= y < self.width:
            self.matrix[x][y].is_alive = status


    def draw(self, iteration_number):
        # Visualize current state of grid
        print(f"Gen #{iteration_number + 1}:")
        output = "+---" * self.width + "+\n"
        for row in self.matrix:
            for cell in row:
                output += f"| {'■' if cell.is_alive else ' '} "
            output += "|\n" + "+---" * self.width + "+\n"
        print(output)


    def count_alive_neighbors(self, x, y):
        # Count the number of live neighbors for cell at given coordinates
        directions = [(-1, -1), (-1, 0), (-1, 1),
                      (0, -1), (0, 1),
                      (1, -1), (1, 0), (1, 1)]
        count = 0
        for dx, dy in directions:
            if self.get_cell_status(x + dx, y + dy):
                count += 1
        return count


    def next_generation(self):
        # Calculate and apply next generation state based on Conway's rules
        next_state = [[cell.is_alive for cell in row] for row in self.matrix]

        # Apply rules of Conway's Game of Life for each cell
        for x in range(self.height):
            for y in range(self.width):
                alive_neighbors = self.count_alive_neighbors(x, y)
                current_alive = self.matrix[x][y].is_alive

                # Any live cell with fewer than two live neighbors dies, as if by underpopulation.
                if current_alive and alive_neighbors < 2:  # Underpopulation
                    next_state[x][y] = False

                # Any live cell with two or three live neighbors lives on to the next generation.
                elif current_alive and alive_neighbors in [2, 3]:  # Survival
                    next_state[x][y] = True

                # Any live cell with more than three live neighbors dies, as if by overpopulation.
                elif current_alive and alive_neighbors > 3:  # Overpopulation
                    next_state[x][y] = False

                # Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                elif not current_alive and alive_neighbors == 3:  # Reproduction
                    next_state[x][y] = True

        # Update all cells with their new states
        for x in range(self.height):
            for y in range(self.width):
                self.matrix[x][y].is_alive = next_state[x][y]


# Create a game board
board = Matrix(5, 5)

print('Blinker pattern:')
board.set_cell_status(2, 1, True)
board.set_cell_status(2, 2, True)
board.set_cell_status(2, 3, True)
for i in range(5):
    board.draw(i)
    board.next_generation()
    time.sleep(1)  # pause for 1 second

# print('Block pattern (stable):')
# board.set_cell_status(1, 1, True)
# board.set_cell_status(1, 2, True)
# board.set_cell_status(2, 1, True)
# board.set_cell_status(2, 2, True)
# for i in range(5):
#     board.draw(i)
#     board.next_generation()
#     time.sleep(1)  # pause for 1 second

# print('Glider pattern (Moves Diagonally):')
# board.set_cell_status(0, 1, True)
# board.set_cell_status(1, 2, True)
# board.set_cell_status(2, 0, True)
# board.set_cell_status(2, 1, True)
# board.set_cell_status(2, 2, True)
# for i in range(15):
#     board.draw(i)
#     board.next_generation()
#     time.sleep(0.5)  # pause for 1 second