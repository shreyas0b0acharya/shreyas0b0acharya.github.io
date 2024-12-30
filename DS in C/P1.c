#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DAYS_IN_A_WEEK 7

typedef struct {
    char *DayName;
    int Date;
    char *Activity;
} DAY;

DAY *createCalendar() {
    return (DAY *)malloc(DAYS_IN_A_WEEK * sizeof(DAY));
}

void readCalendar(DAY *calendar) {
    char nameBuffer[50], activityBuffer[100];
    for (int i = 0; i < DAYS_IN_A_WEEK; i++) {

        printf("Day Name: ");
        scanf("%s", nameBuffer);
        calendar[i].DayName = strdup(nameBuffer);

        printf("Date: ");
        scanf("%d", &calendar[i].Date);

        printf("Activity: ");
        scanf("%s", activityBuffer);
        calendar[i].Activity = strdup(activityBuffer);

        printf("-------------------------------------------\n");
    }
}

void displayCalendar(DAY *calendar) {
    printf("\nWeek's Activity Details:\n");
    for (int i = 0; i < DAYS_IN_A_WEEK; i++) {
        printf("\nDay %d:\n", i + 1);
        printf("%s on date %d you have to %s\n",calendar[i].DayName, calendar[i].Date, calendar[i].Activity);
    }
}

void freeCalendar(DAY *calendar) {
    for (int i = 0; i < DAYS_IN_A_WEEK; i++) {
        free(calendar[i].DayName);
        free(calendar[i].Activity);
    }
    free(calendar);
}

int main() {
    DAY *weeklyCalendar = createCalendar();
    readCalendar(weeklyCalendar);
    displayCalendar(weeklyCalendar);
    freeCalendar(weeklyCalendar);
    return 0;
}
