import plotly.express as px
import pandas

states = ["CA", "TX", "NY"]
values = [10, 20, 30]

fig = px.choropleth(locations=states, color=values, locationmode="USA-states", scope="usa")
fig.show()
