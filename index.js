let downloadIcon = document.getElementById("download-icon");
downloadIcon.addEventListener("click", () => {
let doc = new jsPDF();

    for (let i = 0; i < reclamos.length; i++) {
    doc.setFontSize(16);
    let nombre = "Nombre: " + reclamos[i].Nombre;
    let email = "Email: " + reclamos[i].Email;
    let reclamo = "Reclamo: " + reclamos[i].Reclamo;

    doc.text(nombre, 20, (i * 70) + 20);
    doc.text(email, 20, (i * 70) + 30);
    let reclamoLines = doc.splitTextToSize(reclamo, 170);
    doc.setFontSize(12);
    for (let j = 0; j < reclamoLines.length; j++) {
      doc.text(reclamoLines[j], 20, (i * 70) + 40 + (j * 10));
    }
}
doc.save("Reclamo.pdf");
});


let reclamos = [];

function guardarReclamo() {
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let reclamo = document.getElementById("reclamo").value;

reclamos.push({
    Nombre: nombre,
    Email: email,
    Reclamo: reclamo
});

console.log(reclamos);

document.getElementById("mensaje").style.display = "block";
setTimeout(function() {
    document.getElementById("mensaje").style.display = "none";
}, 1000);
}


// boton agregar al carrito
let contador = 0;

function mostrarMensaje() {
    document.getElementById("mensaje").style.display = "block";
    setTimeout(function() {
        document.getElementById("mensaje").style.display = "none";
    }, 1000);
}

// Completar si o si los campos

function enviarReclamo() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var reclamo = document.getElementById("reclamo").value;

    if (nombre && email && reclamo) {
    guardarReclamo();
    } else {
    var divRechazo = document.getElementById("rechazo");
    divRechazo.innerHTML = "Completa todos los Campos";
    divRechazo.style.display = "block";
    setTimeout(function() {
        divRechazo.style.display = "none";
    }, 1000);
    }
}
