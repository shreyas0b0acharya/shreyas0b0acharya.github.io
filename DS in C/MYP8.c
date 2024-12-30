#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct node{
    char usn [20], name[20], dept[20], design[20];
    int salary, phno;
    struct node *next, *prev;
};

struct node *head = NULL, *newNode = NULL, *temp=NULL;
int countNode=0;

void iFront(){
    newNode = (struct node *)malloc(sizeof(struct node));
    printf("\nEnter Name,USN,DEPT,designantion,salary,phno: \n");
    scanf("%s%s%s%s%d%d",newNode->name,newNode->usn,newNode->dept,newNode->design,&newNode->salary,&newNode->phno);
    newNode->next =  head;
    newNode->prev =NULL;
    head = newNode;
    countNode++;
}

void DFront(){
    if(head==NULL){
        printf("\nEmpty List\n");
    }else if (head->next == NULL){
        free(head);
        head = temp;

        printf("\nNode deleted at front\n");
    }else{
        temp=head->next;
        temp->prev=NULL;
        free(head);
        head = temp;
        printf("\nNode deleted at front\n");
    }
    countNode--;
}


void iEnd(){
    newNode = (struct node *)malloc(sizeof(struct node));
    printf("\nEnter Name,USN,DEPT,designantion,salary,phno: \n");
    scanf("%s%s%s%s%d%d",newNode->name,newNode->usn,newNode->dept,newNode->design,&newNode->salary,&newNode->phno);
    newNode->next =  newNode->prev =NULL;

    if(head == NULL){
        head = newNode;
    }else if(head->next == NULL){
        head->next = newNode;
        newNode ->prev = head;
    }else{
        temp = head;
        while(temp ->next != NULL){
            temp = temp->next;
        }
        temp->next= newNode;
        newNode->prev=temp;
    }
    countNode++;

}

int DEnd(){
     if(head==NULL){
        printf("\nEmpty List\n");
        return 0;
    }else if (head->next == NULL){
        head = NULL;
        free(head);
        printf("\nNode deleted at front\n");
    }else{
        temp = head;
        while (temp->next->next != NULL) {
            temp = temp->next;
        }

        free(temp->next);
        temp->next = NULL;
        printf("\nNode deleted at front\n");
    }
    countNode--;

}


void display() {
    if (head == NULL) {
        printf("\nList is Empty\n");
    } else {
        printf("\nList Content:\n");
        temp = head;
        int i = 0;
        while (temp != NULL) {
            i++;
            printf("\nNode %d:  %s  %s  %s  %s  %d  %d\n", i, temp->name, temp->usn, temp->dept, temp->design, temp->salary, temp->phno); // Use temp instead of newNode
            temp = temp->next;
        }
        printf("Total Nodes: %d\n", countNode);
    }
}

int main(){
    int choice, n,i;

    do{
        printf("\n---MENU--\n1.Create\n2.IFront\n3.IEnd\n4.DFront\n5.DEnd\n6.Display\n7.Exit\nEnter Your Choice:");
        scanf("%d",&choice);

        switch(choice){
            case 1: printf("Enter the no of Employees");
                    scanf("%d",&n);
                    for( i = 0; i<n; i++){
                        iFront();
                    }
                    break;
            case 2: iFront(); break;
            case 3: iEnd(); break;
            case 4: DFront(); break;
            case 5: DEnd(); break;
            case 6: display(); break;
        }
    }while(1);

    return 0;

}

