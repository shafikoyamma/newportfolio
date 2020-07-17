var btnhome = document.querySelector("#btnhome");
var btnExperience=document.querySelector("#btnExperience");
var btngraphic = document.querySelector("#btnDesign");
var btnVideo = document.querySelector("#btnVideo")
// var contactbtn = document.querySelector("#contactbtn");

var designDisplay = document.querySelector("#designDisplay");
var videoDisplay = document.querySelector("#videoDisplay")
// var experience = document.getElementById("experience");
// var contactDisplay = document.querySelector("#contactDisplay");
var imgnum = 0;

function imgsloop(){
    if (imgnum === 0){
        for(var num = 1; num <= 31; num++){
            var graphicimgs = document.querySelector('#graphicimgs');
        
            var n = num.toString();
            var innerhtmlGraphicimg = '<div class="grimg col-md-3 col-6"><img class="img" src="graphicWorksimg/img selected/'+n+'.png" alt=""></div>'
            graphicimgs.innerHTML = graphicimgs.innerHTML + innerhtmlGraphicimg;
        }

    }

}



function display(){
    designDisplay.classList.add("display");
    videoDisplay.classList.add("display");
    // experience.classList.add("display");
    // contactDisplay.classList.add("display");
}

function active(){
    btnhome.classList.remove("active");
    // contactbtn.classList.remove("active");
    btngraphic.classList.remove("active");
    btnVideo.classList.remove("active")
    // btnExperience.classList.remove("active");
}

function onloadfunction(){

    // imgnum = 1;

 
    active();
    display();
    designDisplay.classList.remove("display");
    btngraphic.classList.add("active");
    imgsloop();
    
    
}
// experience.style.display="none";

// btnhome.addEventListener("click", onloadfunction);

btngraphic.addEventListener("click", function(){
    active();
    display();
    this.classList.add("active");
    designDisplay.classList.remove("display");
});

btnVideo.addEventListener("click", function(){
    active();
    display();
    this.classList.add("active");
    videoDisplay.classList.remove("display");
})




document.querySelector("#spnvideo").addEventListener("click", function(){
    document.querySelector("#spnvideo").classList.add("display");
    document.querySelector("#spngraphic").classList.remove("display");
    document.querySelector("#graphicWorks").classList.toggle("display");
    document.querySelector("#videoEdited").classList.toggle("display");


});
document.querySelector("#spngraphic").addEventListener("click", function(){
    document.querySelector("#spngraphic").classList.toggle("display");
    document.querySelector("#spnvideo").classList.toggle("display");
    document.querySelector("#videoEdited").classList.toggle("display");
    document.querySelector("#graphicWorks").classList.toggle("display");
});


// console.log(graphicimgs.innerHTML);


// for(var num = 1; num <= 31; num++){
//     var graphicimgs = document.querySelector('#graphicimgs');

//     var n = num.toString();
//     var innerhtmlGraphicimg = '<div class="grimg col-md-3 col-6"><img class="img" src="graphicWorksimg/img selected/'+n+'.png" alt=""></div>'
//     graphicimgs.innerHTML = graphicimgs.innerHTML + innerhtmlGraphicimg;
// }

// graphicimgs.innerHTML = innerhtmlGraphicimg;


// graphicimgs.innerHTML = graphicimgs.innerHTML + innerhtmlGraphicimg;
// graphicimgs.innerHTML = graphicimgs.innerHTML + innerhtmlGraphicimg;
