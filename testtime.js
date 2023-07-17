var d = new Date();
var currtime = d.getHours() * 100 + d.getMinutes();

// now your currtime looks like 530 if it's 5.30am, or 1730 if it's 5.30 pm
// you can just do a simple comparison between ints
console.log(d)
console.log(currtime)
if (currtime > 2000 && currtime < 800){
    // closed between 20:00 (8 pm) and 8:00 (8 am) as an example
    alert("We are closed");
}
else{
    console.log("diluar jangkauan");
}