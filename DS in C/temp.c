#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define MAX 5  // Define the maximum size of the stack

int stack[MAX];
int top = -1;  // Initialize top of stack as -1 (indicating an empty stack)

// Function to push an element into the stack
void push(int element) {
    if (top == MAX - 1) {
        printf("Stack Overflow! Cannot push %d\n", element);
    } else {
        stack[++top] = element;
        printf("%d pushed into the stack.\n", element);
    }
}

// Function to pop an element from the stack
int pop() {
    if (top == -1) {
        printf("Stack Underflow! No element to pop.\n");
        return -1;  // Return an invalid value for an empty stack
    } else {
        int poppedElement = stack[top--];
        printf("%d popped from the stack.\n", poppedElement);
        return poppedElement;
    }
}

// Function to display the status of the stack
void display() {
    if (top == -1) {
        printf("Stack is empty.\n");
    } else {
        printf("Stack elements: ");
        for (int i = 0; i <= top; i++) {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}

// Function to check if the stack represents a palindrome
void checkPalindrome() {
    if (top == -1) {
        printf("Stack is empty, cannot check palindrome.\n");
        return;
    }

    bool isPalindrome = true;
    for (int i = 0; i <= top / 2; i++) {
        if (stack[i] != stack[top - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        printf("The stack represents a palindrome.\n");
    } else {
        printf("The stack does not represent a palindrome.\n");
    }
}

// Function to demonstrate stack overflow
void demoOverflow() {
    for (int i = 0; i <= MAX; i++) {
        push(i + 1);
    }
}

// Function to demonstrate stack underflow
void demoUnderflow() {
    while (top != -1) {
        pop();
    }
    pop();  // Try to pop again when stack is empty
}

// Main function with menu-driven program
int main() {
    int choice, element;

    do {
        printf("\n--- Stack Menu ---\n");
        printf("1. Push an element\n");
        printf("2. Pop an element\n");
        printf("3. Check if stack is a palindrome\n");
        printf("4. Demonstrate stack overflow\n");
        printf("5. Demonstrate stack underflow\n");
        printf("6. Display the status of the stack\n");
        printf("7. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the element to push: ");
                scanf("%d", &element);
                push(element);
                break;
            case 2:
                pop();
                break;
            case 3:
                checkPalindrome();
                break;
            case 4:
                demoOverflow();
                break;
            case 5:
                demoUnderflow();
                break;
            case 6:
                display();
                break;
            case 7:
                printf("Exiting program...\n");
                break;
            default:
                printf("Invalid choice! Please enter a valid option.\n");
        }
    } while (choice != 7);

    return 0;
}
