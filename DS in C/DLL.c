#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *prew;
    struct node *next;
};

void main() {

    int choice, element,flag=1;
    struct node *newNode, *head=NULL, *temp=NULL;

    while(1){
        printf("\n\n...MENU...\n\n");
        printf("1.Create the Doubbly Linked List\n");
        printf("2.Display the Elements in List\n");

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
                        head = temp = newNode;
                    }else{
                        temp -> next = newNode;
                        newNode->prew = temp;
                        temp=newNode;
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


        }
    }

}
