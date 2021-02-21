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


})