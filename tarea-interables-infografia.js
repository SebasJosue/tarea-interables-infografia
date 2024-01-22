//ejercicios iterables primer ejercicio interables estsos metodos interables son una generalizacion de los arrays para ello se usa los metodos for o of//.

'use strict'


let word = "hola mundo";


for (let a of word ) {

    alert(a);
}


//Map es igual que el object que una coleccion de datos identificados por claves , la diferencia es que map permite calves de cualquier tipo //
//ejemplos //


'use strict'

let set = new Set ();

let Erick = {name: "Erick"};
let Maria = {name: "Maria"};
let Marlon = {name: "Marlon"};

set.add("Erick");
set.add("Maria");
set.add("Marlon");
set.add("Erick");
set.add("Maria");

alert( set.size );

for (let user of set){
    alert(user.name);
}

//Object.keys, values, entries este tipo de mketodos son genericos existe un acuerdo comun par usarlo en la estructuracion de datos estos metodos tambien son similares siempre sse debe escribir de manera correcta caso contario //
//ejemplo//

'use strict'

let user = {
    name: "gabiel",
    age: 25
  };

  for (let value of Object.values(user)){
    alert(value);
  }

// El siguiente ejmplo consta en la eliminacion de un array o desetructuracion de un elemento array esta funcion nos permote desempaquetar objetos o arrays//

'use strict'

let arr = ["Juan", "Perez"]

let [firstName, surname] = arr;

alert(firstName); 
alert(surname);  
  

//La funcion date and type este objeto  no tiene mucha explicacion consiste en que almacena la fecha y la hora de un archivo entre otros//

let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

//En este ejemplo los vamos a representar como un objeto o un valor estandar se lo cocnoce como json//

let student = {
    name: 'Gabriel',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  alert(typeof json); 
  
  alert(json);


