var n = 70*12;
var valor = 20000000;
var salario = 100000;
var juro = 0.01;

for(i = 0; i < n; i++){
    valor += valor*juro;
    valor -= salario;
}