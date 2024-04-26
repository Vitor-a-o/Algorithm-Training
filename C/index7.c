#include <stdio.h>

union test {
    int x, y;
};

int main(){
    union test t;

    t.x = 1;
    t.y = 2;

    printf("x = %d, y = %d | ", t.x, t.y);
    t.y += t.x;
    printf("x = %d, y = %d", t.x, t.y);


}