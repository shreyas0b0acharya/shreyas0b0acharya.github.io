% Define the ODE and initial conditions
f = @(x, y) x * y;
y0 = 5;
x0 = 1;
h = 0.1;
X = 1.4;

% Initialize the solution
x = x0:h:X;
y = zeros(size(x));
y(1) = y0;

% Perform the Modified Euler's Method approximation
for i = 1:(length(x)-1)
    % Predict the next value using Euler's method
    y_predict = y(i) + h * f(x(i), y(i));
    % Correct the prediction using the midpoint slope
    y(i+1) = y(i) + (h/2) * (f(x(i), y(i)) + f(x(i+1), y_predict));
end

% Display the results
disp(['Y value at X = ', num2str(X), ' is: ', num2str(y(end))]);
