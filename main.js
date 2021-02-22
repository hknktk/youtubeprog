document.addEventListener('DOMContentLoaded',function(){

const $slide   = document.getElementById("slideMenu");
const $menuButton   = document.getElementById("menuButton");
const $mask   = document.getElementById("mask");
const $topBar   = document.getElementById("topBar");



document.getElementById("menuButton").addEventListener("click",function(){
  $menuButton.classList.toggle("active");
  $slide.classList.toggle("active");
  $mask.classList.toggle("active"); 
})

document.getElementById("mask").addEventListener("click",function(){
  $menuButton.classList.toggle("active");
  $mask.classList.toggle("active");
  $slide.classList.toggle("active");
})

  
document.getElementById("slideList").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $mask.classList.toggle("active");
    $slide.classList.toggle("active");
  })



  const targetElement = document.querySelectorAll(".text");
  document.addEventListener("scroll", function(){
  for (let i = 0; i<targetElement.length; i++){
    const getElementDistance =targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

  const targetElement2 = document.querySelectorAll(".detail>h2");
  document.addEventListener("scroll", function(){
  for (let i = 0; i<targetElement2.length; i++){
    const getElementDistance =targetElement2[i].
    getBoundingClientRect().top + targetElement2[i].clientHeight * .9
    if(window.innerHeight > getElementDistance){
      targetElement2[i].classList.add("show");
    }
  }
})


})