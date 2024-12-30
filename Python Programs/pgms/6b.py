import matplotlib.pyplot as plt

# Data for the plot
x = [0, 1, 2, 3, 4, 5]  # X-axis values
y = [0, 2, 4, 6, 8, 10]  # Y-axis values (y = 2x)

# Create the plot with line formatting
plt.plot(x, y,
         linestyle='--',
         color='green',
         linewidth=2,
         marker='o',
         markerfacecolor='red',
         label='y = 2x')

# Adding labels and title
plt.xlabel('X-axis',color='red')
plt.ylabel('Y-axis')
plt.title('6b Linear Plot with Line Formatting')

# Show legend
plt.legend()

# Display the plot
plt.show()
