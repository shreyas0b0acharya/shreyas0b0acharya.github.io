% Define the ODE and initial conditions
f = @(t, y) 1/t + y;
h = 0.1;
t_values = 0.4:h:0.5; % t values for which we need the solution
y_values = zeros(size(t_values));
y_values(1) = 1; % Initial condition

% Calculate the first few values using Runge-Kutta 4th order method
for i = 1:3 % We need 4 values, but we already have the first one
    k1 = h * f(t_values(i), y_values(i));
    k2 = h * f(t_values(i) + h/2, y_values(i) + k1/2);
    k3 = h * f(t_values(i) + h/2, y_values(i) + k2/2);
    k4 = h * f(t_values(i) + h, y_values(i) + k3);
    y_values(i+1) = y_values(i) + (k1 + 2*k2 + 2*k3 + k4)/6;
end

% Now apply Milne's Predictor-Corrector method
for i = 4:(length(t_values)-1)
    % Predictor step
    y_predict = y_values(i-3) + (4*h/3) * (2*f(t_values(i-1), y_values(i-1)) - f(t_values(i-2), y_values(i-2)) + 2*f(t_values(i-3), y_values(i-3)));
    
    % Corrector step
    y_values(i+1) = y_values(i-1) + (h/3) * (f(t_values(i+1), y_predict) + 4*f(t_values(i), y_values(i)) + f(t_values(i-1), y_values(i-1)));
end

% Display the results
disp(['Y value at T = ', num2str(t_values(end)), ' using Milne''s method is: ', num2str(y_values(end))]);
