#include <stdio.h>
#include <stdlib.h>
#define MAX 5

char queue[MAX];
int front = -1, rear = -1;

// Check if the queue is full
int isOverflow() {
    return (rear + 1) % MAX == front;
}

// Check if the queue is empty
int isUnderflow() {
    return front == -1;
}

// Insert operation
void insert() {
    if (isOverflow()) {
        printf("\nQUEUE OVERFLOW\n");
    } else {
        char elem;
        printf("\nEnter a CHARACTER: ");
        scanf(" %c", &elem);
        if (rear == -1) {
            front = 0;
        }
        rear = (rear + 1) % MAX;
        queue[rear] = elem;
    }
}

// Delete operation
void delete() {
    if (isUnderflow()) {
        printf("\nQUEUE UNDERFLOW\n");
    } else {
        printf("\nDeleted Element: %c\n", queue[front]);
        if (front == rear) {
            front = rear = -1;  // Queue becomes empty
        } else {
            front = (front + 1) % MAX;
        }
    }
}

// Display queue
void display() {
    if (isUnderflow()) {
        printf("\nQUEUE IS EMPTY\n");
    } else {
        printf("\nQUEUE CONTENT: ");
        int i = front;
        while (1) {
            printf("%c ", queue[i]);
            if (i == rear) break;
            i = (i + 1) % MAX;
        }
        printf("\n");
    }
}

// Main function with menu
int main() {
    int choice;
    do {
        printf("\nMENU:\n1. Insert\n2. Delete\n3. Display\n4. Exit\nEnter choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1: insert(); break;
            case 2: delete(); break;
            case 3: display(); break;
            case 4: exit(0);
            default: printf("\nINVALID CHOICE\n");
        }
    } while (1);
    return 0;
}
