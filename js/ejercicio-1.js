/* 
Make a script that asks for the number of rows and columns and writes a table. 
Inside each of the cells a consecutive number should be written in descending order. 
If, for example, the table is 5×5, the numbers will go from 25 to 1.

Hacer un script que pida el número de filas y columnas y escriba una tabla. Dentro 
de cada una de las celdas se escribirá un número consecutivo en orden 
descendente. Si, por ejemplo, la tabla es de 5×5, los números irán del 25 al 1.
*/

let row = prompt('Write a number of rows:')

let column = prompt('Write a number of columns:')


for (i=column; i >= 1; i--) {
    
    console.log(`${row} x ${i} = ${row * column}`)

}