var position = 1,
    max = 5,
    min = 1;
var models = ["Dacia Logan","Clio 4","Ford fiesta","Peugeot 308","Kia Picanto"];
var carbur = ["Carburant : DIESEL","Carburant : DIESEL","Carburant : ESSENCE","Carburant : DIESEL","Carburant : ESSENCE"];
var clima = ["Climatisation : NON","Climatisation : OUI","Climatisation : OUI","Climatisation : OUI","Climatisation : NON"];
var price = ["Prix : à Partir de 249Dh / Jour","Prix : à Partir de 299Dh / Jour","Prix : à Partir de 349Dh / Jour","Prix : à Partir de 399Dh / Jour","Prix : à Partir de 199Dh / Jour"];
function slide(parametre){
    if(parametre == true){
        if(position < max){
            position = position + 1;
            // 
            changeData();
        }
        else if(position == max){
            position = 1;
            // 
            changeData();
        }
    }
    if(parametre == false){
        if(position > min){
            position = position - 1;
            // 
            changeData();
        }
        else if(position == min){
            position = 5;
            // 
            changeData();
        }
    }
}
// 
function changeData(){
    document.getElementsByClassName('aside1')[0].style = "background-image: url('img/car"+position+".png');";
    document.getElementById('carModel').innerText = models[position-1];
    document.getElementById('carburant').innerText = carbur[position-1];
    document.getElementById('climatisation').innerText = clima[position-1];
    document.getElementById('price').innerText = price[position-1];
}

// INSCRIPTION

function validation(){
    var lettre = /^[A-Za-z0-9]+$/,
        username = document.getElementById("username").value;
    if (lettre.test(username)== true && (username.length>=4 && username.length<=20)){
        alert("le nom d'utulisateur est valide")
    }
    else{
        if (lettre.test(username)== false){
            alert("tu doit respecter la forme ecrire seulement les lettres et les chiffres sans espaces");
        }
        else{
            alert("tu doit respecter la forme de nom d'utulisateur .. ecrire entre 4 et 20 caractères");
        }
    }
}

function confirmation(){
    validation();
    var password = document.getElementById("password").value,
        confirmPassword = document.getElementById("confirm-password").value;
    
    if ( password.length < 6 ){
        alert("le mot de passe il doit comporte au moins 6 caractères")
    }
    else{
        if ( password == confirmPassword ) {
            alert("votre mot de passe et confirmation de mot de passe est correct");
        }
        else{
            alert("votre mot de passe et confirmation de mot de passe n'est pas correct")
        }
    }
}

function href()
{
    sessionStorage.setItem("pos",position);
    window.location.href="html/reservation.html";
}

function afficherCar()
{
    position=sessionStorage.getItem("pos");
    document.getElementsByClassName('image-reservation')[0].style = "background-image: url('../img/car"+position+".png');";
    document.getElementsByClassName('voiture')[0].style = "background-image: url('../img/car"+position+".png');";
 }

// VALIDATION

    var c = 0;
function valider(){
    var lettreName = /^[A-Za-z]+ [A-Za-z]+$/;
    var name = document.getElementById("name").value;
    let nowDate = new Date(Date.now());
    var dateBirth = new Date(document.getElementById('naissance').value);
    var thisYear = nowDate.getFullYear();
    var yearOfBirth = dateBirth.getFullYear();
    var age = thisYear - yearOfBirth;
    var firstDat = new Date(document.getElementById('date1').value);
    var lastDat = new Date(document.getElementById('date2').value);
    // var firstDay = firstDat.getDate();
    // var lastDay = lastDat.getDate();
    var periode = (lastDat - firstDat) / (3600*1000*24);
    var persons = document.getElementById('pet-select').value;

    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-age').innerText = age;
    document.getElementById('popup-periode').innerText = periode;
    document.getElementById('popup-personne').innerText = persons;
    

    if(lettreName.test(name) == false || (name.length<7)){
        alert("écrire votre nom et prénom complete")
    }else if(document.getElementById('naissance').value == ""){
        alert("écrire votre date de naissance complete")
    }else if(document.getElementById('date1').value == ""){
        alert("écrire la date de départ compléte")
    }
    else if(document.getElementById('date1').value == ""){
        alert("écrire votre date de retour compléte")
    }
    else if(periode<=0){
        alert("erreur date")
    }
    else{
        if(c == 0){
            document.getElementById('popup-id').style.display = "flex";
            c = 1;
        }else{
            document.getElementById("popup-id").style.display = "none";
            c = 0;
        }
    }

    

}
