let meuArray = [1, "dois", {nome: "João"}, [4, 5, 6], function() { return "Função dentro de um array";}];

// Acessando elementos do array
console.log(meuArray[0]); // Saída: 1
console.log(meuArrayt[2]); // Saída: { nome: 'João' }

// Adicionando elementos ao array
meuArray.push(7);
console.log(meuArray); // Saída: [1, 'dois, { nome: 'João' }, [4, 5, 6], [Function (anonymous)], 7]

// Iterando sobre os elementos do array
meuArray.forEach(function(elemento) {
    console.log(elemento);
});
/*Saída:
1
dois
{nome: 'Joaõ' }
[4, 5, 6 ]
[Function (anonymous)]
7
*/