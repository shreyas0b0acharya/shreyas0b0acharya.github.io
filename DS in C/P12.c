#include <stdio.h>
#include <stdlib.h>

int key[20], n, m;
int *ht, index;
int count = 0;

void insert(int key) {
    index = key % m; // Hash function: key mod m
    while (ht[index] != -1) { // Resolve collisions using linear probing
        index = (index + 1) % m;
    }
    ht[index] = key;
    count++;
}

void display() {
    int i;
    if (count == 0) {
        printf("\nHash Table is empty");
        return;
    }

    printf("\nHash Table contents are:\n");
    for (i = 0; i < m; i++) {
        printf("\nT[%d] --> %d", i, ht[i]);
    }
}

int main() { // Corrected 'void main()' to 'int main()'
    int i;
    printf("\nEnter the number of employee records (N): ");
    scanf("%d", &n);

    printf("\nEnter the two-digit memory locations (m) for hash table: ");
    scanf("%d", &m);

    ht = (int *)malloc(m * sizeof(int)); // Allocate memory for the hash table
    for (i = 0; i < m; i++) {
        ht[i] = -1; // Initialize hash table with -1 (empty slots)
    }

    printf("\nEnter the four-digit key values (K) for N Employee Records:\n");
    for (i = 0; i < n; i++) {
        scanf("%d", &key[i]); // Read key values
    }

    for (i = 0; i < n; i++) {
        if (count == m) {
            printf("\n----- Hash table is full. Cannot insert the record with key %d -----", key[i]);
            break; // Exit loop if the hash table is full
        }
        insert(key[i]); // Insert the key into the hash table
    }

    display(); // Display the hash table contents
    free(ht); // Free allocated memory
    return 0; // Return 0 to indicate successful execution
}
