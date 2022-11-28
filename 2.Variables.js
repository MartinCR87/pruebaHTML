// Una variable es una cajita donde podemso guardar un valor
var miVariable = "freeCodeCamp";
console.log(miVariable);
miVariable = 13;
console.log(miVariable);
miVariable = true;
console.log(miVariable);

var myName = "Martin";  //se descriptivo con el nombre de las varibles, y usamos el camelCase (primera letra mayuscula y segunda letra mayuscula)
console.log(myName);

// Los nombres de las variables pueden estar formados por números, letras y $ o _, pero no pueden contener espacios ni empezar con un número.

// = es el operador de asignacion en JS

//---------------------
// Tambien es posible asignar el valor de una variable a otra variable: Ejemplo:

var a = 5;
var b;
b = a;
console.log(b);

//en este caso asignamos el valor de a a la variable b; por tanto ambas tienen el valor asignado de 5.
//otra forma es:

var a = 5;
var b = a;
console.log(b);
console.log(a);

//------------------

// Es común inicializar una variable a un valor inicial en la misma línea que es declarada. Como ejemplo vamos a Definir una variable a con var e inicialízala con un valor de 0.

var myVar = 0;



//------------------ALgunas cuestiones tecnicas:

var x;  //a este se le llama "declarar una variable".
var x = 33; //aqui estamos "asignando" un valor, y al estar asignando un valor a nuestra variable quiere decir que la estamso "inicializando". En este caso estamos inicializando la variable x con el valor 33.

// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


//.........Entonces tambien podemos decir: Variables no inicializadas:

var a; // en este caso al no haber asignado un valor; el valor predeterminado será "undefined".
// Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" (no es un número).
//Si concatenas una cadena con una variable undefined, obtendrás una cadena de undefined.

// Cambia solo el código debajo de esta línea
var a;
var b;
var c;
// Cambia solo el código encima de esta línea

a = a + 1;
b = b + 5;
c = c + " String!";
// Inicializa las tres variables a, b, y c con 5, 10 y "I am a" respectivamente para que no sean undefined.

// Cambia solo el código debajo de esta línea
var a = 5;
var b = 10;
var c = "I am a";
// Cambia solo el código encima de esta línea

a = a + 1;
b = b + 5;
c = c + " String!";



//_________________________________Tambien se pueden Declarar variable de cadena:
var myName = "yourName";

// "your name" es llamada una cadena literal. Una cadena literal o cadena es una serie de ceros o más caracteres encerrados en comillas simples o dobles.

//Ten cuidado con el uso de mayusculas y minusculas

var miVariable = 5;
console.log(MIVARIABLE); //esto resultará en un error, el nombre de la variable tiene qeu ser exacatamente como lo definimos. 
//__________________________


//var y let

// Así que a diferencia de var, al usar let, una variable con el mismo nombre solo puede declararse una vez.

// en el caso de var se puede sobreescribir la declaracion de variables:
var camper = "James";
var camper = "David";
console.log(camper);

// Si reemplazas var por let en el código anterior, resultará en un error:

let camper = "James";
let camper = "David";

// El error se puede ver en tu consola de tu navegador.

