#include<stdio.h> 

int arr[100], arrSize;

void printMenu(){
    printf("...MENU...\n");
    printf("1. Create Array\n");
    printf("21. Insert at Start\n");
    printf("22. Insert at End\n");
    printf("23. Insert at Specific position\n");
}
void createArray (){
    int i;

    printf("Enter the size of the array: ");
    scanf("%d",&arrSize);

    for(i = 0; i < arrSize; i++){  // Corrected loop condition
        printf("Enter the %d element: ", i + 1);
        scanf("%d",&arr[i]);
    }

    printf("Array successfully created\n");
}
void printArray(){
    int i;

    printf("Elements of Array:\n");

    for(i = 0; i < arrSize; i++){  // Corrected loop condition
        printf("%d ", arr[i]);  // Corrected print statement
    }
    printf("\n");
}
void insertElement(int position, int element){
    int i;

    // Shift elements to the right to insert at the correct position
    for(i = arrSize - 1; i >= position - 1; i--){  // Corrected loop logic
        arr[i + 1] = arr[i];
    }
    arr[position - 1] = element;  // Insert element
    arrSize++;  // Increment array size
}

int main(){
    int choice, element, position;

    printMenu();

    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch(choice){
        case 1: {
            createArray();
            printArray();
            break;  // Added break statement
        }
        case 21: {
            printf("Enter the Element you want to insert at the front: ");
            scanf("%d", &element);
            position = 1;
            insertElement(position, element);
            printArray();
            break;  // Added break statement
        }
        case 22: {
            printf("Enter the Element you want to insert at the End: ");
            scanf("%d", &element);
            position = arrSize + 1;
            insertElement(position, element);
            printArray();
            break;  // Added break statement
        }
        case 23: {
            printf("Enter the position where you want to insert the Element: ");
            scanf("%d", &position);
            printf("Enter the Element you want to insert: ");
            scanf("%d", &element);
            insertElement(position, element);
            printArray();
            break;  // Added break statement
        }
        default: {
            printf("Invalid choice!\n");
        }
    }
    return 0;
}
