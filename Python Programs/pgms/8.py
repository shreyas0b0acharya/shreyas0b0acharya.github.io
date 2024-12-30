from bokeh.plotting import figure, show
from bokeh.models import Label

# Line Plot
p1 = figure(title="Line Plot", x_axis_label='X', y_axis_label='Y')
p1.line([1, 2, 3, 4, 5], [6, 7, 2, 4, 5], legend_label="Line", line_width=2, color ="red")
p1.add_layout(Label(x=3,y=4,text="high"))

# Scatter Plot
p2 = figure(title="Scatter Plot", x_axis_label='X', y_axis_label='Y')
p2.scatter([1, 2, 3, 4, 5], [6, 7, 2, 4, 5], size=10, color="red", legend_label="Scatter")


# Bar Plot
p3 = figure(x_range=["A", "B", "C", "D"], title="Bar Plot")
p3.vbar(x=["A", "B", "C", "D"], top=[10, 20, 30, 40], width=0.9, color="blue", legend_label="Bar")


# Show all plots
show(p3)

