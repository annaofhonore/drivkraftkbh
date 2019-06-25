document.addEventListener("DOMContentLoaded", start);
let yoga = [];
function start(){
    
    
    console.log(document.querySelector("source"));
    
   

async function getJsonYoga() {
      console.log("getJson")
      let url="http://oliviahonore.dk/drivkraftkbh/wordpress/wp-json/wp/v2/yoga"
      let jsonData = await fetch(url);
      yoga = await jsonData.json();
      visYin();
    visAshtanga(); 
    visHatha();
    visYogaUdstyr();
}

 getJsonYoga();
    
     function visYin() {
         console.log(yoga);
         document.querySelector(".yin .img").style.backgroundImage = `url(${yoga[3].billede.guid})`;
         document.querySelector(".yin h1").textContent = yoga[3].title.rendered;
         document.querySelector(".yin .p").innerHTML = yoga[3].content.rendered;
    }
    
    function visAshtanga() {
         console.log(yoga);
         document.querySelector(".ashtanga .img").style.backgroundImage = `url(${yoga[2].billede.guid})`;
         document.querySelector(".ashtanga h1").textContent = yoga[2].title.rendered;
         document.querySelector(".ashtanga .p").innerHTML = yoga[2].content.rendered;
    }
    
    
    function visHatha() {
         console.log(yoga);
         document.querySelector(".hatha .img").style.backgroundImage = `url(${yoga[1].billede.guid})`;
         document.querySelector(".hatha h1").textContent = yoga[1].title.rendered;
         document.querySelector(".hatha .p").innerHTML = yoga[1].content.rendered;
    }
    
    function visYogaUdstyr() {
         console.log(yoga);
         document.querySelector(".yoga_udstyr .img").style.backgroundImage = `url(${yoga[0].billede.guid})`;
         document.querySelector(".yoga_udstyr h1").textContent = yoga[0].title.rendered;
         document.querySelector(".yoga_udstyr .p").innerHTML = yoga[0].content.rendered;
    }
    
}
