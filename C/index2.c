#include <stdio.h>
#include <string.h>

int main(){
    char *a, *b;

    a = "uva";
    b = "abacate";
    
    if(strcmp(a, b) < 0)
        printf("%s vem antes que %s", a, b);
    else
        printf("%s vem depois que %s", a, b);

    return 0;
}