import matplotlib.pyplot as plt
import numpy as np

# Generate random data
x = np.random.randn(100)
y = np.random.randn(100)

# Create Scatter Plot
plt.scatter(x, y, color="red",label="random points")
plt.title('4b Scatter Plot')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.show()