let var1 = document.getElementById("contenido");
var1.style.color = "red";

let var2 = document.querySelector("div");
var2.style.color = "blue";

let var3 = document.querySelectorAll("div");
for (let key in var3) {
    var3[key].style.color = "purple";
}



