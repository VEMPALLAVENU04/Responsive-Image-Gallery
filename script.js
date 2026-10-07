const images=document.querySelectorAll(".gallery img");

const lightbox=document.querySelector(".lightbox");

const lightImg=document.querySelector(".lightbox-img");

const close=document.querySelector(".close");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let current=0;

// Open Lightbox

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

showImage();

lightbox.style.display="flex";

});

});

// Show Image

function showImage(){

lightImg.src=images[current].src;

}

// Close

close.onclick=()=>{

lightbox.style.display="none";

}

// Next

next.onclick=()=>{

current++;

if(current>=images.length){

current=0;

}

showImage();

}

// Previous

prev.onclick=()=>{

current--;

if(current<0){

current=images.length-1;

}

showImage();

}


// Close Outside

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});


// FILTERS

const buttons=document.querySelectorAll(".buttons button");

const galleryImages=document.querySelectorAll(".image");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

galleryImages.forEach(image=>{

if(filter==="all"){

image.style.display="block";

}

else if(image.classList.contains(filter)){

image.style.display="block";

}

else{

image.style.display="none";

}

});

});

});