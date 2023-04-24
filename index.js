window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 150) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });


const toggleDark = document.getElementById("dark-theme");
const body = document.querySelector("body");

toggleDark.addEventListener("click", function (){
  body.classList.toggle("dark-body")
})



