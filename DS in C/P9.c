#include <stdio.h>
#include <stdlib.h>


typedef struct Node {
    int coeff;
    int exp;
    struct Node* next;
} Polynomial;


void createPolynomial(Polynomial** poly);
void displayPolynomial(Polynomial* poly);
void addPolynomials(Polynomial** result, Polynomial* poly1, Polynomial* poly2);


int main(void) {
    int continueAdding;
    do {
        Polynomial *poly1 = NULL, *poly2 = NULL, *polySum = NULL;


        printf("\nCreate 1st polynomial expression\n");
        createPolynomial(&poly1);
        printf("\nStored 1st polynomial: ");
        displayPolynomial(poly1);


        printf("\nCreate 2nd polynomial expression\n");
        createPolynomial(&poly2);
        printf("\nStored 2nd polynomial: ");
        displayPolynomial(poly2);


        addPolynomials(&polySum, poly1, poly2);
        printf("\nSum of the polynomials: ");
        displayPolynomial(polySum);


        printf("\nDo you want to add another pair of polynomials? (1=Yes, 0=No): ");
        scanf("%d", &continueAdding);


    } while (continueAdding);


    return 0;
}


void createPolynomial(Polynomial** poly) {
    int addMore;
    int coeff, exp;
    Polynomial* tempNode;
    tempNode = (Polynomial*)malloc(sizeof(Polynomial));
    *poly = tempNode;


    do {
        printf("Enter coefficient: ");
        scanf("%d", &coeff);
        tempNode->coeff = coeff;


        printf("Enter exponent: ");
        scanf("%d", &exp);
        tempNode->exp = exp;


        tempNode->next = NULL;


        printf("Add more terms to the polynomial? (1=Yes, 0=No): ");
        scanf("%d", &addMore);


        if (addMore) {
            tempNode->next = (Polynomial*)malloc(sizeof(Polynomial));
            tempNode = tempNode->next;
        }
    } while (addMore);
}


void displayPolynomial(Polynomial* poly) {
    printf("\nThe polynomial expression is: ");
    while (poly != NULL) {
        printf("%dx^%d", poly->coeff, poly->exp);
        poly = poly->next;
        if (poly != NULL) {
            printf(" + ");
        }
    }
    printf("\n");
}


void addPolynomials(Polynomial** result, Polynomial* poly1, Polynomial* poly2) {
    Polynomial* tempNode = (Polynomial*)malloc(sizeof(Polynomial));
    tempNode->next = NULL;
    *result = tempNode;


    while (poly1 && poly2) {
        if (poly1->exp > poly2->exp) {
            tempNode->exp = poly1->exp;
            tempNode->coeff = poly1->coeff;
            poly1 = poly1->next;
        } else if (poly1->exp < poly2->exp) {
            tempNode->exp = poly2->exp;
            tempNode->coeff = poly2->coeff;
            poly2 = poly2->next;
        } else {
            tempNode->exp = poly1->exp;
            tempNode->coeff = poly1->coeff + poly2->coeff;
            poly1 = poly1->next;
            poly2 = poly2->next;
        }


        if (poly1 && poly2) {
            tempNode->next = (Polynomial*)malloc(sizeof(Polynomial));
            tempNode = tempNode->next;
            tempNode->next = NULL;
        }
    }


    while (poly1 || poly2) {
        tempNode->next = (Polynomial*)malloc(sizeof(Polynomial));
        tempNode = tempNode->next;
        tempNode->next = NULL;


        if (poly1) {
            tempNode->exp = poly1->exp;
            tempNode->coeff = poly1->coeff;
            poly1 = poly1->next;
        }


        if (poly2) {
            tempNode->exp = poly2->exp;
            tempNode->coeff = poly2->coeff;
            poly2 = poly2->next;
        }
    }


    printf("\nAddition Complete\n");
}
