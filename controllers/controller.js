"use strict";
var car;
var llistaCotxes = [];
var carForm = document.getElementById("formulariCotxe");
var carWheel = document.getElementById("formulariRodes");
var result = document.getElementById("resultat");
carForm.style.display = "block";
carWheel.style.display = "none";
result.style.display = "none";
function createCar() {
    var plate = document.getElementById("matricula").value;
    var brand = document.getElementById("marca").value;
    var color = document.getElementById("color").value;
    var regexp = new RegExp("\\d\\d\\d\\d\\w\\w\\w", "i");
    if (regexp.test(plate) == true) { //https://javascript.info/regexp-introduction  i per considerar iguals majúscules i minúscules. d per digits (0-9), w per lletres.
        var car_1 = new Car(plate, color, brand);
        console.log(car_1);
        console.log(car_1.wheels);
        llistaCotxes.push(car_1);
        console.log(llistaCotxes);
        showWheelForm();
    }
    else {
        var noCotxe = document.getElementById("noCotxe");
        noCotxe.innerHTML = "Sisplau, revisa que les dades siguin correctes.";
    }
}
function showWheelForm() {
    var carForm = document.getElementById("formulariCotxe");
    var carWheel = document.getElementById("formulariRodes");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
function afegirRodes() {
    var car = llistaCotxes[0];
    //let rodaDiam1 = parseFloat((<HTMLInputElement>document.getElementById("diametre1")).value);
    //let rodaDiam2 = parseFloat((<HTMLInputElement>document.getElementById("diametre2")).value);
    //let rodaDiam3 = parseFloat((<HTMLInputElement>document.getElementById("diametre3")).value);
    //let rodaDiam4 = parseFloat((<HTMLInputElement>document.getElementById("diametre4")).value);
    var i;
    var errors = false;
    for (i = 1; i <= 4; i++) {
        var rodaDiam = parseFloat(document.getElementById("diametre" + i).value);
        if (rodaDiam >= 2 || rodaDiam <= 0.4) {
            var resultatCotxe = document.getElementById("resultatCotxe");
            resultatCotxe.innerHTML = "";
            var resultat1 = document.getElementById("resultatError");
            resultat1.innerHTML = "Introdueix un diàmetre vàlid.";
            result.style.display = "block";
            if (resultat1.innerHTML == "Introdueix un diàmetre vàlid.") {
                errors = true;
            }
        }
        var j;
        for (j = 1; j <= 4; j++) {
            var resultatRodes = document.getElementById("resultatRodes" + i);
            resultatRodes.innerHTML = "";
        }
    }
    if (errors == false) {
        for (i = 1; i <= 4; i++) {
            var rodaDiam = parseFloat(document.getElementById("diametre" + i).value);
            if (rodaDiam < 2 && rodaDiam > 0.4) {
                if (car.wheels.length == 4) {
                    car.wheels = [];
                }
                console.log(car.wheels);
                car.addWheel(new Wheel(parseFloat(document.getElementById("diametre" + i).value), document.getElementById("marca" + i).value));
                console.log(car);
                result.style.display = "block";
                console.log(llistaCotxes[0]);
                var resultat1 = document.getElementById("resultatError");
                resultat1.innerHTML = "";
                var resultatCotxe = document.getElementById("resultatCotxe");
                resultatCotxe.innerHTML = "Plate: " + car.plate + ",  Color: " + car.color + ",  Brand: " + car.brand;
                var resultatRodes = document.getElementById("resultatRodes" + i);
                resultatRodes.innerHTML = "Roda" + i + ": Marca:" + car.wheels[i - 1].brand + ", Diàmetre:" + car.wheels[i - 1].diameter;
            }
        }
    }
}
/* if(roda1Diam >= 2 || roda1Diam <= 0.4 || roda2Diam >= 2 || roda2Diam <= 0.4 || roda3Diam >= 2 || roda3Diam <= 0.4 || roda4Diam >= 2 || roda4Diam <= 0.4){
     let resultatCotxe = <HTMLInputElement>document.getElementById("resultatCotxe");
     resultatCotxe.innerHTML = "";
     let resultatRodes1 = <HTMLInputElement>document.getElementById("resultatRodes1");
     resultatRodes1.innerHTML = "";
     let resultatRodes2 = <HTMLInputElement>document.getElementById("resultatRodes2");
     resultatRodes2.innerHTML = "";
     let resultatRodes3 = <HTMLInputElement>document.getElementById("resultatRodes3");
     resultatRodes3.innerHTML = "";
     let resultatRodes4 = <HTMLInputElement>document.getElementById("resultatRodes4");
     resultatRodes4.innerHTML ="";


     let resultat1 = <HTMLInputElement>document.getElementById("resultatError");
     resultat1.innerHTML = "Introdueix un diàmetre vàlid.";
     result.style.display = "block";  */
/* }else{
     car.wheels =[];
     console.log(car.wheels);
     car.addWheel(new Wheel(parseFloat((<HTMLInputElement>document.getElementById("diametre1")).value), (<HTMLInputElement>document.getElementById("marca1")).value));
     car.addWheel(new Wheel(parseFloat((<HTMLInputElement>document.getElementById("diametre2")).value), (<HTMLInputElement>document.getElementById("marca2")).value));
     car.addWheel(new Wheel(parseFloat((<HTMLInputElement>document.getElementById("diametre3")).value), (<HTMLInputElement>document.getElementById("marca3")).value));
     car.addWheel(new Wheel(parseFloat((<HTMLInputElement>document.getElementById("diametre4")).value), (<HTMLInputElement>document.getElementById("marca4")).value));
     console.log(car);
     result.style.display = "block";
     console.log(llistaCotxes[0]);
     let resultat1 = <HTMLInputElement>document.getElementById("resultatError");
     resultat1.innerHTML = "";
     let resultatCotxe = <HTMLInputElement>document.getElementById("resultatCotxe");
     resultatCotxe.innerHTML = "Plate: "+car.plate+",  Color: "+car.color+",  Brand: "+car.brand;
     let resultatRodes1 = <HTMLInputElement>document.getElementById("resultatRodes1");
     resultatRodes1.innerHTML = "Roda1: Marca:"+car.wheels[0].brand+ ", Diàmetre:"+car.wheels[0].diameter;
     let resultatRodes2 = <HTMLInputElement>document.getElementById("resultatRodes2");
     resultatRodes2.innerHTML ="Roda2: Marca:"+car.wheels[1].brand+ ", Diàmetre:"+car.wheels[1].diameter;
     let resultatRodes3 = <HTMLInputElement>document.getElementById("resultatRodes3");
     resultatRodes3.innerHTML ="Roda3: Marca:"+car.wheels[2].brand+ ", Diàmetre:"+car.wheels[2].diameter;
     let resultatRodes4 = <HTMLInputElement>document.getElementById("resultatRodes4");
     resultatRodes4.innerHTML ="Roda4: Marca:"+car.wheels[3].brand+ ", Diàmetre:"+car.wheels[3].diameter;
 }*/
