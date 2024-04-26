#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void codificar(char *entrada);
int tamanhoArquivo(FILE *arquivo);
char *arquivoParaVetor(FILE *arquivo);
void decodificar(char *nomeArquivo);
char *pegarEntrada();
void salvar(char *entrada);
void flush_();

int main(){
    int menu;
    char *arqMain = NULL;
    printf("Digite 1 para codificar um texto e 2 para decodificar um texto\n");
    scanf("%d", &menu);
    flush_();
    if(menu == 1){
       codificar(pegarEntrada()); 
    }else if(menu == 2){
        
        arqMain = (char *)malloc(100*sizeof(char));

        if(arqMain == NULL){
            printf("Não foi possível alocar memória\n");
            exit(1);
        }
        printf("Digite o nome do aquivo a ser decodificado:\n");
        fgets(arqMain, 100, stdin);

        size_t comprimento = strlen(arqMain);
    if((comprimento > 0) && (arqMain[comprimento - 1] == '\n')){
        arqMain[comprimento - 1] = '\0';
    }
        //flush_();
        
        decodificar(arqMain);
    }else{
        exit(1);
    }
}

void flush_(){
    char flush;
    while(flush = getchar() != '\n' && flush != EOF);
}

char *pegarEntrada(){
    char *entrada = NULL;
    int tamanho = 100;

    entrada = (char *)malloc(tamanho*sizeof(char));



    if(entrada == NULL){
        printf("Não foi possível alocar memória\n");
        exit(1);
    }
    printf("Digite a mensagem a ser codificada: \n");
    fgets(entrada, tamanho, stdin);

    size_t comprimento = strlen(entrada);
    if((comprimento > 0) && (entrada[comprimento - 1] == '\n')){
        entrada[comprimento - 1] = '\0';
    }
    
    return entrada;
}

void codificar(char *entrada){
    int chave = 0;
    int novaLetra;
    char msgCodificada[100];

    printf("Digite uma chave codificadora: \n");
    scanf("%d", &chave);
    flush_();
    
    for(int i = 0; i < strlen(entrada); i++){

        if((entrada[i] < 65) || (entrada[i] > 90 && entrada[i] < 97) || (entrada[i] > 122)){
            msgCodificada[i] = entrada[i];
            continue;
        }

        if(entrada[i] > 96){
            novaLetra = (int)entrada[i] + chave - 97;
            if(novaLetra > 25){
                novaLetra -= abs(novaLetra/26)*26;
            }
            novaLetra += 97;
        }else if(entrada[i] < 91){
            novaLetra = (int)entrada[i] + chave - 65;
            if(novaLetra > 25){
                novaLetra -= abs(novaLetra/26)*26;
            }
            novaLetra += 65;
        }

        msgCodificada[i] = novaLetra;
    }
    msgCodificada[strlen(entrada)] = '\0';
    free(entrada);
    salvar(msgCodificada);
}

void salvar(char *entrada){
    FILE *farq;

    farq = fopen("arquivo.txt", "w");

    if(farq == NULL){
        printf("Não foi possivel criar o arquivo\n");
        exit(1);
    }

    fprintf(farq, "%s", entrada);
    fclose(farq);
}

void decodificar(char *nomeArquivo){
    FILE *farq;

    farq = fopen(nomeArquivo, "r");

    if(farq == NULL){
        printf("Não foi possivel ler o arquivo %s!\n", nomeArquivo);
        exit(1);
    }
    char *msgCodificada;
    char *msgDecodificada;
    int novaLetra;
    int chave = 0;

    printf("Digite uma chave decodificadora: \n");
    scanf("%d", &chave);
    flush_();

    printf("opa");

    msgCodificada = arquivoParaVetor(farq);

    printf("opa6");

    for(int i = 0; i < strlen(msgCodificada); i++){

        if((msgCodificada[i] < 65) || (msgCodificada[i] > 90 && msgCodificada[i] < 97) || (msgCodificada[i] > 122)){
            msgDecodificada[i] = msgCodificada[i];
            continue;
        }

        if(msgCodificada[i] > 96){
            novaLetra = (int)msgCodificada[i] - chave - 122;
            if(novaLetra < -25){
                novaLetra += abs(novaLetra/26)*26;
            }
            novaLetra += 97;
        }else if(msgCodificada[i] < 91){
            novaLetra = (int)msgCodificada[i] - chave - 65;
            if(novaLetra < -25){
                novaLetra += abs(novaLetra/26)*26;
            }
            novaLetra += 65;
        }

        msgDecodificada[i] = novaLetra;
    }
    msgDecodificada[strlen(msgCodificada)] = '\0';
    printf("%s\n", msgDecodificada);

    fclose(farq);
    free(msgCodificada);
}

char *arquivoParaVetor(FILE *arquivo){
    int tamanho = tamanhoArquivo(arquivo);
    printf("\ntamanho: %d\n", tamanho);

    char *conteudoArquivo;
    printf("opa4");

    fgets(conteudoArquivo, tamanho, arquivo);

    printf("opa5");

    return conteudoArquivo;
}

int tamanhoArquivo(FILE *arquivo){
    char strcod;
    int contador = 1;
    printf("opa2");

   while(getc(arquivo) != EOF){
        contador++;
   }
    printf("opa3");
    return contador;
}

