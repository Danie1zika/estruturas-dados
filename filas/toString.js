let fila = [1, 2, 3];
fila.toString = function() {
    return thisjoin(', ');
};
console.log(ifla.toString()); // Saída: "1, 2, 3"