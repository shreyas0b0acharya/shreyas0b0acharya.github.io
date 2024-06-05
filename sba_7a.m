% Given data points
x = [1, 2, 3, 4, 5];
y = [10, 26, 58, 112, 194];

% Point where we want to find the value of y
X = 1.4;

% Number of data points
n = length(x);

% Calculating step size
h = x(2) - x(1);

% Calculating the forward differences table
fd_table = zeros(n, n);
fd_table(:,1) = y';
for j = 2:n
    for i = 1:n-j+1
        fd_table(i,j) = fd_table(i+1,j-1) - fd_table(i,j-1);
    end
end

% Calculating the value of u
u = (X - x(1))/h;

% Applying Newton's forward formula
interp_value = y(1);
multiplier = 1;
for i = 1:n-1
    multiplier = multiplier * (u - i + 1)/i;
    interp_value = interp_value + multiplier * fd_table(1,i+1);
end

% Displaying the interpolated value
disp(['The interpolated value of y at X = ', num2str(X), ' is: ', num2str(interp_value)]);
