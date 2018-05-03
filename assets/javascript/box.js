var inner = document.querySelectorAll(".in");
var colours = ["rgba(115, 130, 33, 0.5)", "rgba(156, 156, 156, 0.089)","rgba(156, 156, 156, 0.089)",]
var bg = document.querySelector(".contain");
text = document.querySelector(".inner-text");

var idKey = {
  a:{
    id:"a",
    color:"rgba(195, 100, 144, 0.356)",
    img:"url(assets/img/left-black.jpeg)",

  },
  b:{
    id:"b",
    color:"rgba(200, 134, 86, 0.5)",
    img:"url(assets/img/left-woman.jpeg)",


  },
  c:{
    id:"c",
    color:"rgba(151, 232, 154, 0.5)",
    img:"url(assets/img/right-black.jpeg)",
    
  },
  d:{
    id:"d",
    color:"rgba(151, 194, 240, 0.5)",
    img:"url(assets/img/right-white.jpeg)",

  }
}

defaultColours()
v2()


function v2(){
  for(i = 0; i < inner.length;i++){
    inner[i].addEventListener("mouseover", function(){
      defaultColours()
      // Sets rest of boxes to selected colour
      if(this.id == idKey[this.id].id){
        // Change to specified background image
        this.style.background=idKey[this.id].color;
        bg.style.backgroundImage=idKey[this.id].img;
        bg.style.transition="0.8s";
        // Change text colour on certain backgrounds
      }
    })
  }
}

function defaultColours() {
  for(i = 0; i < inner.length ;i++){
    inner[i].style.transition="0.2s"
    inner[i].style.background="rgba(253, 253, 253, 0.514)"
  }
}
