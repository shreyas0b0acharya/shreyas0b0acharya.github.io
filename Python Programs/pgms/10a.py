import plotly.graph_objects as go

time = [1, 2, 3, 4, 5]
values1 = [10, 11, 12, 13, 14]
values2 = [14, 13, 12, 11, 10]

fig = go.Figure()

fig.add_trace(go.Scatter(x=time, y=values1, mode='lines', name='Line 1'))
fig.add_trace(go.Scatter(x=time, y=values2, mode='lines', name='Line 2'))

fig.update_layout(title='Time Series with Two Lines', xaxis_title='Time', yaxis_title='Value')

fig.show()
