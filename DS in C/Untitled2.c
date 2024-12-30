#include <stdio.h>
char str[20], pat[20], rep[20], ans[20];
void read() {
    printf("Enter three strings:\n");
    printf("Enter the main string:\n");
    scanf("%s", str);
    printf("Enter the pattern string:\n");
    scanf("%s", pat);
    printf("Enter the replacement string:\n");
    scanf("%s", rep);
}
void strsr() {
    int i, j, k, c, m, flag = 0;
    i = m = c = j = 0;
    while (str[c] != '\0') {
        if (str[m] == pat[i]) {
            i++;
            m++;
            if (pat[i] == '\0') {
                flag = 1;
                for (k = 0; rep[k] != '\0'; k++, j++) {
                    ans[j] = rep[k];
                }
                i = 0;
                c = m;
            }
        } else {
            ans[j] = str[c];
            j++;
            c++;
            m = c;
            i = 0;
        }
    }
    ans[j] = '\0';
    if (flag == 1) {
        printf("The pattern \"%s\" is found in the main string \"%s\".\n", pat, str);
        printf("The string after replacement is: %s\n", ans);
    } else {
        printf("The pattern \"%s\" is not found in the main string \"%s\".\n", pat, str);
    }
}
int main() {
    read();
    strsr();
    return 0;
}

