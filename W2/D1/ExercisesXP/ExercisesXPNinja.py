# Exercise: Call History
#
# Instructions
#
# 1. Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create
# an attribute called call_history which value is an empty list.
class Phone:
    """
    Represents a mobile phone with functionalities to make calls, send messages, and view call/message logs.

    The Phone class provides basic features for simulating interactions between phone objects, including recording call
    history, sending and receiving messages, and displaying logs. It supports operations such as tracking outgoing and
    incoming messages and filtering messages based on sender.

    :ivar phone_number: Phone number associated with the instance.
    :ivar call_history: List recording all call logs made by or to this phone.
    :ivar messages: List containing message logs in dictionary format with keys: 'to', 'from', 'content'.
    """

    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # 2. Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The
    # method should print a string stating who called who, and add this string to the phone’s call_history.
    def call(self, other_phone):
        call_log = f'Calling {other_phone.phone_number} from {self.phone_number}'
        print(call_log)
        self.call_history.append(call_log)

    # 3. Add a method called show_call_history. This method should print the call_history.
    def show_call_history(self):
        print(f'Call history:')
        for call in self.call_history:
            print(f'- {call}')

    # 4. Add another attribute called messages to your __init__() method which value is an empty list.

    # 5. Create a method called send_message which is similar to the call method. Each message should be saved as a
    # dictionary with the following keys:
    # to : the number of another Phone object
    # from : your phone number (also a Phone object)
    # content : the content of the message
    def send_message(self, other_phone, message):
        print(f'Message successfully sent to {other_phone.phone_number}')
        sent_message = {'to': other_phone.phone_number, 'from': self.phone_number, 'content': message}
        # add the message to both phones' message list
        self.messages.append(sent_message)
        other_phone.messages.append(sent_message)

    # 6. Create the following methods: show_outgoing_messages(self), show_incoming_messages(self),
    # show_messages_from(self)
    def show_outgoing_messages(self):
        print(f'Outgoing messages from {self.phone_number}:')

        if not self.messages:
            print("No messages in history.")
            return

        messages_found = False

        for outgoing_message in self.messages:
            if outgoing_message['from'] == self.phone_number:
                print(f'- to: {outgoing_message['to']}, message: {outgoing_message['content']}')
                messages_found = True

        if not messages_found:
            print("No messages in history.")
            return

    def show_incoming_messages(self):
        print(f'Incoming messages to {self.phone_number}:')

        if not self.messages:
            print("No messages in history.")
            return

        messages_found = False

        for incoming_message in self.messages:
            if incoming_message['to'] == self.phone_number:
                print(f'- from: {incoming_message['from']}, message: {incoming_message['content']}')
                messages_found = True

        if not messages_found:
            print(f"No incoming messages found.")
            return

    def show_messages_from(self, other_phone):
        print(f'Incoming messages to {self.phone_number} from {other_phone.phone_number}:')

        if not self.messages:
            print("No messages in history.")
            return

        messages_found = False

        for message in self.messages:
            if message['from'] == other_phone.phone_number and message['to'] == self.phone_number:
                print(f'- {message['content']}')
                messages_found = True

        if not messages_found:
            print(f"No outgoing messages found.")
            return

# 7. Test your code !!!
my_phone = Phone('0501234567')
my_friend_phone = Phone('0501533568')
another_friend_phone = Phone('0502536560')
my_phone.call(my_friend_phone)
my_phone.call(another_friend_phone)
my_phone.show_call_history()
my_phone.send_message(my_friend_phone, 'Hello, how are you?')
my_phone.send_message(another_friend_phone, 'Hello, do you want to talk?')
my_phone.show_outgoing_messages()
my_friend_phone.send_message(my_phone, 'Hello, I\'m good. How are you?')
another_friend_phone.send_message(my_phone, 'Hi, yeah sure.')
my_phone.show_incoming_messages()
my_phone.show_messages_from(another_friend_phone)
