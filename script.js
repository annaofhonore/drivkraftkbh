// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre
window.onscroll = function () {
    scrollFunction()
};


// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre. Desuden så skal der komme en baggrund på navigationen.
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#navbar").style.padding = "3px 10px";
        document.querySelector("#logo img").style.width = "75%";
        document.querySelector("#navbar").style.backgroundColor = "rgba(234, 234, 234, 0.91)";

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

document.querySelector("#mobile-button").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector("#mobile-nav").classList.toggle("hidden");
    let hideNav = document.querySelector("#mobile-nav").classList.contains("hidden");
    if (hideNav == true) {
        document.querySelector("#mobile-button").innerHTML = "&#9776;";
    } else {
        document.querySelector("#mobile-button").innerHTML = "&times;";
    }
}


document.addEventListener("DOMContentLoaded", start);
let splash;
let services = [];
let about;
let team = [];
let navn = "Olivia"

function start() {


    console.log(document.querySelector("source"));



    async function getJsonSplash() {
        console.log("getJson")
        let url = "http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/forside"
        let jsonData = await fetch(url);
        splash = await jsonData.json();
        visSplash();
    }

    getJsonSplash();

    function visSplash() {
        console.log(splash[0].splash_video.guid)
        document.querySelector("video").src = splash[0].splash_video.guid;
        document.querySelector(".splash-content h1").textContent = splash[0].splash_tekst;
    }

    async function getJson() {
        console.log("getJson")
        let url = "http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/service"
        let jsonData = await fetch(url);
        services = await jsonData.json();
        visServices();
    }

    getJson();


    function visServices() {
        console.log("services");
        console.log();
        let dest = document.querySelector(".services-container");
        let temp = document.querySelector(".service-temp");
        services.forEach(service => {
            let klon = temp.cloneNode(!0).content;
            klon.querySelector(".bg").style.backgroundImage = `url(${service.billede.guid})`;
            klon.querySelector(".service h1").innerHTML = service.title.rendered;
            dest.appendChild(klon);


            dest.lastElementChild.addEventListener("click", () => {
                location.href = "services?titel=" + serivce.title.rendered
            });
        });
    }


    async function getJsonAbout() {
        console.log("getJson")
        let url = "http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/forside"
        let jsonData = await fetch(url);
        about = await jsonData.json();
        hvadErDrivkraf();
    }

    getJsonAbout();


    function hvadErDrivkraf() {
        console.log(about);
        document.querySelector(".tekst").innerHTML = about[0].hvad_er_drivkraft;


    }


    async function getJsonTeam() {
        console.log("getJson")
        let url = "http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/team"
        let jsonData = await fetch(url);
        team = await jsonData.json();
        visTeam();
    }

    getJsonTeam();


    function visTeam() {
        let dest = document.querySelector(".team-container");
        let temp = document.querySelector(".team");
        team.forEach(member => {
            let klon = temp.cloneNode(!0).content;
            klon.querySelector(".img").style.backgroundImage = `url(${member.billede.guid})`;
            klon.querySelector("h4").innerHTML = member.title.rendered;
            klon.querySelector("p").innerHTML = member.beskrivelse;
            dest.appendChild(klon);


            dest.lastElementChild.addEventListener("click", () => {
                location.href = "team.html?navn=" + member.title.rendered;
            });
        });


    }

}
