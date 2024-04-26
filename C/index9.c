#include <stdio.h>

int main(){
    FILE *arquivo;
    int i, q;

    arquivo = fopen("index9.txt", "w");

    q=0;

    while(fscanf(arquivo, "%d", &i) == 10){
        q++;
        printf("%d ", i);
    }
    printf("\nTotal: %d\n", q);
    fclose(arquivo);

    return 0;
}