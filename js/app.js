console.log("Hola mundo");
const toggle = document.querySelector(".toggle");
const openMenu = document.querySelector(".item.active");
const closeMenu = document.querySelector(".item");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

//openAndClose = () => {
//if(openMenu){
function show() {
  toggle.getElementsByClassName.diplay = "flex";
  toggle.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
