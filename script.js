var btnhome = document.querySelector("#btnhome");
var btnExperience=document.querySelector("#btnExperience");
var btngraphic = document.querySelector("#btnDesign");
var contactbtn = document.querySelector("#contactbtn");

var designDisplay = document.querySelector("#designDisplay");
var experience = document.getElementById("experience");
var contactDisplay = document.querySelector("#contactDisplay");







function display(){
    designDisplay.classList.add("display");
    experience.classList.add("display");
    contactDisplay.classList.add("display");
}

function active(){
    btnhome.classList.remove("active");
    contactbtn.classList.remove("active");
    btngraphic.classList.remove("active");
    btnExperience.classList.remove("active");
}

function onloadfunction(){
    active();
    display()
    btngraphic.classList.add("active");
    designDisplay.classList.remove("display");

}
// experience.style.display="none";

btnhome.addEventListener("click", function(){
    active();
    display()
    btnhome.classList.add("active");
    

});

btngraphic.addEventListener("click", function(){
    active();
    display();
    this.classList.add("active");
    designDisplay.classList.remove("display");
});

btnExperience.addEventListener("click",function(){
    active();
    display();
    this.classList.add("active");
    experience.classList.remove("display");

});
contactbtn.addEventListener("click",function(){
    active();
    display();
    this.classList.add("active");
    contactDisplay.classList.remove("display");

})

document.querySelector("#spnvideo").addEventListener("click", function(){
    this.classList.toggle("display");
    document.querySelector("#spngraphic").classList.toggle("display");
    document.querySelector("#graphicWorks").classList.toggle("display");
    document.querySelector("#videoEdited").classList.toggle("display");
});
document.querySelector("#spngraphic").addEventListener("click", function(){
    this.classList.toggle("display");
    document.querySelector("#spnvideo").classList.toggle("display");
    document.querySelector("#videoEdited").classList.toggle("display");
    document.querySelector("#graphicWorks").classList.toggle("display");
});