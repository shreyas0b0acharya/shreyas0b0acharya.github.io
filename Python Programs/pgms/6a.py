import matplotlib.pyplot as plt

# Data for the linear plot
x = [0, 1, 2, 3, 4, 5]  # X-axis values
y = [0, 2, 4, 6, 8, 10]  # Y-axis values (y = 2x)

# Create the plot
plt.plot(x, y,label="line")

# Adding labels and title
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('6a Linear Plot Example')
plt.grid(True)

# Show legend
plt.legend()

# Display the plot
plt.show()
