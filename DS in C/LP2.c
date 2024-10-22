#include <stdio.h>
#include <string.h>  // For string length functions

char mainStr[50], patStr[50], repStr[50], ansStr[100];

void strRead();
void strReplace();

int main(){
    strRead();
    strReplace();
    return 0;
}

void strRead(){
    printf("Enter Main String: ");
    scanf("%s", mainStr);

    printf("Enter Pattern String: ");
    scanf("%s", patStr);

    printf("Enter Replace String: ");
    scanf("%s", repStr);

    printf("\n\nEntered Main String: %s", mainStr);
    printf("\nEntered Pattern String: %s", patStr);
    printf("\nEntered Replace String: %s", repStr);
}

void strReplace(){
    int mi, pi, ai, ri, flag;
    mi = pi = ai = ri = flag = 0;

    while(mainStr[mi] != '\0'){
        if(mainStr[mi] == patStr[pi]){
            mi++;
            pi++;
            // If the entire pattern is found
            if(patStr[pi] == '\0'){
                flag = 1;
                // Copy the replacement string into ansStr
                for(ri = 0; repStr[ri] != '\0'; ri++){
                    ansStr[ai] = repStr[ri];
                    ai++;
                }
                // Reset pattern index and skip the matching part of mainStr
                pi = 0;
            }
        } else {
            // If no match, copy the current character
            ansStr[ai] = mainStr[mi];
            ai++;
            mi++;
            pi = 0;  // Reset pattern index if mismatch happens
        }
    }

    ansStr[ai] = '\0';  // Ensure ansStr is null-terminated after the replacement

    if(flag == 1){
        printf("\n\nAfter Replacement, String becomes: %s", ansStr);
    } else {
        printf("\n\nUnable to find and replace the string.");
    }
}
