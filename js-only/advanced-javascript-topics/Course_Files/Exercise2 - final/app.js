
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

for (var prop in pres) {
    console.log(prop + "  " + typeof pres[prop]);
}
console.log("-----------OWN Properties__________");
for (var prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log(prop + "  " + typeof pres[prop]);
    }
}