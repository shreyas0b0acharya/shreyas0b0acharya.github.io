% Define the ODE and initial conditions
f = @(x, y) x^2 + y^2; % Function handle for the ODE
y0 = 1; % Initial condition for y
x0 = 0; % Initial condition for x
h = 0.1; % Step size
x_end = 0.3; % End value for x

% Initialize the solution
x = x0:h:x_end; % x values from x0 to x_end with step size h
y = zeros(size(x)); % Preallocate y array with the same size as x
y(1) = y0; % Set the initial value of y

% Perform the Taylor series approximation using only the first-order derivative
for i = 1:(length(x)-1)
    % Calculate the function value at the current point
    f0 = f(x(i), y(i)); 
    % Update the next value of y using only the first-order term
    y(i+1) = y(i) + h*f0;
end

% Display the results
disp('x values:');
disp(x);
disp('y values:');
disp(y);