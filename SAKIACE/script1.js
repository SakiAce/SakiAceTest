var alliphonesImg = ['pink','blue', 'xrpink', 'xrblue'];
var productcolors = document.querySelector('.productcolors img');
var allColors = document.querySelectorAll('.allColors li');
var selectedValue = document.querySelectorAll('.selectedValue');

allColors.forEach(colors => colors.addEventListener('click',function(elem){
    
   for(var i = 0; i < allColors.length; i++){
       allColors[i].classList.remove('active');
       selectedValue[i].classList.remove('active');
   }
    
    if(this.className === 'pink'&& 'xrblue'){
        productcolors.src = 'img/'+alliphonesImg[3]+'.png';
    }
if(this.className === 'black'){
        productcolors.src = 'img/'+alliphonesImg[1]+'.png';
    }
}))
