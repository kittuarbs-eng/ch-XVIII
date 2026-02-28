let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index){
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");

  if(index === 5){
    typeWriter();
  }
}

function nextPage(){
  if(current < pages.length-1){
    current++;
    showPage(current);
  }
}

function prevPage(){
  if(current > 0){
    current--;
    showPage(current);
  }
}

function playAudio(){
  document.getElementById("voice").play();
}

let text = "happiest 17th Birthday ÑÃZ¡Â";
let i = 0;

function typeWriter(){
  let element = document.getElementById("birthdayText");
  element.innerHTML = "";
  i = 0;
  let interval = setInterval(()=>{
    if(i < text.length){
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  },150);
}
