const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if(currentScroll > 200){
    header.classList.add("sticky-header");
  }else if(currentScroll < 200){
    header.classList.remove("sticky-header");
  }
});

// header respornsive icon 

document.querySelector(".respornsive-header-menus i").addEventListener("click",()=>{
  document.querySelector(".respornsive-header-menus i").classList.toggle("icon-click");
  document.querySelector(".menu").classList.toggle("menu-anima");
});

