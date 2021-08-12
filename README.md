# Busca un producto de Pi con las siguientes caracteristicas.

## ABC

A - Es un numero dentro de la susecion de pi de dos digitos.

B - Es un numero dentro de la susecion de pi de tres digitos.

C - Es el producto de A x B.

ABC - Son los numeros anteriores, pero aparecen dentro de la susecion de numeros en Pi

## Programa

En el programa usamos [Axios](https://axios-http.com) para consumir la api de [pi](https://uploadbeta.com/api/pi/)

La añadimos como dependencia a nuestro programa y hacemos una consulta, para que nos regrese el primer 1,000,000 de numeros de pi.

Dentro de un while agrupamos el primer bloque de numeros que seria "A"
el segundo bloque que es "B" y el tercer bloque que seria "C"
Nos aseguramos que la multiplicacion de A x B sea igual a C, si es asi salimos del while y regresamos el valor ABC.
Sino, recorremos una posicion hacia adelante los bloques que tenemos.