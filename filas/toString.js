let fila = [1, 2, 3];
fila.toString = function() {
    return thisjoin(', ');
};
console.log(fila.toString()); // Saída: "1, 2, 3"