#include<stdio.h>

int arr[100], arrSize;

void printMenu()
{
    printf("...MENU...\n");
    printf("1. Create Array\n");
    printf("21. Insert at Start\n");
    printf("22. Insert at End\n");
    printf("23. Insert at Specific position\n");
}
void createArray (){
    int i;

    printf("Enter the size of the array: ");
    scanf("%d", &arrSize);

    for(i = 0; i < arrSize; i++){
        printf("Enter the %d element: ", i);
        scanf("%d", &arr[i]);
    }

    printf("Array Successfully created\n");
}
void printArray(){
    int i;

    printf("Elements of Array: ");
    for(i = 0; i < arrSize; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
}
void insertElement(int position, int element){
    int i;

    // Shift elements to the right
    for(i = arrSize - 1; i >= position - 1; i--){
        arr[i + 1] = arr[i];
    }

    arr[position - 1] = element;
    arrSize++;  // Increase array size after insertion
}

int main(){
    int choice, position, element;
    int flag = 1;  // Using 1 (true) and 0 (false)

    printMenu();

    do {
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){
            case 1: {
                createArray();
                printArray();
                break;
            }
            case 21:{
                printf("Enter the element to insert at front: ");
                scanf("%d", &element);
                position = 1;
                insertElement(position, element);
                printArray();
                break;
            }
            case 22:{
                printf("Enter the element to insert at end: ");
                scanf("%d", &element);
                position = arrSize + 1;
                insertElement(position, element);
                printArray();
                break;
            }
            case 23:{
                printf("Enter the position where you want to insert the element: ");
                scanf("%d", &position);
                printf("Enter the element to insert: ");
                scanf("%d", &element);
                insertElement(position, element);
                printArray();
                break;
            }
            default:
                printf("Invalid choice, try again.\n");
        }

    } while (flag == 1);  // Correct condition

    return 0;
}
