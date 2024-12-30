#include<stdio.h>
#include<string.h>
#include<ctype.h>

char stack[20], postfix[20];
int top = -1, j = -1;

void push(char token) {
    stack[++top] = token;
}

char pop() {
    return stack[top--];
}

int priority(char token) {
    if (token == '(' || token == '#') return 1;
    if (token == '+' || token == '-') return 2;
    if (token == '*' || token == '/' || token == '%') return 3;
    if (token == '^') return 4;
    return 0;
}

void infixToPostfix(char *infix) {
    push('#');
    for (int i = 0; infix[i]; i++) {
        char token = infix[i];
        if (isalpha(token)) {
            postfix[++j] = token;
        } else if (token == '(') {
            push(token);
        } else if (token == ')') {
            while (stack[top] != '(')
                postfix[++j] = pop();
            pop();
        } else {
            while (priority(stack[top]) >= priority(token))
                postfix[++j] = pop();
            push(token);
        }
    }
    while (stack[top] != '#')
        postfix[++j] = pop();
    postfix[++j] = '\0';
}

int main() {
    char infix[20];
    printf("Enter an infix expression: ");
    scanf("%s", infix);
    printf("Infix Expression: %s\n", infix);
    infixToPostfix(infix);
    printf("Postfix Expression: %s\n", postfix);
    return 0;
}
