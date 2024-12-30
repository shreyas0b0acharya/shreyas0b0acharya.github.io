def fn(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fn(n - 1) + fn(n - 2)

try:
    num = int(input("Enter a number: "))
    if num > 0:
        print(f'fn({num}) = {fn(num)}')
    else:
        print("Input should be greater than 0")
except ValueError:
    print("Please enter a valid numeric value")