# Exercise: Bank Account
# Instructions
#
# Part I:
# Create a class called BankAccount that contains the following attributes and methods:
# balance - (an attribute)
# __init__: initialize the attribute
# deposit: - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
# withdraw: - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive

class BankAccount:
    """
    Represents a bank account with functionalities such as authentication, deposit,
    and withdrawal.

    This class encapsulates the basic features of a bank account, including the ability to
    authenticate users and perform deposit and withdrawal operations securely. The class
    ensures that only authenticated users can access or modify the account balance.

    :ivar balance: The current balance of the bank account.
    :ivar username: The username associated with the account.
    :ivar password: The password associated with the account.
    :ivar authenticated: A flag indicating whether the user is authenticated.
    """


    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False


    def deposit(self, amount):
        """
        Adds a specified amount to the current balance.

        This method is used to deposit a positive amount to the user's account.
        The user must be authenticated to perform this action. If the amount
        provided is non-positive, an exception will be raised.

        :param amount: The amount to be deposited into the account. Must be a positive number.
        :raises Exception: Raised when the user is not authenticated.
        :raises ValueError: Raised when the specified amount is non-positive.
        """
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.balance += amount


    def withdraw(self, amount):
        """
        Withdraws a specified amount from the user's account balance.

        This method is used to withdraw a positive amount from the user's account.
        The user must be authenticated to perform this action. If the amount
        provided is non-positive, an exception will be raised.

        :param amount: The amount to withdraw from the account balance.
        :raises Exception: If the user is not authenticated.
        :raises ValueError: If the amount is not a positive value.
        """
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        self.balance -= amount


    def authenticate(self, username, password):
        """
        Authenticates a user by verifying the provided username and password
        against stored credentials. If the credentials match, the user is marked
        as authenticated.

        :param username: Username provided for authentication
        :param password: Password provided for authentication
        """
        if (username, password) == (self.username, self.password):
            self.authenticated = True


# Part II: Minimum balance account
# Creates a MinimumBalanceAccount that inherits from BankAccount.
# Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
# Override the withdrawal method so it only allows the user to withdraw money if the balance remains higher than the
# minimum_balance, raise an Exception if not.

class MinimumBalanceAccount(BankAccount):
    """
    A specialized bank account that enforces a minimum balance rule.

    The MinimumBalanceAccount class extends the features of a standard bank account
    to include the enforcement of a minimum balance. This ensures that the account
    balance cannot fall below a defined threshold when withdrawals are attempted.
    The class inherits basic account operations like deposit, authentication, and
    withdrawal from the parent `BankAccount` class while implementing additional
    behavior for enforcing the minimum balance condition.

    :ivar minimum_balance: The minimum allowed balance for the account.
    """


    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance


    def withdraw(self, amount):
        """
        Withdraws a specified amount from the user's account balance.

        This method checks several conditions before processing the withdrawal,
        including user authentication, ensuring the requested amount is positive,
        and verifying that the resulting balance does not go below the minimum
        balance. If any condition fails, the method raises an appropriate exception.

        :param amount: The amount to withdraw. Must be a positive number greater than zero.
        :raises Exception: If the user is not authenticated.
        :raises ValueError: If the amount is less than or equal to zero.
        :raises ValueError: If withdrawing the amount will result in a balance below the minimum balance.
        """
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount <= 0:
            raise ValueError("Amount must be positive.")
        new_balance = self.balance - amount
        if self.minimum_balance > new_balance:
            raise ValueError("'Withdrawal failed! The amount requested brings the balance below minimum balance.'")
        self.balance = new_balance


# Part III: Expand the bank account class
# Add the following attributes to the BankAccount class:
# username
# password
# authenticated (False by default)
#
# Creates a method called authenticate. This method should accept 2 strings: a username and a password. If the
# username and password match the attributes username and password, the method should set the authenticated
# boolean to
# True.
#
# Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action without being
#  authenticated, raise an Exception


