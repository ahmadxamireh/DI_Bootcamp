# Mini-Project - Tic Tac Toe
#
# Goal: Create a Tic Tac Toe game in Python where two players can play against each other.
#
# 🛠️ What you will create
# A command-line Tic Tac Toe game that allows two players to take turns marking a 3x3 grid.
#
# Instructions:
# Tic Tac Toe is played on a 3x3 grid. Players take turns marking empty squares with their symbol (‘O’ or ‘X’). The
# first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins. If all squares
# are filled and no player has three in a row, the game is a tie.
#
# Step 1: Representing the Game Board
# You’ll need a way to represent the 3x3 grid.
# A list of lists (a 2D list) is a good choice.
# Initially, each cell in the grid should be empty (e.g., represented by a space ‘ ‘).

# Step 2: Displaying the Game Board
# Create a function called display_board() to print the current state of the game board.
# The output should visually represent the 3x3 grid.
# Think about how to format the output to make it easy to read.

def display_board(board: list) -> None:
    """
    Prints the current state of the game board
    :param board: The 2D matrix (game board).
    """
    for i, row in enumerate(board):
        print(' | '.join(row))
        if i < 2:
            print("---------")

# Step 3: Getting Player Input
# Create a function called player_input(player) to get the player’s move.
# The function should ask the player to enter a position (e.g., row and column numbers).
# Validate the input to ensure it’s within the valid range and that the chosen cell is empty.
# Think about how to ask the user for input, and how to validate that input.

def player_input(player: str, board: list) -> tuple[int, int]:
    """
    Asks the player for a position in the 2D matrix between 1 and 3. If the position is already taken or out of range
    or an invalid value was given, asks for a new position.
    :param player: The current player's mark.
    :param board: The 2D matrix (game board).
    :return: The position (x,y) where the player would like to place his mark.
    """
    while True:
        try:
            location = input(f'Player {player}, please enter a position: ')
            row, column = location.strip().split()  # unpacking a list into two variables
            x, y = int(row), int(column)  # breaks the code if the values are strings and goes to except

            if x in range(1, 4) and y in range(1, 4):  # check if input is out of the 3x3 range
                if board[x - 1][y - 1] == ' ':  # -1 so it is in range of the 2D list 0-2
                    return x - 1, y - 1  # return position [x][y] if valid
                else:
                    print('This position was already taken! Please try again.')
            else:
                print('Input out of range! Please make sure it is between 1 and 3 values only.')
        except ValueError:
            print('Invalid input, please try again.')

# Step 4: Checking for a Winner
# Create a function called check_win(board, player) to check if the current player has won.
# The function should check all possible winning combinations (rows, columns, diagonals).
# If a player has won, return True; otherwise, return False.
# Think about how to check every possible winning combination.

def check_win(board: list, player: str) -> bool:
    """
    Checks if there is a winner by traversing throw rows/columns/diagonals.
    :param board: The 2D matrix (game board).
    :param player: The current player's mark.
    :return: Whether the player won or not.
    """
    # check if one row has the player's mark 3 times; winner
    for row in board:
        if row.count(player) == 3:
            return True

    # check if one column has the player's mark 3 times; winner
    columns = zip(*board)
    for column in columns:
        if column.count(player) == 3:
            return True

    # check if diagonally has the player's mark 3 times; winner
    right_diagonal = []
    left_diagonal = []
    # populate the left and right diagonal values
    for i in range(3):
        if i == 0:  # at row 1, add first value for right nd last value for left diagonals
            right_diagonal.append(board[i][0])
            left_diagonal.append(board[i][-1])
        elif i == 1:  # at row 2, both diagonals share the center value
            right_diagonal.append(board[i][1])
            left_diagonal.append(board[i][1])
        else:  # at row 3, add last value for right nd first value for left diagonals
            right_diagonal.append(board[i][-1])
            left_diagonal.append(board[i][0])
    # if the player's mark was found 3 times in either diagonal; winner
    if right_diagonal.count(player) == 3:
        return True
    if left_diagonal.count(player) == 3:
        return True
    return False  # no winner

# Step 5: Checking for a Tie
# Create a function to check if the game has resulted in a tie.
# The function should check if all positions of the board are full, without a winner.

def check_tie(board: list) -> bool:
    """
    Checks if the game board is filled with no empty spaces in any position.
    :param board: The 2D matrix (game board).
    :return: True if the board is filled with values, False otherwise.
    """
    for row in board:
        if ' ' in row:  # check each row for empty spaces
            return False
    return True

# Step 6: The Main Game Loop
# Create a function called play() to manage the game flow.
# Initialize the game board.
# Use a while loop to continue the game until there’s a winner or a tie.
# Inside the loop:
# Display the board.
# Get the current player’s input.
# Update the board with the player’s move.
# Check for a winner.
# Check for a tie.
# Switch to the next player.
# After the loop ends, display the final result (winner or tie).
#
# Tips:
# Consider creating helper functions to break down the logic into smaller, manageable parts.
# Follow the single responsibility principle: each function should do one thing and do it well.
# Think about how to switch between players.
# Think about how you will store the player’s symbol.

def play():
    # initialize a 3x3 grid of spaces; a space represents each cell.
    # loops 3 times, and at each iteration creates a list of 3 spaces
    board = list(list(' ' for _ in range(3)) for _ in range(3))
    current_player = 'X'
    while True:
        display_board(board)  # display the current state of the board
        row, column = player_input(current_player, board)  # get the current player's input (position)
        board[row][column] = current_player  # update the game board with the user's mark
        game_status = check_win(board, current_player)  # check if the player has won the game
        if game_status:
            display_board(board)
            print(f'Player {current_player} has won the game! Congratulations!!')
            break
        tie = check_tie(board)  # check if the board is filled with values since there was no winner
        if tie:
            display_board(board)
            print('It\'s a tie!')
            break
        current_player = 'X' if current_player == 'O' else 'O'  # switch between players

play()
