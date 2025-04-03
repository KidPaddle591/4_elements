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
            imgbtn.innerHTML=`
				${imgNext.outerHTML}
            `
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
            let img=document.getElementById("airImage"+index);
            let imgNext=document.getElementById("Image"+(index+1));
            let imgbtn=document.getElementById("airNext");
            allimg.forEach(function(element){
                element.classList.add("inactive");
            });
            img.classList.remove("inactive");
            imgbtn.innerHTML=`
            <a id="next" href="" role="button" data-slide="next">
				${imgNext.outerHTML}
			</a>
            `
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



