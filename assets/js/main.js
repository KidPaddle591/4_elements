let index = 0
let previous = document.getElementById("previous");
let next = document.getElementById("next");


//carousel feu
function carouselFeu(index){
    let allimg=document.querySelectorAll(".feuCarousel-item");
    for (i=0;i<allimg.length;i++){
        if (index===i){
            let img=document.getElementById("divfeuImage"+index);
            let imgNext=document.getElementById("feuImage"+(index+1));
            let imgbtn=document.getElementById("feuNext");
            allimg.forEach(function(element){
                element.classList.add("inactive");
            });
            img.classList.remove("inactive");
            let clone=imgNext.cloneNode(true)
            clone.removeAttribute("id");
            clone.classList.add("img-item");
            imgbtn.appendChild(clone)
        }
    }
}

carouselFeu(0);

feuNext.addEventListener("click", function(e){
    e.preventDefault();
    index++;
    carouselFeu(index);
    if (index>4){
        index=0;
        carouselFeu(0);
    }else {};
})

//carousel air
function carouselAir(index){
    let allimg=document.querySelectorAll(".airCarousel-item");
    for (i=0;i<allimg.length;i++){
        if (index===i){
            let img=document.getElementById("divairImage"+index);
            let imgNext=document.getElementById("airImage"+(index+1));
            let imgbtn=document.getElementById("airNext");
            allimg.forEach(function(element){
                element.classList.add("inactive");
            });
            img.classList.remove("inactive");
            let clone=imgNext.cloneNode(true)
            clone.removeAttribute("id");
            clone.classList.add("img-item");
            imgbtn.appendChild(clone);
        }
    }
}

carouselAir(0);

airNext.addEventListener("click", function(e){
    e.preventDefault();
    index++;
    carouselAir(index);
    if (index>4){
        index=0;
        carouselAir(0);
    }else {};
})

//carousel terre
function carouselTerre(index){
    let allimg=document.querySelectorAll(".terreCarousel-item");
    for (i=0;i<allimg.length;i++){
        if (index===i){
            let img=document.getElementById("divterreImage"+index);
            let imgNext=document.getElementById("terreImage"+(index+1));
            let imgbtn=document.getElementById("terreNext");
            allimg.forEach(function(element){
                element.classList.add("inactive");
            });
            img.classList.remove("inactive");
            let clone=imgNext.cloneNode(true)
            clone.removeAttribute("id");
            clone.classList.add("img-item");
            imgbtn.appendChild(clone)
        }
    }
}

carouselTerre(0);

terreNext.addEventListener("click", function(e){
    e.preventDefault();
    index++;
    carouselTerre(index);
    if (index>4){
        index=0;
        carouselTerre(0);
    }else {};
})

//carousel Eau
function carouselEau(index){
    let allimg=document.querySelectorAll(".eauCarousel-item");
    for (i=0;i<allimg.length;i++){
        if (index===i){
            let img=document.getElementById("diveauImage"+index);
            let imgNext=document.getElementById("eauImage"+(index+1));
            let imgbtn=document.getElementById("eauNext");
            allimg.forEach(function(element){
                element.classList.add("inactive");
            });
            img.classList.remove("inactive");
            let clone=imgNext.cloneNode(true)
            clone.removeAttribute("id");
            clone.classList.add("img-item");
            imgbtn.appendChild(clone)
        }
    }
}

carouselEau(0);

eauNext.addEventListener("click", function(e){
    e.preventDefault();
    index++;
    carouselEau(index);
    if (index>4){
        index=0;
        carouselEau(0);
    }else {};
})

// MODAL
//function displayModal(){
    //document.getElementById("modalIndex").classList.remove("hidden")
//}


