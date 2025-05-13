# 🌟 Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values.
# Your task is to create a summary report that calculates the average grade for each student,
# assigns a letter grade, and determines the class average.
# Initial Data:
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.
student_averages = {name: round(sum(grades)/len(grades), 2) for name, grades in student_grades.items()}

# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale,
# and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60

student_letter_grades = {}

for name, average in student_averages.items():
    if average >= 90:
        student_letter_grades[name] = 'A'
    elif 80 <= average <= 89:
        student_letter_grades[name] = 'B'
    elif 70 <= average <= 79:
        student_letter_grades[name] = 'C'
    elif 60 <= average <= 69:
        student_letter_grades[name] = 'D'
    elif 60 < average:
        student_letter_grades[name] = 'F'
    else:
        student_letter_grades[name] = 'null'

# Calculate the class average (the average of all students’ averages) and print it.
class_average = sum(student_averages.values())/len(student_averages)

# Print the name of each student, their average grade, and their letter grade.
for name in student_grades.keys():
    print(f'Name: {name}, grades = {student_grades[name]}, average = {student_averages[name]}, letter grade = {student_letter_grades[name]}.')

# max_name_length = max(len(name) for name in student_grades.keys())
#
# for name in student_grades.keys():
#     spaces = ' ' * (max_name_length - len(name))
#     print(f"{name}:{spaces} Average Grade = {student_averages[name]:.2f}, Letter Grade = {student_letter_grades[name]}")

# 🌟 Exercise 2 : Advanced Data Manipulation and Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior.
# The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# Tasks:
# 1. Total Sales Calculation: Calculate the total sales for each product category
# (i.e., the total revenue generated from each type of product).
# Use a loop to iterate through the data and a dictionary to store the total sales for each product.

# the following generator expression creates a dictionary and fills it with the names
# of each product by traversing over the set of product names that is also generated from
# the dictionaries inside the list. (Dictionary comprehension)
total_sales = {product: 0 for product in {sales_data[i]['product'] for i in range(len(sales_data))}}

for customer in sales_data:
    total_sales[customer['product']] += customer['price'] * customer['quantity']

print(total_sales)

# 2. Customer Spending Profile: Determine the total amount spent by each customer.
# Use a dictionary to maintain the sum of amounts each customer has spent.

customer_spending = {}
for data in sales_data:
    if data['customer_id'] not in customer_spending:
        customer_spending[data['customer_id']] = data['price'] * data['quantity']
    else:
        customer_spending[data['customer_id']] += data['price'] * data['quantity']

print(customer_spending)

# 3. Sales Data Enhancement:
# Add a new field to each transaction called “total_price” that represents the
# total price for that transaction (quantity * price).
# Use a loop to modify the sales_data list with this new information.

for data in sales_data:
    data['total_price'] = data['price'] * data['quantity']

print(sales_data)

# 4. High-Value Transactions:
# Using list comprehension, create a list of all transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.

high_value_transaction = [transaction for transaction in sales_data if transaction['total_price'] > 500]
high_value_transaction.sort(key=lambda x: x['total_price'], reverse=True)
print(high_value_transaction)

# 5. Customer Loyalty Identification:
# Identify any customer who has made more than one purchase, suggesting potential loyalty.
# Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

customer_loyalty = {}
for data in sales_data:
    if data['customer_id'] not in customer_loyalty:
        customer_loyalty[data['customer_id']] = 1
    else:
        customer_loyalty[data['customer_id']] += 1

loyal_customers = [customer for customer in customer_loyalty if customer_loyalty[customer] > 2]

print(f'Loyal customers IDs: {loyal_customers}.')

# Bonus: Insights and Analysis:
# Calculate the average transaction value for each product category.

product_sale_number = {}
for data in sales_data:
    if data['product'] not in product_sale_number:
        product_sale_number[data['product']] = data['quantity']
    else:
        product_sale_number[data['product']] += data['quantity']
print(product_sale_number)

for sale in total_sales.keys():
    print(f'{sale.capitalize()}\'s average transaction is: {round(total_sales[sale] / product_sale_number[sale], 2)}.')

# Identify the most popular product based on the quantity sold.

print(f'The most popular product is {''.join([product for product, sales in product_sale_number.items() if sales == max(product_sale_number.values())])}.')

# Provide insights into how these analyses could inform the company’s marketing strategies.

# Products with higher average transaction mean they are premium pricey products.
# The most popular product could indicate that it was prices correctly and the demand is high.
# Tracking these things will helps us determine how to price and market products to increase sales.