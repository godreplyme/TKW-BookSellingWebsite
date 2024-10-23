// slider
let countSlider=-1;
function rightSlider(){ 
     countSlider++;
    if(countSlider>3)
    {
        countSlider=0;
    } 
    document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');   
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,count){
       if(countSlider==count)
       {
        removeActive();
        dot.classList.add("active")
       }
    })
   clearInterval(timer)
   runslider()
}   
function leftSlider(){
   
    countSlider--;   
    if(countSlider<0)
    {
        countSlider=3;
    }
    document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,count){
       if(countSlider==count)
       {
        removeActive();
        dot.classList.add("active")
       }
    })
    clearInterval(timer)
    runslider()
} 
// hàm remove
function removeActive(){
    let unActive = document.querySelector(".active")
    unActive.classList.remove('active')
}

// chấm đen trong slider
document.addEventListener("DOMContentLoaded", function() {
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,countSlider){
        dot.addEventListener("click",function(){
            document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');
            removeActive()
            dot.classList.add('active')
            clearInterval(timer)
            runslider()
        })
    })
});
//product slider :))
var countSliderProduct=0;
function rightProduct(event){  
    event.target.parentElement.parentElement.querySelector(".products-container").style.right=countSliderProduct*20+('%');   
    countSliderProduct++; 
    if(countSliderProduct>10)
    {
        countSliderProduct=0;
    }
}   
function leftProduct(event){  
    event.target.parentElement.parentElement.querySelector(".products-container").style.right=countSliderProduct*20+('%');   
    countSliderProduct--; 
    if(countSliderProduct<0)
    {
        countSliderProduct=10;
    }
}

//slider auto 2s
let timer=null
let runslider=function(){
    timer=setInterval(function(){
    countSlider++;
    if(countSlider>3)
    {
        countSlider=0;
    } 
    document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');   
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,count){
       if(countSlider==count)
       {
        removeActive();
        dot.classList.add("active")
       }
    })
  },2000)
}
runslider()
// jQuery


// window.onload=function(){
//     let category=document.querySelectorAll(".category>li")
//     for(let cate of category)
//         cate.onmousemove=function(){
//             let d = document.getElementsByClassName("sub-category")
//         }
// }   

// Duyệt qua từng li con và thêm sự kiện hover menu
var categoryItems = document.querySelectorAll('.category > li');
categoryItems.forEach(item => {
  var subCategory = item.querySelector('.sub-category');

  item.addEventListener('mouseenter', function() {
    subCategory.style.display = 'block';
    document.querySelector(".advertisement-banner").style.display='none'
  });

  item.addEventListener('mouseleave', function() {
    subCategory.style.display = 'none';
    document.querySelector(".advertisement-banner").style.display='block'

  });
});


//Duyệt qua từng li con và thêm sự kiện click menu(mobile)
var mobileCateItem=document.querySelectorAll('.mobile-subcate > li')
mobileCateItem.forEach(item=>{
  var mobileCate=item.querySelector('.mobile-category-item')
  item.addEventListener('click',function(){
    mobileCate.style.display="block";
  })
})
//go to top button
const scrollToTopButton = document.getElementById("scrollToTopButton");
window.addEventListener("scroll", function(){
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
function goToTop(){
    var topTimer=setInterval(function(){
      document.documentElement.scrollTop-=20
      if(document.documentElement.scrollTop<=0){
        clearInterval(topTimer);
      }
      },1)
    }

// bật tắt mobile danh mục 
var mobilecate=document.querySelector(".mobile-category")
function mobileCateOn(){
    mobilecate.style.left=0;
    document.querySelector(".big-body").style.display="none"
}
function mobileCateOff(){
     mobilecate.style.left=-100+"%";
     document.querySelector(".big-body").style.display="block"

}
