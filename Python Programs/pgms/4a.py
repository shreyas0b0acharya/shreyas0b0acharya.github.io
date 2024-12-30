import matplotlib.pyplot as plt
import numpy as np

# Data for the bar plot
categories = ['A', 'B', 'C', 'D', 'E']
values = np.random.rand(5)

# Create the bar plot
plt.bar(categories, values, color='red')

# Adding labels and title
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('4a Bar Plot Example')

# Display the plot
plt.show()
