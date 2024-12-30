#include<stdio.h>
#include<stdlib.h>
#include<string.h>

// Define the structure for a doubly linked list node
struct node {
    char usn[20], name[20], dept[20], design[20], phno[20]; // Changed phno to char for large numbers
    int salary;
    struct node *next, *prev;
};

// Initialize global variables
struct node *head = NULL, *newNode = NULL, *temp = NULL;
int countNode = 0; // Initialize countNode to 0

// Function to insert at the front of the list
void iFront() {
    newNode = (struct node *)malloc(sizeof(struct node));
    printf("\nEnter Name, USN, DEPT, Designation, Salary, Phone: \n");
    scanf("%s%s%s%s%d%s", newNode->name, newNode->usn, newNode->dept, newNode->design, &newNode->salary, newNode->phno);
    newNode->next = head;
    newNode->prev = NULL;
    if (head != NULL) {
        head->prev = newNode;
    }
    head = newNode;
    countNode++;
}

// Function to delete from the front of the list
void DFront() {
    if (head == NULL) {
        printf("\nEmpty List\n");
        return;
    } else if (head->next == NULL) {
        free(head);
        head = NULL;
    } else {
        temp = head->next;
        temp->prev = NULL;
        free(head);
        head = temp;
    }
    printf("\nNode deleted at front\n");
    countNode--;
}

// Function to insert at the end of the list
void iEnd() {
    newNode = (struct node *)malloc(sizeof(struct node));
    printf("\nEnter Name, USN, DEPT, Designation, Salary, Phone: \n");
    scanf("%s%s%s%s%d%s", newNode->name, newNode->usn, newNode->dept, newNode->design, &newNode->salary, newNode->phno);
    newNode->next = newNode->prev = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }
    countNode++;
}

// Function to delete from the end of the list
void DEnd() {
    if (head == NULL) {
        printf("\nEmpty List\n");
        return;
    } else if (head->next == NULL) {
        free(head);
        head = NULL;
    } else {
        temp = head;
        while (temp->next->next = NULL) { // Fixed condition: comparison instead of assignment
            temp = temp->next;
        }
        free(temp->next);
        temp->next = NULL;
    }
    printf("\nNode deleted at end\n");
    countNode--;
}

// Function to display the contents of the list
void display() {
    if (head == NULL) {
        printf("\nList is Empty\n");
    } else {
        printf("\nList Content:\n");
        temp = head;
        int i = 0;
        while (temp != NULL) {
            i++;
            printf("\nNode %d:  %s  %s  %s  %s  %d  %s\n", i, temp->name, temp->usn, temp->dept, temp->design, temp->salary, temp->phno); // Use temp instead of newNode
            temp = temp->next;
        }
        printf("Total Nodes: %d\n", countNode);
    }
}

int main() {
    int choice, n, i;

    do {
        printf("\n---MENU---\n1. Create\n2. Insert Front\n3. Insert End\n4. Delete Front\n5. Delete End\n6. Display\n7. Exit\nEnter Your Choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the number of Employees: ");
                scanf("%d", &n);
                for (i = 0; i < n; i++) {
                    iFront();
                }
                break;
            case 2:
                iFront();
                break;
            case 3:
                iEnd();
                break;
            case 4:
                DFront();
                break;
            case 5:
                DEnd();
                break;
            case 6:
                display();
                break;
            case 7:
                printf("Exiting Program.\n");
                exit(0);
                break;
            default:
                printf("Invalid Choice. Try Again.\n");
        }
    } while (1);

    return 0;
}
