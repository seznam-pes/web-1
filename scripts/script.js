function pozdrav() {
    alert("Děkujeme, že sis zvolil naši kavárnu! 🥳");
}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-body");
}

function reserve() {
    var celejmeno = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var datumik = document.getElementById("datum").value;
    var casos = document.getElementById("cas").value;

    localStorage.setItem("jmeno_prijmeni", celejmeno);
    localStorage.setItem("email", mail);
    localStorage.setItem("datum", datumik);
    localStorage.setItem("cas", casos);
    alert("Rezervace byla úspěšně odeslána.");
}