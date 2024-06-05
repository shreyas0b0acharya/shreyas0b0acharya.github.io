% Define the function to integrate
f = @(x) cos(x) - log(x) + exp(x);

% Define the limits of integration
a = 1;
b = 2;

% Number of intervals (must be even for Simpson's 1/3 rule)
n = 20;

% Check if n is even
if mod(n, 2) == 1
    error('Number of intervals must be even for Simpson''s 1/3 rule.');
end

% Calculate the width of each interval
h = (b - a) / n;

% Compute the x values
x = a:h:b;

% Compute the y values
y = f(x);

% Apply Simpson's 1/3 rule
area = (h/3) * (y(1) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-2)) + y(end));

% Display the result
disp(['The area under the curve is: ', num2str(area)]);
