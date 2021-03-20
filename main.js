// Slider
//selection the images
const imgSlideshow = document.querySelectorAll('.slide-container .slider-img');

//creating delay interval
const nextImgDelay = 2500;

//defining starting position
let currentImgCounter = 0;

//on page load, displaying the first image
imgSlideshow[currentImgCounter].style.opacity = "1";

setInterval(nextImg, nextImgDelay);
function nextImg() {
  imgSlideshow[currentImgCounter].style.opacity = "0";
  currentImgCounter = (currentImgCounter + 1) % imgSlideshow.length;
  imgSlideshow[currentImgCounter].style.opacity = "1";

}

//Projekti kartice
// let btn = document.getElementById('btn1');
// let box1 = document.getElementById('box1');

// btn.addEventListener('click', ()=>{
//   if (box1.style.display === 'none'){
//     box1.style.display = 'block';
//   } else {
//     box1.style.display = 'none';
//   }
// })

//Projekti kartice
document.getElementById('btn-one').addEventListener('click',function(){ 
    var box1 = document.getElementById('box-one');
    if (box1.style.display==='none')
    {
      box1.style.display = 'block';
    } else {
      box1.style.display = 'none';
    }
  })


document.getElementById('btn-two').addEventListener('click',function(){ 
    var box2 = document.getElementById('box-two');
    if (box2.style.display==='none')
    {
      box2.style.display = 'block';
    } else {
      box2.style.display = 'none';
    }
  })

  // document.getElementById('btnone').addEventListener('click',function(){ 
  //   var box1 = document.getElementById('boxone');
  //   if (box1.style.display==='none')
  //   {
  //     box1.style.display = 'block';
  //   } else {
  //     box1.style.display = 'none';
  //   }
  // })

  // document.getElementById('btnone').addEventListener('click',function(){ 
  //   var box1 = document.getElementById('boxone');
  //   if (box1.style.display==='none')
  //   {
  //     box1.style.display = 'block';
  //   } else {
  //     box1.style.display = 'none';
  //   }
  // })

