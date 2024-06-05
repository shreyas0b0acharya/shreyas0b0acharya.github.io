% Define the function to integrate
f = @(x) 1./(1+x);

% Define the limits of integration
a = 1;
b = 2;

% Number of intervals
n = 20;

% Calculate the width of each interval
h = (b - a) / n;

% Compute the x values
x = a:h:b;

% Compute the y values
y = f(x);

% Apply the trapezoidal rule
area = (h/2) * (y(1) + 2*sum(y(2:end-1)) + y(end));

% Display the result
disp(['The area under the curve is: ', num2str(area)]);
