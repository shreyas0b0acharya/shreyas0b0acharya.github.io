import graphviz

# Create a directed graph for the ER diagram
er_diagram = graphviz.Digraph(format="svg", engine="dot")

# Define styles for entities and relationships
entity_style = {'shape': 'rectangle', 'style': 'filled', 'color': '#85E3FF', 'fontname': 'Arial', 'fontsize': '12'}
relationship_style = {'shape': 'diamond', 'style': 'filled', 'color': '#FFC3A0', 'fontname': 'Arial', 'fontsize': '10'}

# Add entities (nodes)
er_diagram.node("BloodBank", "Blood Bank", **entity_style)
er_diagram.node("Manager", "Manager", **entity_style)
er_diagram.node("Donor", "Donor", **entity_style)
er_diagram.node("Donation", "Donation", **entity_style)
er_diagram.node("Recipient", "Recipient", **entity_style)

# Add relationships (edges)
er_diagram.node("Manages", "Manages", **relationship_style)
er_diagram.edge("BloodBank", "Manages")
er_diagram.edge("Manager", "Manages")

er_diagram.node("Donates", "Donates", **relationship_style)
er_diagram.edge("Donor", "Donates")
er_diagram.edge("Donation", "Donates")

er_diagram.node("Requests", "Requests", **relationship_style)
er_diagram.edge("Recipient", "Requests")
er_diagram.edge("BloodBank", "Requests")

# Render the diagram to SVG
output_path = "/mnt/data/Blood_Management_ERD.svg"
er_diagram.render(output_path, cleanup=True)
output_path
