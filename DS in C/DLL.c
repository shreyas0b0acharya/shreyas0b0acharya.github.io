#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Define the structure for a doubly linked list node
struct node {
    int SSN, SALARY;
    char NAME[20], DEPT[20], DESIGN[20], MOBNO[20];
    struct node *next, *prev;
};

// Define pointers and variables
struct node *head = NULL, *temp = NULL, *newnode = NULL;
int choice, nodeCount = 0, position;

// Insert at the rear of the DLL
void insertAtRear() {
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter Employee Details (SSN, NAME, DEPT, DESIGN, SALARY, MOBNO):\n");
    scanf("%d %s %s %s %d %s", &newnode->SSN, newnode->NAME, newnode->DEPT, newnode->DESIGN, &newnode->SALARY, newnode->MOBNO);
    newnode->next = newnode->prev = NULL;

    if (!head) {
        head = newnode;
    } else {
        temp = head;
        while (temp->next) temp = temp->next;
        temp->next = newnode;
        newnode->prev = temp;
    }
    nodeCount++;
}

// Insert at the front of the DLL
void insertAtFront() {
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter Employee Details (SSN, NAME, DEPT, DESIGN, SALARY, MOBNO):\n");
    scanf("%d %s %s %s %d %s", &newnode->SSN, newnode->NAME, newnode->DEPT, newnode->DESIGN, &newnode->SALARY, newnode->MOBNO);
    newnode->next = head;
    newnode->prev = NULL;

    if (head) head->prev = newnode;
    head = newnode;
    nodeCount++;
}

// Delete at the front of the DLL
void deleteAtFront() {
    if (!head) {
        printf("EMPTY DLL. Deletion not possible.\n");
        return;
    }
    temp = head;
    head = head->next;
    if (head) head->prev = NULL;
    free(temp);
    nodeCount--;
}

// Delete at the rear of the DLL
void deleteAtRear() {
    if (!head) {
        printf("EMPTY DLL. Deletion not possible.\n");
        return;
    }
    temp = head;
    while (temp->next) temp = temp->next;
    if (temp->prev) temp->prev->next = NULL;
    else head = NULL;
    free(temp);
    nodeCount--;
}

// Display the contents of the DLL
void display() {
    if (!head) {
        printf("EMPTY DLL. Nothing to display.\n");
        return;
    }
    printf("\nSSN\tNAME\tDEPT\tDESIGN\tSALARY\tMOBILE\n");
    printf("------------------------------------------\n");
    temp = head;
    while (temp) {
        printf("%d\t%s\t%s\t%s\t%d\t%s\n", temp->SSN, temp->NAME, temp->DEPT, temp->DESIGN, temp->SALARY, temp->MOBNO);
        temp = temp->next;
    }
    printf("\nTotal number of nodes: %d\n", nodeCount);
}

int main() {
    int n, flag;
    do {
        printf("\n--- MENU ---\n");
        printf("1. Create DLL\n2. Insert at Front\n3. Insert at Rear\n4. Delete at Front\n5. Delete at Rear\n6. Display DLL\n7. Exit\nEnter choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter number of employees: ");
                scanf("%d", &n);
                while (n--) insertAtRear();
                break;
            case 2: insertAtFront(); break;
            case 3: insertAtRear(); break;
            case 4: deleteAtFront(); break;
            case 5: deleteAtRear(); break;
            case 6: display(); break;
            case 7: exit(0); break;
            default: printf("Invalid choice.\n");
        }
    } while (1);
    return 0;
}
