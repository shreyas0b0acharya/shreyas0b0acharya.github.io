#include<stdio.h>
#include<math.h>
#include<ctype.h>

float stack[20];
int top = -1;

// Push and Pop Functions
void push(float val) {
    stack[++top] = val;
}

float pop() {
    return stack[top--];
}

// Postfix Evaluation Function
float evaluatePostfix(char *postfix, float *value) {
    for (int i = 0; postfix[i] != '\0'; i++) {
        char ch = postfix[i];
        if (isalpha(ch) || isdigit(ch)) {
            push(value[i]);
        } else {
            float op2 = pop(), op1 = pop();
            switch (ch) {
                case '+': push(op1 + op2); break;
                case '-': push(op1 - op2); break;
                case '*': push(op1 * op2); break;
                case '/': push(op1 / op2); break;
                case '%': push((int)op1 % (int)op2); break;
                case '^': push(pow(op1, op2)); break;
            }
        }
    }
    return pop();
}

int main() {
    char postfix[20];
    float value[20];

    printf("Enter VALID POSTFIX EXPRESSION: ");
    scanf("%s", postfix);

    for (int i = 0; postfix[i] != '\0'; i++) {
        if (isalpha(postfix[i])) {
            printf("Enter the value of %c: ", postfix[i]);
            scanf("%f", &value[i]);
        } else if (isdigit(postfix[i])) {
            value[i] = postfix[i] - '0';
        }
    }

    float result = evaluatePostfix(postfix, value);
    printf("The RESULT after Evaluation of Postfix expression: %.2f\n", result);
    return 0;
}
