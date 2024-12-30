#include <stdio.h>
#include <stdlib.h>
#define MAX 5

char queue[MAX];
int front = -1, rear = -1;

int main() {
    printf("%d",(rear + 1) % MAX);
    printf("%d",(rear + 1) % MAX);
}
