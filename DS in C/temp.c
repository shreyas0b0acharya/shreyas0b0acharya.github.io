#include <stdio.h>

int main() {
    // 1D Array: Row of Mailboxes
    int arr[3] = {10, 20, 30};
    int *p = arr; // Pointer to the first mailbox

    printf("1D Array Mailboxes:\n");
    for (int i = 0; i < 3; i++) {
        printf("Mailbox %d: %d (Address: %p)\n", i, *(p + i), (p + i));
    }

    // 2D Array: Grid of Mailboxes
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    int (*pm)[3] = matrix; // Pointer to the first row of the grid

    printf("\n2D Array Mailboxes:\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("Mailbox [%d][%d]: %d (Address: %p)\n", i, j, *(*(pm + i) + j), *(*(pm + i) + j));
        }
    }

    return 0;
}
