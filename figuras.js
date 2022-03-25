function print(algo){
    console.log(algo);
}

console.group("Cuadrados")

//codigo cuadrado
const ladoCuadrado=5;
print("Los lados del cuadrado miden: ")

//const perimetroCuadrado = ladoCuadrado*4;
//print("Perimetro cuadrado: "+perimetroCuadrado+"cms");
function perimetroCuadrado(lado){
    return lado*4;
}

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//print("area cuadrado: "+areaCuadrado+"cms2");

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

//codigo triangulo

console.group("Cuadrados")

const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo3=4;
const alturaTriangulo=5.5;

print(
    "Los lados del triangulo miden:"+
    ladoTriangulo1+"cms, "+
    ladoTriangulo2+"cms, "+
    baseTriangulo3+"cms, "
);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo3;
print("Perimetro Triangulo: "+perimetroTriangulo+"cms");

function fPerimetroTriangulo(lado1,lado2,lado3){
 return lado1+lado2+lado3;
}

const areaTriangulo = (baseTriangulo3*alturaTriangulo)/2;
print("area Triangulo: "+areaTriangulo+"cms2");

function fAreaTriangulo(base, altura){
    return (base*altura)/2;
}
console.groupEnd();


//Codigo circulos
console.group("Circulos")

//const radio=4;

//const diametro = radio*2;

//const PI =Math.PI;

//const perimetroCirculo = diametro*PI;
//print("Perimetro Circulo: "+perimetroCirculo+"cms");

function fPerimetroCirculo(diametro){
    const PI = Math.PI;
    return diametro*PI
}

//const areaCirculo=(radio*radio)*PI;
//print("area Circulo: "+areaCirculo+"cms");
//
function fAreaCirculo(radio){
const PI = Math.PI;
return (radio*radio)*PI;
}
console.groupEnd();



//FUNCIONES LLAMADAS EN EL HTML



//CUADRADOS
function calPerimetroCuadrado()
{//funcion que sera ejecutara mediante eun click en el html
    const input = document.getElementById("inputCuadrado"); //me permite obtener el input y su valor
    const value = input.value;//obtenemos el valor de input y lo guardamos en la constante value
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);// genera una ventana emergente en el navegadro 
    //mostrando el valor de perimetro
}
function calAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area= areaCuadrado(value);
    alert(area);
}


//TRIANGULOS
function alturaIsoceles(ladoA,ladoB,base){
    if(ladoA!=ladoB){
        console.error("Los lados a y b no son iguales");
    }else{
        //triangulo pequeño 
        const ladoAP = base/2;
        const hipotenusaP = ladoA;
        const ladoBP = (hipotenusaP**2)-(ladoAP**2);
        const alturaIsoceles = (ladoBP)**0.5;
        alert(alturaIsoceles);
        return alturaIsoceles;
    }
}


function calPerimetroTriangulo()
{//funcion que sera ejecutara mediante eun click en el html
    const input_lado1 = document.getElementById("lado1"); //me permite obtener el input y su valor
    const value_lado1 =Number(input_lado1.value);//obtenemos el valor de input con (input.value) y lo guardamos en la constante value
    const input_lado2 = document.getElementById("lado2"); //me permite obtener el input y su valor
    const value_lado2 = Number(input_lado2.value);
    const input_lado3 = document.getElementById("base"); //me permite obtener el input y su valor
    const value_base = Number(input_lado3.value);
    const perimetro = fPerimetroTriangulo(value_lado1,value_lado2,value_base);

    alert(perimetro);// genera una ventana emergente en el navegadro 
    //mostrando el valor de perimetro
}

function calAreaTriangulo()
{
    const input_lado1 = document.getElementById("lado1"); 
    const value_lado1 =input_lado1.value;//obtenemos el valor de input con (input.value) y lo guardamos en la constante value
    const input_lado2 = document.getElementById("lado2"); 
    const value_lado2 =input_lado2.value;
    const input_lado3 = document.getElementById("base"); 
    const value_base =input_lado3.value;
    Number(value_base,value_lado1,value_lado2);
    const alturaTriangulo = alturaIsoceles(value_lado1,value_lado2,value_base);
    const areaTriangulo =fAreaTriangulo(value_base,alturaTriangulo);
    alert(areaTriangulo,"cms^2");   
}

//CIRCULOS.
function calPerimetroCirculo(){
    const input_diametro = document.getElementById("diametro");
    const diametro = input_diametro.value;
    const perimetro = fPerimetroCirculo(diametro);
    alert(perimetro)}

   

function calAreaCirculo(){
    const input_radio = document.getElementById("radio"); //obtiene un objeto de html y lo almacena en  const input_radio
    const radio = input_radio.value;//obtiene el valor(value) del objeto dentro de input_radio
    const area =fAreaCirculo(radio);
    
}