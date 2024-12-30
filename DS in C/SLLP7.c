#include <stdio.h>
#include <stdlib.h>
#include <string.h>


struct node {
    char NAME[20], USN[20], BRANCH[20], MOBNO[20];
    int SEM;
    struct node *next;
};


struct node *head = NULL, *temp = NULL, *newnode = NULL;
int nodeCount = 0;


// Insert at front
void insertAtFront() {
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter NAME, USN, BRANCH, SEM, PHNO: ");
    scanf("%s%s%s%d%s", newnode->NAME, newnode->USN, newnode->BRANCH, &newnode->SEM, newnode->MOBNO);
    if(head == NULL){
        head = newnode;
        newnode->next = NULL;
    }else{
        newnode->next = head;
        head = newnode;
    }

    nodeCount++;
}


// Insert at rear
void insertAtRear() {
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter NAME, USN, BRANCH, SEM, PHNO: ");
    scanf("%s%s%s%d%s", newnode->NAME, newnode->USN, newnode->BRANCH, &newnode->SEM, newnode->MOBNO);
    newnode->next = NULL;
    if (head==NULL) {
        head = newnode;
    } else {
        temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newnode;
    }
    nodeCount++;
}


// Delete at front
void deleteAtFront() {
    if (!head) {
        printf("EMPTY SLL. Deletion not possible.\n");
    } else {
        temp = head;
        head = head->next;
        free(temp);
        nodeCount--;
    }
}


// Delete at rear
void deleteAtRear() {
    if (head == NULL)
        printf("EMPTY SLL. Deletion not possible.\n");
    } else if (!head->next) {
        free(head);
        head = NULL;
    } else {
        temp = head;
        while (temp->next->next) {
            temp = temp->next;
        }
        free(temp->next);
        temp->next = NULL;
    }
    nodeCount--;
}


// Display SLL
void display() {
    if (!head) {
        printf("EMPTY SLL. Nothing to display.\n");
    } else {
        temp = head;
        int nodeNumber = 1;
        printf("SLL CONTENT:\n");
        while (temp) {
            printf("Node %d: %s\t%s\t%s\t%d\t%s\n", nodeNumber++, temp->NAME, temp->USN, temp->BRANCH, temp->SEM, temp->MOBNO);
            temp = temp->next;
        }
        printf("Total Nodes: %d\n", nodeCount);
    }
}


int main() {
    int choice, n, position;
    do {
        printf("\n---MENU---\n1. Create SLL\n2. Insert at Front\n3. Insert at Rear\n4. Delete at Front\n5. Delete at Rear\n6. Display\n7. Exit\nEnter choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter number of students: ");
                scanf("%d", &n);
                for (int i = 0; i < n; i++) {
                    insertAtFront();
                }
                break;
            case 2:insertAtFront();break;
            case 3:insertAtRear();break;
            case 4:deleteAtFront();break;
            case 5:deleteAtRear();break;
            case 6:display();break;
            case 7:exit(0);
            default:printf("Invalid choice.\n");
        }
    } while (1);
    return 0;
}
