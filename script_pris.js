document.addEventListener("DOMContentLoaded", start);
let person = [];
function start(){
    
    
    console.log(document.querySelector("source"));
    
   

async function getJsonPerson() {
      console.log("getJson")
      let url="http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/team"
      let jsonData = await fetch(url);
      person = await jsonData.json();
      visPerson(); 
}

 getJsonPerson();
    
     function visPerson() {
       let dest = document.querySelector(".priser-container");
        let temp = document.querySelector(".pris-temp");
        person.forEach(person => {
            if(person.behandler == "1") {
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
