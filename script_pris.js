// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre
window.onscroll = function () {
    scrollFunction()
};


// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre. Desuden så skal der komme en baggrund på navigationen.
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#navbar").style.padding = "3px 10px";
        document.querySelector("#logo img").style.width = "75%";
        document.querySelector("#navbar").style.backgroundColor = "rgba(31, 31, 31, 0.91)";
        document.querySelector("#mobile-button").style.top = "1vw";
        document.querySelector("#mobile-nav").style.top = "3.4rem";
    } else {
        //Hvis man scroller til toppen igen, skal logo og navigation blive store igen, og baggrunden fjernes.
        document.querySelector("#navbar").style.padding = "20px 10px";
        document.querySelector("#logo img").style.width = "100%";
        document.querySelector("#navbar").style.backgroundColor = "";
        document.querySelector("#mobile-button").style.top = "6vw";
        document.querySelector("#mobile-nav").style.top = "5rem";
    }


}




document.addEventListener("DOMContentLoaded", start);
let person = [];

function start() {


    console.log(document.querySelector("source"));



    async function getJsonPerson() {
        console.log("getJson")
        let url = "http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/team"
        let jsonData = await fetch(url);
        person = await jsonData.json();
        visPerson();
    }

    getJsonPerson();

    function visPerson() {
        let dest = document.querySelector(".priser-container");
        let temp = document.querySelector(".pris-temp");
        person.forEach(person => {
            if (person.behandler == "1") {
                let klon = temp.cloneNode(!0).content;
                klon.querySelector(".img").style.backgroundImage = `url(${person.billede.guid})`;
                klon.querySelector(".behandler h4").innerHTML = person.title.rendered;
                klon.querySelector(".behandler .beskrivelse").innerHTML = person.beskrivelse;
                klon.querySelector(".behandler .mail").innerHTML = person.email;
                klon.querySelector(".behandler .tlf").innerHTML = person.tlf;
                klon.querySelector(".behandler .pris").innerHTML = person.pris;
                dest.appendChild(klon);
            }
        });
    }


}
