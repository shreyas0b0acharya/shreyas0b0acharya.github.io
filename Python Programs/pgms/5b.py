import matplotlib.pyplot as plt


# Data for the pie chart
labels = ['Apples', 'Bananas', 'Cherries', 'Dates']  # Categories
sizes = [25, 35, 20, 20]  # Percentages for each category
colors = ['red', 'yellow', 'pink', 'brown']  # Colors for the pie slices
explode = (0.1, 0, 0, 0)  # Highlight the first slice (Apples)

# Create the pie chart
plt.pie(sizes, labels=labels, colors=colors, explode=explode, autopct='%1.1f%%', startangle=140)

# Add a title
plt.title('5b Fruit Distribution')

# Display the chart
plt.show()
