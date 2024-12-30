import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Set up the aesthetic functions
sns.set_theme()

# Create some data
x = np.linspace(0, 8, 200)
for i in range(1,10):
    y = np.cos(x)*i
    sns.lineplot(x=x, y=y)

#y = np.sin(x)

#sns.lineplot(x=x, y=y)

#sns.barplot(x=x, y=y)

plt.title("7 Customized Seaborn Plot", fontsize=20)
plt.show()

