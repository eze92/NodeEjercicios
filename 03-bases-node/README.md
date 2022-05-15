# Notas:

+ Este es mi primer programa en Node , el cual es una tabla de multiplicar utilizando el paquete yars para agregar comandos por consola
que a su vez se grabara en un archivo txt

+ Los comandos a poder utilizar estan definidos en Options

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multiplicar       [number] [required]
  -l, --listar   Lista la tabla de multiplicar en consola
                                                      [boolean] [default: false]
  -h, --hasta    Indica el hasta que punto tengo que multiplicar
                                                          [number] [default: 10]
```                                          
```
+ Forma de ejecutar los comandos por consola. los cuales estan explicados arriba en las Options
Ejemplo  node app.js -b  2  -l -h 10 

+ Al utilizar el comando -l , me mostrara la tabla por consola de la siguiente forma 

===================
Tabla del : 2
===================
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20


```

# Paquetes npm usados

+ colors : Colores en la consola
+ yargs : Manejo de opciones customizadas para la consola
