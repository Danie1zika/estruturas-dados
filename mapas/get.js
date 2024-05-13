let mapa = new Map();
mapa.set('chave1', 'valor1');

console.log(mapa.get('chave1')); // Saída: valor1
console.log(mapa.get('chave2'));
// Saída: undefined (pois a chave2 não existe no mapa)