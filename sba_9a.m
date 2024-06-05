% Define the ODE and initial conditions
f = @(x, y) x^2 + y^2;
y0 = 1;
x0 = 0;
h = 0.1;
x_end = 0.3;

% Initialize the solution
x = x0:h:x_end;
y = zeros(size(x));
y(1) = y0;

% Perform the Taylor series approximation
for i = 1:(length(x)-1)
    % Calculate derivatives
    f0 = f(x(i), y(i));
    df = 2*x(i) + 2*y(i)*f0; % derivative of f with respect to x
    % Update the next value of y
    y(i+1) = y(i) + h*f0 + (h^2/2)*df;
end

% Display the results
disp('x values:');
disp(x);
disp('y values:');
disp(y);
