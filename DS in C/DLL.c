#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *prew;
    struct node *next;
};

void insertAtEnd(struct node **head,struct node **tail);
void insertAtStart(struct node **head);
void insertAtPosition(struct node **head);
void insertAtEndWithTail(struct node **head,struct node**tail);

void deleteAtEnd(struct node **head,struct node **tail);
void deleteAtStart(struct node **head);
void deleteAtPosition(struct node **head);

void reverseList(struct node **head,struct node **tail);



void main() {

    int choice, element,flag=1;
    struct node *newNode, *head=NULL, *temp=NULL, *tail=NULL;
    printf("\n\n...MENU...\n\n");
    printf("1.Create the Doubbly Linked List\n");
    printf("2.Display all Elements of List\n\n");

    printf("3.Insert at End\n");
    printf("4.Insert at Front\n");
    printf("5.Insert at Position\n");
    printf("6.Insert at End with tail\n\n");

    printf("7.Delete at End\n");
    printf("8.Delete at Front\n");
    printf("9.Delete at Position\n\n");

    printf("10.Reverse the list\n");

    while(1){


        printf("\nChoose the oeration from the menu:");
        scanf("%d",&choice);

        switch (choice){
            case 1:
                //Create the Doubbly Linked List
                flag=1;
                while(flag){

                    newNode = (struct node *)malloc(sizeof(struct node));
                    if(newNode==NULL){
                        printf("Memory allocation of New Node is failed.");
                    }
                    printf("Enter the data:");
                    scanf("%d",&newNode->data);


                    newNode->prew = 0;
                    newNode->next=0;

                    if(head == 0){
                        head = temp =tail = newNode;
                    }else{
                        temp -> next = newNode;
                        newNode->prew = temp;
                        temp=newNode;
                        tail = newNode;
                    }

                    printf("\nDo you want to add one more element?(0/1):");
                    scanf("%d",&flag);

                }
                break;
            case 2:
                //Display the Elements in List
                temp = head;
                while(temp!=0){

                    printf("%d->",temp->data);
                    temp =temp->next;
                }
                break;

            case 3:
                 //Add the element at the End of the List
                insertAtEnd(&head,&tail);
                break;

            case 4:
                //Add element a the front of list
                insertAtStart(&head);
                break;

            case 5:
                insertAtPosition(&head);
                break;
            case 6:
                insertAtEndWithTail(&head,&tail);
                break;

            case 7:
                 //Add the element at the End of the List
                deleteAtEnd(&head,&tail);
                break;

            case 8:
                //Add element a the front of list
                deleteAtStart(&head);
                break;

            case 9:
                deleteAtPosition(&head);
                break;

            case 10:
                reverseList(&head,&tail);
                break;
        }
    }

}

void insertAtEnd(struct node **head,struct node **tail){
    struct node *newNode,*temp;

    newNode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the element to add at the end of the list");
    scanf("%d",&newNode->data);
    newNode->next= NULL;
    newNode -> prew = NULL;

    if(*head == NULL){
        *head = newNode;
        *tail = newNode;

    }else{
        temp = *head;
        while(temp->next != NULL){
            temp = temp ->next;
        }
        temp->next = newNode;
        newNode->prew = temp;
        *tail = newNode;
    }
}

void insertAtStart(struct node **head){
    struct node *newNode, *temp;

    newNode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the element to add the front of the list");
    scanf("%d",&newNode->data);

    newNode->next = NULL;
    newNode -> prew = NULL;

    if(*head==NULL){
        *head =newNode;
    }else{
        newNode->next=*head;
        *head = newNode;
    }
}

void insertAtPosition(struct node **head){
    struct node *newNode, *temp;
    int position, count=0;

    newNode = (struct node *)malloc(sizeof(struct node));
    newNode ->next = NULL;
    newNode ->prew = NULL;

    printf("Enter the position you want to enter the element at:");
    scanf("%d",&position);

    printf("Enter the element you want to enter at the position %d:",position);
    scanf("%d",&newNode->data);

    if(head == NULL){
        *head = newNode;
    }else{
        temp=*head;
        while(count<position-2){
            temp=temp->next;
            count++;
        }
        newNode->prew = temp;
        newNode->next = temp->next;
        temp->next->prew = newNode;
        temp->next=newNode;
    }
}

void insertAtEndWithTail(struct node **head,struct node**tail){
    struct node *newNode;

    newNode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the element to add at the end of the list");
    scanf("%d",&newNode->data);
    newNode->next= NULL;
    newNode -> prew = NULL;

    if(*head == NULL){
        *head = newNode;
        *tail = newNode;
    }else{
        (*tail)->next = newNode;
        newNode->prew = *tail;
        *tail = newNode;
    }
}

void deleteAtEnd(struct node **head,struct node **tail){
    if(*head == NULL){
        printf("list is empty");
    }else if((*head)->next == NULL){
        free(*head );
        *head == NULL;
        *tail == NULL;
    }else{
        (*tail)->prew->next = NULL;
        *tail= (*tail)->prew;
        free((*tail)->next);
    }

}

void deleteAtStart(struct node **head){\
    struct node *temp;
    if(*head == NULL){
         printf("list is empty");
    }else{
        temp =*head;
        *head = (*head)->next;
        (*head)->prew = NULL;
        free(temp);
    }
}

void deleteAtPosition(struct node **head){
    printf("Not yet coded");
}

void reverseList(struct node **head,struct node **tail){
    struct node *temp,*holder;
    temp = *head;
    while(temp!=NULL){
        holder = temp->next;
        temp->next=temp->prew;
        temp->prew=holder;
        temp=holder;
    }
    temp=*head;
    *head =*tail;
    *tail = temp;
    
}

