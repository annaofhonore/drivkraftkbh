// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre
window.onscroll = function () {
    scrollFunction()
};


// Når brugeren scroller ned 80px fra toppen af siden, skal størrelsen på navigation og logo blive mindre. Desuden så skal der komme en baggrund på navigationen.
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#navbar").style.padding = "3px 10px";
        document.querySelector("#logo img").style.width = "75%";
        document.querySelector("#navbar").style.backgroundColor = "rgba(255, 255, 255, 0.21)";
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


//document.addEventListener("DOMContentLoaded", start);

//function start(){
//    console.log("start");
//    async function getJson() {
//        console.log("getJson")
//let url="http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/service"
//let jsonData = await fetch(url);
//indhold = await jsonData.json();
//        visServices(); 
//    }
//    
//    getJson();
//    
//    
//    function visServices() {
//        console.log("services");
//        console.log();
//        let dest = document.querySelector(".produkter-container");
//        let temp = document.querySelector("template");
//        services.forEach(service => {
//        
//            
//        
//        dest.lastElementChild.addEventListener("click", () => {
//                location.href = "services?titel=" + serivce.title.rendered
//            });
//    });    
//    
//    
//}
//}
