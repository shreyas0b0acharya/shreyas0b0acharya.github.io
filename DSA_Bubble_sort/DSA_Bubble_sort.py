my_list = [3, 5, 2, 4, 1]

# Sorting in ascending order
for i in range(len(my_list)):
    for j in range(len(my_list) - 1 - i):
        if my_list[j] > my_list[j + 1]:
            my_list[j], my_list[j + 1] = my_list[j + 1], my_list[j]

print("Ascending Order: ", my_list)

# Sorting in descending order
for i in range(len(my_list)):
    for j in range(len(my_list) - 1 - i):
        if my_list[j] < my_list[j + 1]:
            my_list[j], my_list[j + 1] = my_list[j + 1], my_list[j]

print("Descending Order:", my_list)
