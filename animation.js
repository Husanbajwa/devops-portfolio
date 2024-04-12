function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const x = document.documentElement.scrollLeft || document.body.scrollLeft;
const y = document.documentElement.scrollTop || document.body.scrollTop;
console.log(`Horizontal scroll position: ${x}`);
console.log(`Vertical scroll position: ${y}`);

window.addEventListener("load", () => {
  const loader = document.querySelector("#page-loading");
  sleep(3000).then(() => loader.classList.add("loader--hidden"));
  // loader.addEventListener("transitionend", () => {
  //   document.body.removeChild(loader);
  // });
});
let box = document.getElementById('box');
let line1 = document.getElementById('line-expand-1');
let line2 = document.getElementById('line-expand-2');
let glevel1 = document.getElementById('glevel1');
let glevel2 = document.getElementById('glevel2');
let headline = document.getElementById('headline');
let effect1 = document.getElementById('effect1');
let effect2 = document.getElementById('effect2');
let profile = document.getElementById('section-on-top');


// let column = document.getElementById('column');

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  // gradiant level up
  if (value < 30) {
    glevel1.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(59,56,63,0) 0%, rgba(59,56,63,0) 100%)';
    glevel2.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(59,56,63,0) 0%, rgba(59,56,63,0) 100%)';
  }
  if (value > 30 && value < 500) {
    let glevel = (value / 4);
    glevel1.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + glevel + '%, rgba(59,56,63,0) 5%, rgba(59,56,63,0) 100%)';
  }
  if (value > 500) {
    glevel1.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%, rgba(59,56,63,0) 100%, rgba(59,56,63,0) 100%)';
  }
  if (value > 350) {
    let glevel = (value / 18);
    glevel2.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + glevel + '%, rgba(59,56,63,0) 5%, rgba(59,56,63,0) 100%)';
  }
  else {
    glevel2.style.background = '-webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(59,56,63,0) 5%, rgba(59,56,63,0) 100%)';
  }

  //height slide up 

  if (value >= 600 && value < 1400) {
    let height = (100 - ((value - 500) / 10));
    box.style.top = height + 'vh';
  }
  if (value > 1400) {
    box.style.top = 0 + 'vh';
  }



  if (value > 2700) {
    glevel1.style.opacity = (1 - ((value / 2500) * .8));
    glevel2.style.opacity = (1 - ((value / 2500) * .8));
  }
  else {
    glevel1.style.opacity = 1;
    glevel2.style.opacity = 1;
  }

  if (value > 1800) {
    line1.style.width = (value - 1800) * 2 + 2 + 'px';
    line2.style.width = (value - 1800) * 2 + 2 + 'px';
  }

  else {
    line1.style.width = 2 + 'px';
    line2.style.width = 2 + 'px';
  }

  if (value > 2500) {
    size = (value - 2500) * 2;
    effect1.style.width = size + 'px';
    effect1.style.height = size + 'px';
    effect1.style.top = "-" + size/2 + 'px';
    effect1.style.left = "-" + size/2 + 'px';
    effect2.style.right = "-" + size/2 + 'px';
    effect2.style.bottom = "-" + size/2 + 'px';
    effect1.style.borderRadius = 5000 + 'px';
    effect2.style.width = size + 'px';
    effect2.style.height = size + 'px';
    effect2.style.borderRadius = 5000 + 'px';
  }
  else {
    effect1.style.width = 0 + 'px';
    effect1.style.height = 0 + 'px';
    effect2.style.width = 0 + 'px';
    effect2.style.height = 0 + 'px';
  }
  if (value > 4200) {
    effect1.style.borderRadius = 0 + 'px';
    effect2.style.borderRadius = 0 + 'px';
  }


  if (value > 4500) {
    box.style.opacity = 0;
  }
  else {
    box.style.opacity = 1;
  }

  if (value > 3500) {
    profile.style.opacity = (value - 3500) / 300;
  }
  if (value < 3500) {
    profile.style.opacity = 0;
  }
  if (value > 4700) {
    profile.style.opacity = 1 - (value - 4700) / 300;
  }
  if (value > 4950) {
    profile.style.opacity = 0;

  }



// scroller 
  if(value > 4500 ){
    document.getElementById("b1").classList.remove("show");
    document.getElementById("b2").classList.add("show");
  } else if (value < 4500) {
    document.getElementById("b1").classList.add("show");
    document.getElementById("b2").classList.remove("show");
  } else {
    document.getElementById("b1").classList.remove("show");
    document.getElementById("b2").classList.remove("show");
  }

});




const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 85) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});




function scrollToValue(scrollValue) {
  // Scroll smoothly to the specified value
  window.scrollTo({
    top: scrollValue,
    behavior: 'smooth'
  });
}


