var usia = document.querySelector(".usia");
var tinggi = document.querySelector(".tinggi-badan");
var berat = document.querySelector(".berat-badan");
var hitung = document.querySelector(".hitung");
var hasil1 = document.querySelector(".hasil1");
var hasil2 = document.querySelector(".hasil2");
var keterangan = document.querySelector(".keterangan");
var BMI, tinggibadan, beratbadan;
const shows = document.getElementById("show");
const shows1 = document.getElementById("show-1");
const shows2 = document.getElementById("show-2");
const normal = document.getElementById("normal");
const kurang = document.getElementById("kurang");
const lebih = document.getElementById("lebih");
const obes = document.getElementById("obes");


hitung.addEventListener("click", ()=>{
    
    tinggibadan = tinggi.value/100;
    beratbadan = berat.value;
    BMI = beratbadan/(tinggibadan**2); 
    hasil2.innerText = BMI.toFixed(1);

    if(BMI < 18.5){
        hasil1.innerText = "Berat Badan Kurang"; 
        keterangan.innerText = "Anda kekurangan berat badan";   
        show.style.display = "block";
        shows2.style.display = "block";
        kurang.style.display = "block";
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        hasil1.innerText = "Berat Badan Normal"; 
        keterangan.innerText = "Anda memiliki berat badan ideal";
        show.style.display = "block";
        normal.style.display = "block";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        hasil1.innerText = "Berat Badan Lebih"; 
        keterangan.innerText = "Anda kelebihan berat badan";
        show.style.display = "block";
        shows1.style.display = "block";
        lebih.style.display = "block";
    }else{
        hasil1.innerText = "Berat Badan Berlebih"; 
        keterangan.innerText = "Anda berada dalam kategori obesitas";
        show.style.display = "block";
        shows1.style.display = "block";
        obes.style.display = "block";
    }
    
});

  event.preventDefault();