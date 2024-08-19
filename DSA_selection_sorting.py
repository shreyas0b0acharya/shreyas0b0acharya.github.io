my_list = [9,69,3,8,5,2,7,4,1]


for i in range(len(my_list)):
    min_index=i
    for j in range(i+1,len(my_list)):
        if my_list[j]<my_list[min_index]:
            min_index=j
    my_list[i],my_list[min_index]=my_list[min_index],my_list[i]
    


print(my_list)
