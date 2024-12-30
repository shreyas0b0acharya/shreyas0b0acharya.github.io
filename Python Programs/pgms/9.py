import plotly.graph_objects as go
import numpy as np

x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
x, y = np.meshgrid(x, y)

z = (np.sin(y)*np.cos(x))+(np.cos(y)*np.sin(x))

fig = go.Figure(data=[go.Surface(z=z, x=x, y=y)])
fig.update_layout(title='3D Surface Plot',
                  scene=dict(xaxis_title='X', yaxis_title='Y', zaxis_title='Z'))
fig.show()

# 1. z = sin(x^2 + y^2)
# z = np.sin(x**2 + y**2)

# 2. z = cos(x^2 + y^2)
# z = np.cos(x**2 + y**2)

# 3. z = sin(x) * cos(y)
# z = np.sin(x) * np.cos(y)

# 4. z = sin(x) + cos(y)
# z = np.sin(x) + np.cos(y)

# 5. z = x * y
# z = x * y

# 6. z = x^2 + y^2
# z = x**2 + y**2

# 7. z = e^-(x^2 + y^2)
# z = np.exp(-(x**2 + y**2))

# 8. z = sin(x) * cos(y) * sin(x^2 + y^2)
# z = np.sin(x) * np.cos(y) * np.sin(x**2 + y**2)
