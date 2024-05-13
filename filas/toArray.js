let fila = [1, 2, 3];
fila.toArray = function() {
    return this.slice();
};
let arraFila = fila.toArray();
console.log(arrayFila); // Saída: [1, 2, 3]