#include<stdio.h>
#include<conio.h>

void tower(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("\n\tDisk 1 moved from %c to %c\n", from, to);
        return;
    }
    tower(n - 1, from, aux, to);
    printf("\n\tDisk %d moved from %c to %c\n", n, from, to);
    tower(n - 1, aux, to, from);
}

void main() {
    int n, option;
    do {
        printf("\nEnter number of disks: ");
        scanf("%d", &n);
        tower(n, 'A', 'C', 'B');
        printf("\nContinue? (1-Yes / 0-No): ");
        scanf("%d", &option);
    } while (option != 0);
}
