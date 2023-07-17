var today = new Date();
var jam = today.getHours();
var hari = today.getDay();
var operationaltime;
// Membuat batasan jam
var bat_jam1 = jam>=9 && jam<=18;
var bat_jam2 = jam>=9 && jam<=15;

// Membuat batasan hari senin - sabtu
var bat_hari = hari>=1 && hari<=6;

if(bat_jam1== "True" && bat_hari==True){
    operationaltime="True";
    console.log("Hari Kerja : " + operationaltime);
}
else if(bat_jam2=="True" && hari==7){
    operationaltime="True";
    console.log("Hari Libur = True");
}
else{
    operationaltime="False";
    console.log("Waktu Operational : " + operationaltime);
}