//let total=0, cuenta= 1;   // ejercicio de while "+="" funciona como contador que a la vez suma lo que almacena
//while (cuenta <=10) {
    //total += cuenta;
    //cuenta += 1;
//}
//console.log(total);

// operador ? es igual a un if else
//x = 8
//let mensaje = x > 41 ?  "verdad" : "falso"
//console.log(mensaje)

// como se usa el else if
//const tiempo= 23
//let saludos;
//if (tiempo <= -0){
 //   saludos= " el dia solo tiene numeros positivos"
//}else if(tiempo <12){
//    saludos= "buenos dias";
//}else if (tiempo<20){
//    saludos= "buenas tardes";
//}else if(tiempo >= 25){
//    saludos= " el dia solo tiene 24 horas"
//}else if (tiempo >= 20){
//    saludos="buenas noches";
//}
//console.log(saludos)

//for( let i=0; i<=100; i++){
//    console.log(i)
//}

//i=0
//contador=0
//C="."
//let texto = "No comas ajos ni cebollas, porque no saquen por el olor tu villanería.Anda despacio; habla con resposo; pero no de manera que parezca que te escuchas a ti mismo; que toda afectación es mala.Come poco y cena más poco; que la salud de todo el cuerpo se fragua en la oficina del estómago.Sé templado en el beber, considerando que el vino demasiado ni guarda secreto, ni cumple palabra.Ten cuenta, Sancho, de no mascar a dos carrillos, ni de erutar delante de nadie"
//text=texto.length
//for(c in texto){
//    if(texto[c]== C){
//        contador+=1
        
//        console.log(contador)
//    }
    
//}
//suma en un arreglo
//suma=0
//const numbers= [5,3,4,7,2,1,9,7,7]
//for(i in numbers){
//    suma+=numbers[i]
//    console.log(suma)
//}
//declarar un objeto se usa : y para separar se usa comas
//const carros={
//    brand:"nissan",
//    model: "versa",
//    year: 2020
//}
//let r = 1;
const power= function(base,exponente){
    let r = 1;
for (let i = 0; i < exponente; i++) {
    r = r * base;
    } return r;
}
const elevado=power(80,8)
console.log(elevado)

    
