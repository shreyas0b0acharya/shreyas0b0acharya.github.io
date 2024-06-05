% Define the symbolic variables
syms x y z

% Define the scalar field g
g = x^2 + y^2 + z^2;

% Define the vector field f
f = [(x^2 + y^2 + z^2); 2*x*y*z; sin(x*y*z)];

% Calculate the gradient of g
gradient_g = gradient(g, [x, y, z]);

% Calculate the divergence of f
divergence_f = divergence(f, [x, y, z]);

% Calculate the curl of f
curl_f = curl(f, [x, y, z]);

% Display the results
gradient_g
divergence_f
curl_f
