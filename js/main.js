function saludo() {
    alert("BIENVENIDO USUARIO");
}

function suma() {
    // Declaramos la variables necesarias

    let A = 0;
    let B = 0;
    let SUMA = 0;

    // solicitar los valores

    alert("Este algoritmo realiza la suma de dos valores ingresados por usted")

    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

    // realizar las operaciones

    SUMA = A + B;

    // mostrar resultado

    alert("El resultado de la suma es " + SUMA + " las mejores pana");
}

function OperacionesBasicas() {

    let A = 0;
    let B = 0;
    let RESTA = 0;
    let MULTIPLICAR = 0;
    let DIVIDIR = 0;

    alert("Este algoritmo realiza las operaciones basicas de dos valores ingresados")

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    RESTA = A - B;
    MULTIPLICAR = A * B;
    DIVIDIR = A / B;

    alert("El resultado de la resta es " + RESTA  );
    alert("El resultado de la multiplicacion es " + MULTIPLICAR  );
    alert("El resultado de la divicion es " + DIVIDIR  );

    
}

function raiz() {

    let A = 0;

    alert("Este algoritmo te calcula la raiz cuadrada del valor  que ingreses")

    A = parseInt(prompt("Ingrese un valor "));

    cuadrado = A * A;


    alert(" El RESULTADO DEl CUADRADO ES : " + cuadrado);
    
}

function AreaT() {

    let Base = 0;
    let Altura = 0;

    alert("Este algoritmo te calcula el area de un triangulo con los valores ingresados");

    Base = parseInt(prompt("Ingrese el primer valor"));
    Altura = parseInt(prompt("Ingrese el segundo valor"));

    area = Base * Altura / 2;

    alert(" EL AREA DEL TRIANGULO ES : " + area);

    
}

function NumeroMayor() {

    let A = 0;
    let B = 0;

    alert("Este algoritmo realiza la operacion de identificar cual es el valor mayor de los que ingreso");

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    if (A == B) {
        alert(" El valor es igual");
    }else if (A > B) {
        alert(A + " Es mayor que " + B);
    }
    else{
        alert(B + " Es mayor que " + A);
    }

    
}

function cum() {

    let A = 0;

    alert("Este algoritmo te ayuda a realizar una convercion de metros a pulgadas,pies,kilometros con el valor ingresado ");

    A = parseInt(prompt("Ingrese la cantidade de metros"));

    Pulgada = A * 39.37;
    Pie = A * 3.281;
    Kl = A / 1000;

    alert("El Valor de los Metros a Pulgada es : " + Pulgada);
    alert("El Valor de los Metros a Pie es : " + Pie);
    alert("El Valor de los Metros a Kilometros es : " + Kl);


}

function ConversionT(){

    let GradoCentigrado = 0;
    let fahrenheit = 0;

    alert("Este algoritmo convierte de grado celsius");

    GradoCentigrado = parseInt(prompt("Ingrese Los grados Celsius:"));

    fahrenheit = (GradoCentigrado * 9/5 )+ 32;

    alert ("La convercion de °C: " + GradoCentigrado + " a grados fahrenheit es: " + fahrenheit);
 
}

function PE(){
    let nombreEstudiante
    let sumaNotas = 0;
    let promedio = 0;
    nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    

    for (let i = 1; i <= 10; i++) {
        const nota = parseFloat(prompt("Ingrese la nota:" + i));
        sumaNotas += nota;
    }

    promedio = sumaNotas / 10;

    let estado;

    if (promedio >= 6 & promedio <= 10) {
        estado = "Aprobo";
    } else {
        estado = "Perdio";
    }

    alert("El estudiante: " + nombreEstudiante + " obtuvo un promedio de:  " + promedio  + " usted: " + estado);
}

function DescuentoC() {
    const precioPorKilo = 4500;
    let descuento = 0;
    let costoTotal = 0;
  
    let kilosComprados = parseInt(prompt("Ingrese los kilos que compró:"));
  
    if (kilosComprados >= 0 & kilosComprados <= 2) {
      descuento = 0;
    } else if (kilosComprados >= 3 & kilosComprados <= 5) {
      descuento = 0.1;
    } else if (kilosComprados >= 6 & kilosComprados <= 10) {
      descuento = 0.15;
    } else {
      descuento = 0.2;
    }
  
    costoTotal = kilosComprados * precioPorKilo * (1 - descuento);
  
    alert("El costo total para su compra fue de: " + costoTotal + " pesos.");
  }


function ParImpar() {

    let A = 0;

    alert("Este realiza la operacion de mostar si el valor ingresado es par o impar");

    A = parseInt(prompt("Ingrese el Valor"));

    if (A % 2 == 0) {
        alert("Es par");
    }
    else{
        alert("Es impar");
        
    }
    
}

function SalarioHora(){
    // Lamamos variables
    let horas = 0;
    let horasTrabajadas = 0;
    let tarifaHoraRegular = 10000;  
    let tarifaHoraExtra = 20000;    

    let salario = 0;
    // Solicitamos datos
    horasTrabajadas = parseInt(prompt("Por favor, ingresa el número de horas trabajadas:"));
    salario = parseInt(prompt("Ingrese su salario habitual:"));
    horas = parseInt(horasTrabajadas);

    if (horas <= 40) {
        salario = horas * tarifaHoraRegular;
    } else {
        horasRegulares = 40;
        horasExtras = horas - horasRegulares;
        salario = (horasRegulares * tarifaHoraRegular) + (horasExtras * tarifaHoraExtra);
    }

    // Mostramoe el mensaje final
    alert("El salario semanal del obrero es: " + salario); 
    
}


// Funcion para menor de tres numeros

function NumeroMenor(){

    let a,b,c = 0;

    alert("Este algoritmo de 3 numeros dice cual es el menor");

    a = parseInt(prompt("Ingrese el primer numero:"));
    b = parseInt(prompt("Ingrese el segundo numero:"));
    c = parseInt(prompt("Ingrese el tercer numero:"));

    if (a <= b & a <= c) {
        alert(a + " es el menor.");
        } else if (b <= a & b <= c ) {
            alert(b  + " es el menor.");
            } else {
                alert(c + " es el menor.");
        }

}