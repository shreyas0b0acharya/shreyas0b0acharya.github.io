#include <stdio.h>

int main(){

    int a=7;
    int *p,q;

    p=&a;
    q=a;

    printf("&a %d\n",&a);
    printf("a %d\n\n",a);

    printf("&p %d\n",&p);
    printf("p %d\n",p);
    printf("*p %d\n\n",*p);

    printf("&q %d\n",&q);
    printf("q %d\n\n",q);

    return 0;
}
