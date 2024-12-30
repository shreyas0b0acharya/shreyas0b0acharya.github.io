#include <stdio.h>
#include <stdlib.h>

// Function to perform Depth First Search (DFS)
void dfs(int src, int adj[10][10], int visited[10], int n) {
    visited[src] = 1;
    for (int k = 0; k < n; k++) {
        if (adj[src][k] == 1 && !visited[k]) {
            dfs(k, adj, visited, n);
        }
    }
}

// Function to perform Breadth First Search (BFS)
void bfs(int src, int adj[10][10], int n) {
    int q[20], front = 0, rear = 0, visited[10] = {0};
    q[rear++] = src;
    visited[src] = 1;
    printf("%d ", src);

    while (front < rear) {
        int u = q[front++];
        for (int v = 0; v < n; v++) {
            if (adj[u][v] == 1 && !visited[v]) {
                q[rear++] = v;
                visited[v] = 1;
                printf("%d ", v);
            }
        }
    }
}

// Main function
int main() {
    int choice, n, adj[10][10], visited[10] = {0}, src, flag;

    while (1) {
        printf("\n--- MENU ---\n");
        printf("1. Create a Graph of N Cities\n");
        printf("2. Print Reachable Nodes from Source Node (BFS)\n");
        printf("3. Check if Graph is Connected (DFS)\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the number of cities: ");
                scanf("%d", &n);
                printf("Enter the adjacency matrix:\n");
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < n; j++) {
                        scanf("%d", &adj[i][j]);
                    }
                }
                break;

            case 2:
                printf("Enter the source vertex to start traversal: ");
                scanf("%d", &src);
                printf("Reachable vertices: ");
                bfs(src, adj, n);
                printf("\n");
                break;

            case 3:
                printf("Enter the source vertex to start traversal: ");
                scanf("%d", &src);
                for (int i = 0; i < n; i++) visited[i] = 0;
                dfs(src, adj, visited, n);
                flag = 0;
                for (int i = 0; i < n; i++) {
                    if (visited[i]==0) {
                        flag = 1;
                        break;
                    }
                }
                printf("The graph is %sconnected.\n", flag ? "not " : "");
                break;

            case 4:
                exit(0);

            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}
