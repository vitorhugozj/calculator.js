//Import da Biblioteca para entrada de dados 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function(numero){
    let valor1 = numero1.replace(',','.');

    //Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function(numero2){
        let valor2 = numero2.replace(',','.');
        //Entrada de dados referentea operação matemática a ser realizada
        entradaDeDados.question('Escolha uma operação a ser realizada: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]', function(OpcaoMatematica){

            //toUpperCase() - permite converter uma String em MAISCULO
            //toLowerCase() - permite converter uma String em minusculo

            let operacao = OpcaoMatematica.toUpperCase();
            //Validação para entrada de dados vazia
            if(valor1 == '' || valor2 || ''){
                console.log('ERRO: É obrigatório da entrade de valores');
            //Validação de caracteres ao invés de números
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: É obrigatorio a entrada somente de valores numéricos.')
            }else{
                let resultado;

                if(operacao == 'SOMAR'){
                    resultado = (valor1) + (valor2);

                }else if(operacao == 'SUBTRAIR'){
                    resultado = (valor1) - (valor2);

                }else if(operacao == 'MULTIPLICAR'){
                    resultado = valor1 * valor2;

                }else if(operacao == 'DIVIDIR'){
                    resultado = valor1 / valor2;
                }

                console.log(resultado);

            }
        });
    });
});