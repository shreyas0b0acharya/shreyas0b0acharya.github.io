#include<stdio.h>

int main(){

    int a[] = {5,1,6,3,7},i,*b=a;

    for(i=0;i<5;i++){
        printf("%d ",a[i]); //value
        printf("%d ",i[a]); //value
        printf("%d ",&a[i]); //address
        printf("%d ",&i[a]); //address
        printf("\n");
    }

    for(i=0;i<5;i++){
        printf("Enter the %d element",i+1);
        scanf("%d",&a[i]);
    }

    for(i=0;i<5;i++){
        printf("%d \t",b[i]); //value
        printf("%d \t",&b[i]); //address

        printf("%d \t",*(b+i)); //value
        printf("%d \t",*(i+b)); //value
        printf("%d \t",(b+i)); //address

        printf("\n");
    }
        printf("\n");
        for(i=0;i<5;i++){
        printf("%d \t",a[i]); //value
        printf("%d \t",&a[i]); //address

        printf("%d \t",*(a+i)); //value
        printf("%d \t",(a+i)); //address

        printf("\n");
    }


}
