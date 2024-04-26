#include <stdio.h>
#include <stdlib.h>

struct num * criaNum(void);
struct end * criaEnd(void);
void insereNum(int x, struct num * ini);
void gravar(struct end *iniend);

struct end{
    struct num * ininum;
    struct end * prox;
};

struct num{
    int conteudo;
    struct num * prox;
};

int main(){ 

    struct end * iniend;
    iniend = criaEnd();

    printf("opa\n");

    FILE *arquivo;
    arquivo = fopen("entrada.txt", "r");

    printf("opa2\n");

    char lixo;

    for(int i = 0, j = 10; j <= 100; i = j, j +=10){
        struct end *novaend, *final;
        struct num *ininum;
        ininum = criaNum();
        printf("opa3\n");
        int numero = 0;
        char lixo;

        novaend = (struct end *)malloc(sizeof(struct end));

        for(final = iniend; final->prox != NULL; final = final->prox);

        printf("opa4\n");

        while(fscanf(arquivo, "%d", &numero) == 1){
            printf("%d\n", numero);

            if((numero >= i && numero < j)){
                insereNum(numero, ininum);
            }

        }
        printf("opa5\n");
        novaend->ininum = ininum;
        novaend->prox = final->prox;
        final->prox = novaend;
    }
    fclose(arquivo);
    gravar(iniend);

}

void gravar(struct end *iniend){
    struct end *p;
    FILE *arquivo;

    arquivo = fopen("saida.txt", "w");

    for (p = iniend->prox; p != NULL; p = p->prox){
        struct num *q;
        for(q = p->ininum->prox; q != NULL; q = q->prox){
            fprintf(arquivo, "%d", q->conteudo);
        }
    }

    fclose(arquivo);
}

struct num * criaNum(void){
    struct num *ininum;

    ininum = (struct num *)malloc(sizeof(struct num));
    ininum -> prox = NULL;
    return ininum;
}

struct end * criaEnd(void){
    struct end *iniend;

    iniend = (struct end *)malloc(sizeof(struct end));
    iniend -> prox = NULL;

    return iniend;
}

void insereNum(int x, struct num * ini){
    struct num *q, *nova;
    printf("opa5\n");

    q = ini->prox;

    q = (struct num *)malloc(sizeof(struct num));

    while((q != NULL) && (x > q->conteudo)){
        q = q->prox;
    }
    
}
