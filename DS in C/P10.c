#include <stdio.h>
#include <stdlib.h>


// Define the structure for tree nodes
struct TreeNode {
    int data;
    struct TreeNode *left, *right;
};


// Function to create a Binary Search Tree (BST)
struct TreeNode* createBST(int numElements) {
    struct TreeNode *root = NULL, *newNode;
    int i, element;


    for (i = 0; i < numElements; i++) {
        newNode = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        newNode->left = newNode->right = NULL;


        printf("\nEnter the value: ");
        scanf("%d", &newNode->data);


        if (root == NULL) {
            root = newNode;  // First node, set it as root
        } else {
            // Insert the new node into the tree
            struct TreeNode *currentNode = root;
            while (1) {
                // Handle duplicates
                if (currentNode->data == newNode->data) {
                    printf("\nDuplicate element found, skipping insertion.\n");
                    free(newNode);  // Free the memory for the duplicate
                    i--;
                    break;
                }
                // Insert to the left
                if (newNode->data < currentNode->data) {
                    if (currentNode->left == NULL) {
                        currentNode->left = newNode;
                        break;
                    } else {
                        currentNode = currentNode->left;
                    }
                }
                // Insert to the right
                else {
                    if (currentNode->right == NULL) {
                        currentNode->right = newNode;
                        break;
                    } else {
                        currentNode = currentNode->right;
                    }
                }
            }
        }
    }
    return root;
}




// Function to perform an inorder traversal of the BST
void inorderTraversal(struct TreeNode *root) {
    if (root) {
        inorderTraversal(root->left);
        printf("%d\t", root->data);
        inorderTraversal(root->right);
    }
}


// Function to perform a preorder traversal of the BST
void preorderTraversal(struct TreeNode *root) {
    if (root) {
        printf("%d\t", root->data);
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}


// Function to perform a postorder traversal of the BST
void postorderTraversal(struct TreeNode *root) {
    if (root) {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        printf("%d\t", root->data);
    }
}


// Function to search for a specific key in the BST
struct TreeNode* searchBST(struct TreeNode *root, int key) {
    while (root) {
        if (root->data == key)
            return root;  // Key found
        else if (root->data > key)
            root = root->left;  // Search left subtree
        else
            root = root->right;  // Search right subtree
    }
    return NULL;  // Key not found
}


int main() {
    int choice, numElements, searchKey;
    struct TreeNode *bst = NULL, *foundNode;


    while (1) {
        printf("\nMENU:");
        printf("\n1. Create BST with N integers");
        printf("\n2. Traverse the BST (inorder, preorder, postorder)");
        printf("\n3. Search for a key in the BST");
        printf("\n4. Exit");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);


        switch (choice) {
            case 1:
                printf("\nEnter the number of elements to insert in the BST: ");
                scanf("%d", &numElements);
                bst = createBST(numElements);
                break;
            case 2:
                printf("\nInorder traversal:\n");
                inorderTraversal(bst);
                printf("\nPreorder traversal:\n");
                preorderTraversal(bst);
                printf("\nPostorder traversal:\n");
                postorderTraversal(bst);
                break;
            case 3:
                printf("\nEnter the key to search for in the BST: ");
                scanf("%d", &searchKey);
                foundNode = searchBST(bst, searchKey);
                if (foundNode)
                    printf("\nThe key element %d is found in the BST.\n", searchKey);
                else
                    printf("\nThe key element %d is not found in the BST.\n", searchKey);
                break;
            case 4:
                exit(0);
        }
    }
}
