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

function start(){
    console.log("start");
    async function getJson() {
        console.log("getJson")
let url="http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/service"
let jsonData = await fetch(url);
indhold = await jsonData.json();
        visServices(); 
    }
    
    getJson();
    
    
    function visServices() {
        console.log("services");
        console.log(shop);
        let dest = document.querySelector(".produkter-container");
        let temp = document.querySelector("template");
        services.forEach(service => {
        
            
        
        dest.lastElementChild.addEventListener("click", () => {
                location.href = "services?titel=" + serivce.title.rendered
            });
    }
    
    
    
}