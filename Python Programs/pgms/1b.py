num = input("Enter an integer: ")
rev_num = num[::-1]

if num == rev_num:
    print(f"{num} is a palindrome.")
else:
    print(f"{num} is not a palindrome.")

digit = input("Enter a digit to check the number of occurrences: ")
count = num.count(digit)

print(f"{digit} occurred {count} times in {num}.")