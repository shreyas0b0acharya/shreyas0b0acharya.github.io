% Given data points
x = [19, 20, 21, 22, 23];
y = [91, 100.25, 110, 120.25, 131];

% Point where we want to find the value of y
X = 25.4;

% Number of data points
n = length(x);

% Calculating step size
h = x(2) - x(1);

% Calculating the backward differences table
bd_table = zeros(n, n);
bd_table(:,1) = y';
for j = 2:n
    for i = j:n
        bd_table(i,j) = bd_table(i,j-1) - bd_table(i-1,j-1);
    end
end

% Calculating the value of u for backward difference
r = (X - x(n))/h;

% Applying Newton's backward formula
backward_ans = y(n);
r_multiplier = 1;
for i = 1:n-1
    r_multiplier = r_multiplier * (r + i - 1)/i;
    backward_ans = backward_ans + r_multiplier * bd_table(n,i+1);
end

% Displaying the interpolated value
disp(['The interpolated value of y at X = ', num2str(X), ' is: ', num2str(backward_ans)]);
