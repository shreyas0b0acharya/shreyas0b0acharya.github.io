#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define WEEK_SIZE 7

struct day {
    char *dayName;
    int date;
    char *activity;
};

struct day *create();
void read(struct day *week);
void display(struct day *week);
void freeMemory(struct day *week);

int main() {
    struct day *week = create();
    read(week);
    display(week);
    freeMemory(week);
    return 0;
}

struct day *create() {
    struct day *week = (struct day *)malloc(WEEK_SIZE * sizeof(struct day));
    if (week == NULL) {
        return NULL;
    }
    for (int i = 0; i < WEEK_SIZE; i++) {
        week[i].activity = NULL;
        week[i].dayName = NULL;
    }
    return week;
}

void read(struct day *week) {
    char nameTemp[50], activityTemp[100];
    printf("\nEnter the details for the created week:");
    for (int i = 0; i < WEEK_SIZE; i++) {
        printf("\nEnter the Day Name: ");
        scanf("%s", nameTemp);
        week[i].dayName = strdup(nameTemp);
        printf("\nEnter the Date: ");
        scanf("%d", &week[i].date);
        printf("\nEnter the Activity Details: ");
        scanf("%s", activityTemp);
        week[i].activity = strdup(activityTemp);
    }
}

void display(struct day *week) {
    printf("\nDetails of the week:");
    for (int i = 0; i < WEEK_SIZE; i++) {
        printf("\nDate: %d\nDay: %s\nActivity: %s", week[i].date, week[i].dayName, week[i].activity);
    }
}

void freeMemory(struct day *week) {
    for (int i = 0; i < WEEK_SIZE; i++) {
        free(week[i].activity);
        free(week[i].dayName);
    }
    free(week);
}
