#include <stdio.h>
#include <fcntl.h>      // For open()
#include <sys/stat.h>   // For mkfifo()
#include <sys/types.h>  // For mkfifo()
#include <unistd.h>     // For write(), close(), unlink()

int main() {
    char *myfifo = "/tmp/myfifo"; 
    mkfifo(myfifo, 0666);
    printf("Run Reader process to read the FIFO file.\n");
    int fd = open(myfifo, O_WRONLY);
    write(fd, "Hi", sizeof("Hi"));
    close(fd);
    unlink(myfifo);
    return 0;
}

#include <stdio.h>
#include <fcntl.h>      // For open()
#include <sys/stat.h>   // For mkfifo()
#include <sys/types.h>  // For mkfifo()
#include <unistd.h>     // For read(), close()

#define MAX_BUF 1024

int main() {
    char *myfifo = "/tmp/myfifo",buf[MAX_BUF];
    int fd = open(myfifo, O_RDONLY);
    read(fd, buf, MAX_BUF);
    printf("Writer: %s\n", buf);
    close(fd);
    return 0;
}
