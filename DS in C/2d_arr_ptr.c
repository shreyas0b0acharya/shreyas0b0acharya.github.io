#include<stdio.h>

int main(){

        int a[3][3]={1,2,3,4,5,6,7,8,9};
        int *b,i,*c;


        b=a;
        c=&a;

        for(i=0;i<3;i++){
            printf("b %d\n",b);
            printf("&b %d\n\n",b);
            b++;
        }

        b=a;
        c=&a;
        for(i=0;i<3;i++){
            printf("b %d\n",b);
            printf("c %d\n\n",c);

            printf("&b %d\n",&b);
            printf("&c %d\n\n",&c);


            printf("*b %d\n",*b);
            printf("*c %d\n\n",*c);

            b++;c++;
        }
        b=a;
        c=&a;

        for(i=0;i<3;i++){
            printf("*(b+1) %d\n",*(b+1));
            printf("*(c+1) %d\n\n",*(c+1));
        }


    return 0;
}
