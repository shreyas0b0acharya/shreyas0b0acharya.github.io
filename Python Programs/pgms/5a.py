import matplotlib.pyplot as plt
import numpy as np

# Generate some random data
data = np.random.randn(10000)  # 1000 random values from a standard normal distribution

# Create a histogram
plt.hist(data, bins=20, color='pink', edgecolor='black', alpha=0.7)

# Add labels and title
plt.title('5a Histogram of Random Data')
plt.xlabel('Value')
plt.ylabel('Frequency')
# Show the plot
plt.show()
