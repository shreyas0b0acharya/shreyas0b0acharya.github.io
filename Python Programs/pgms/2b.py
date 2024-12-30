def bin2dec(val):
    return int(val, 2)

def oct2hex(val):
    return format(int(val, 8), 'X')

num1 = input("Enter a binary number: ")
print("Decimal:", bin2dec(num1))

num2 = input("Enter an octal number: ")
print("Hexadecimal:", oct2hex(num2))