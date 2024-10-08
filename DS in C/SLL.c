#include <stdio.h>
#include <stdlib.h>
#include <process.h>

struct node {
    int data;
    struct node *next;
};

int main() {
    struct node *head, *temp, *newnode, *currnode, *prewNode, *nextNode;
    int flag = 1,choice,position,nodeCount;
    head = NULL;  // Initialize head to NULL

    // Creating the linked list
    while (flag) {
        newnode = (struct node *)malloc(sizeof(struct node));

        printf("Enter data: ");
        scanf("%d", &newnode->data);
        newnode->next = NULL;

        if (head == NULL) {
            head = temp = newnode;
        } else {
            temp->next = newnode;
            temp = newnode;
        }

        printf("Do you want to continue (0/1) ?: ");
        scanf("%d", &flag);
    }

    // Printing the linked list data
    temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("EOL\n");  // End of list
    temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->next);
        temp = temp->next;
    }

    printf("\nMenu:\n");
    printf("0.Display all nodes.\n\n");

    printf("1.Insert at End\n");
    printf("2.Insert at Front\n");
    printf("3.Insert at Position\n\n");

    printf("4.Delete at End\n");
    printf("5.Delete at Front\n");
    printf("6.Delete at Position\n\n");

    printf("7.Length of the List.\n");
    printf("8.Reverse the list:\n");

    printf("20.Exit\n");


    while(1){
        printf("\nEnter the choice from menu:");
        scanf("%d",&choice);

        switch (choice){

            case 0:
                if(head!=NULL){
                    temp = head;
                        while (temp!=NULL){
                            printf("%d -> ",temp->data);
                            temp=temp->next;
                        }
                }else{
                    printf("Empty list");
                }
                break;

            case 1:


                newnode = (struct node *)malloc(sizeof(struct node));
                printf("Enter the value you want to insert at End:");
                scanf("%d",&newnode->data);
                newnode->next=NULL;

                if(head==NULL){
                    head=newnode;
                }else{
                    temp = head;
                    while(temp->next != NULL){
                        temp=temp->next;
                    }
                    temp->next = newnode;

                }
                break;


            case 2:
                newnode = (struct node *)malloc(sizeof(struct node));
                printf("Enter the value you want to insert at Front:");
                scanf("%d",&newnode->data);
                newnode->next=head;
                head=newnode;
                break;

            case 3:
                newnode = (struct node *)malloc(sizeof(struct node));
                printf("Enter the position you want to insert the value:");
                scanf("%d",&position);
                printf("Enter the value you want to insert at Position %d:",position);
                scanf("%d",&newnode->data);

                nodeCount=1;
                temp=head;
                while(nodeCount<position-1){
                    temp=temp->next;
                    nodeCount++;
                }
                newnode->next=temp->next;
                temp->next=newnode;

            case 4:
                if(head==NULL){
                    printf("Empty");
                }else if(head->next==NULL){
                    printf("Value removed: %d",head->data);
                    free(head);
                    head=NULL;
                }else{
                    temp=head;
                    while(temp->next->next !=NULL){
                        temp=temp->next;
                    }
                    printf("Value removed: %d",temp->next->data);
                    free(temp->next);
                    temp->next=NULL;
                }
                break;




            case 5:
                temp = head;
                head = temp->next;
                free(temp);

            case 6:
                printf("Enter the Position you want to delete");
                scanf("%d",&position);
                if (position>1){
                    nodeCount=1;
                    temp=head;

                    while(nodeCount < position-1){
                        temp=temp->next;
                        nodeCount++;
                    }

                newnode = temp->next;
                temp->next = newnode->next;
                free(newnode);
                }else if(position==1){
                    temp=head;
                    head=head->next;
                    free(temp);

                }
                printf("head%d",head);
                break;

            case 7:

                temp = head;
                nodeCount=0;
                while(temp!=0){
                    temp=temp->next;
                    nodeCount++;
                }
                printf("%d",nodeCount);

            case 8:
                //Reverse the list
                prewNode = 0;
                currnode = nextNode = head ;

                while(nextNode!=0){
                    nextNode = nextNode->next;
                    currnode->next = prewNode;
                    prewNode = currnode;
                    currnode = nextNode;
                }
                head = prewNode;

            case 20:
                exit(0);

        }
    }

    return 0;
}
