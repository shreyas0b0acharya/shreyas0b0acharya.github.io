#include <stdio.h>
#include <stdlib.h>

#define stackSize 5
int stack[stackSize], position = -1;

void push();
void pop();
void checkPalindrome();
void sizeOfStack();
void printStack();
int isOverflow();
int isUnderFlow();

int main(){
    int choice;

    while(1){
        printf("\n---MENU---\n1. Push\n2. Pop\n3. Check Palindrome\n4. Size of Stack\n5. Print Stack\n6. Check for Overflow\n7. Check for Underflow\n8. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice){
            case 1: push(); break;
            case 2: pop(); break;
            case 3: checkPalindrome(); break;
            case 4: sizeOfStack(); break;
            case 5: printStack(); break;
            case 6: isOverflow(); break;
            case 7: isUnderFlow(); break;
            case 8: exit(0); break;
            default: printf("Invalid input...!");
        }
    }
}

void push(){
    if (!isOverflow()){
        int element;
        printf("\nEnter the element to push: ");
        scanf("%d", &element);
        position++;
        stack[position] = element;
        printf("Pushed %d onto the stack.\n", element);
    }
}

void pop(){
    if (!isUnderFlow()){
        printf("Popped element: %d\n", stack[position]);
        position--;
    }
}

int isOverflow(){
    if (position >= stackSize - 1){
        printf("\nStack is full. Overflow...!\n");
        return 1;
    } else {
        return 0;
    }
}

int isUnderFlow(){
    if (position < 0){
        printf("\nStack is empty. Underflow...!\n");
        return 1;
    } else {
        return 0;
    }
}

void checkPalindrome(){
    if (!isUnderFlow()){
        int i, flag = 1;
        for (i = 0; i <= position / 2; i++){
            if (stack[i] != stack[position - i]){
                flag = 0;
                break;
            }
        }
        if (flag){
            printf("\nStack contents form a Palindrome.\n");
        } else {
            printf("\nStack contents do not form a Palindrome.\n");
        }
    }
}

void sizeOfStack(){
    printf("\nSize of stack is: %d\n", position + 1);
}

void printStack(){
    if (!isUnderFlow()){
        printf("\nStack elements are:");
        for (int i = 0; i <= position; i++){
            printf(" %d", stack[i]);
        }
        printf("\n");
    }
}