# Part IV: BONUS: Create an ATM class
#
# __init__:
# 1. Accepts the following parameters: account_list and try_limit.
#
# 2. Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
# Hint: isinstance()
#
# 3. Validates that try_limit is a positive number, if you get an invalid input, raise an Exception, then move along and
# set try_limit to 2.
# Hint: Check out this tutorial
#
# 4. Sets attribute current_tries = 0
#
# 5. Call the method show_main_menu (see below)

class ATM:
    """
    Represents an ATM enabling user account interactions.

    The ATM class provides functionality for users to log in, access account menus, and perform
    basic account actions such as deposits and withdrawals. It supports multiple user accounts
    via an account list and implements a limited number of login attempts to prevent unauthorized
    access.

    :ivar account_list: A list of BankAccount or its derived instances used by the ATM.
        Accounts are authenticated during the login process.
    :ivar try_limit: Maximum number of login attempts allowed before shutting down.
    :ivar current_tries: Tracks the current number of incorrect login attempts made.
    """
    def __init__(self, account_list: list[BankAccount], try_limit):

        if not all(isinstance(acc, BankAccount) for acc in account_list):
            raise ValueError("The account list must be a list of BankAccount instances.")

        self.account_list = account_list

        if try_limit > 0:
            self.try_limit = try_limit
        else:
            self.try_limit = 2

        self.current_tries = 0

        self.show_main_menu()


    # Methods:
    # 1. show_main_menu:
    # This method will start a while loop to display a menu letting a user select:
    # Log in: Will ask for the user's username and password and call the log_in method with the username and password
    # (see below).
    # Exit.
    def show_main_menu(self):
        """
        Displays the main menu and handles user input to navigate through
        the menu options. This method remains in a loop until the user either
        chooses to log in successfully or exits the application.
        """
        while True:
            print("1: Log in\n0: Exit")
            choice = input("Enter your choice: ")
            if choice == "1":
                if not self.log_in():
                    break
            elif choice == "0":
                print("Goodbye.")
                break
            else:
                print("Invalid choice.")


    # 2. Log_in:
    # Accepts a username and a password.
    # Checks the username and the password against all accounts in account_list.
    # If there is a match (i.e., use the authenticate method), call the method show_account_menu.
    # If there is no match with any existing accounts, increment the current tries by 1. Continue asking the user for a
    # username and a password until the limit is reached (i.e., try_limit attribute). Once reached display a message
    # saying they reached max tries and shutdown the program.
    def log_in(self):
        """
        Attempts to log a user into an account by validating their credentials against
        a list of accounts. Prompts the user to input their username and password, and
        authenticates against the stored account information. If successful, it displays
        a menu for the authenticated account. If the login attempt limit is reached, it
        terminates the login process.

        :param self: The instance of the class calling the method. It provides access to
            account data (`self.account_list`) as well as login parameters like
            `self.current_tries` and `self.try_limit`.

        :raise None: No exceptions are explicitly raised in this function.

        :return: A boolean value indicating whether the login was successful
            (True) or not (False).
        """
        while self.current_tries < self.try_limit:
            username = input('Please enter your username: ')
            password = input('Please enter your password: ')
            for account in self.account_list:
                if account.authenticate(username, password):
                    print(f"Welcome, {username}!")
                    self.show_account_menu(account)
                    return True
            print("Invalid credentials.")
            self.current_tries += 1
        print('You have reached the maximum number of false tries, goodbye!')
        return False


    # 3. Show_account_menu:
    # Accepts an instance of BankAccount or MinimumBalanceAccount.
    # The method will start a loop, giving the user the option to deposit, withdraw or exit.
    def show_account_menu(self, account: BankAccount):
        """
        Displays an account menu for deposit and withdrawal operations.

        This function continuously provides a menu for the user, allowing them to
        choose between deposit, withdrawal, or exit operations for the provided
        account.

        :param account: Represents the account object on which deposit and withdrawal
            operations will be performed.
        """
        while True:
            print("\n1: Deposit\n2: Withdraw\n0: Exit")
            choice = input("Enter your choice: ")
            if choice == "0":
                print("Logging out...")
                break
            elif choice == "1":
                try:
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == "2":
                try:
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            else:
                print("Invalid choice.")
