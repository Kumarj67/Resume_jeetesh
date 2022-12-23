// var scrollInterbal=setInterval(function(){
//     window.scrollBy(0,50);
// },50)
// clearInterval(scrollInterbal)
// var targetPosition=1000;
// var currentPosition=0;
// var scrollInterbal=setInterval(function(){
//     if(currentPosition>=targetPosition){
//         clearInterval(scrollInterbal)
//         return
//     }
//     currentPosition+=50;
//     window.scrollBy(0,50)
// },50)
// var educationSection=document.getElementById('education');
// var coordinates=educationSection.getBoundingClientRect();
// coordinates

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a')
var interval;
console.log(navMenuAnchorTags)
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
         event.preventDefault();
         var targetSectionID=this.textContent.trim().toLowerCase();
         var targetSection=document.getElementById(targetSectionID)
         console.log(targetSection);
         
          interval=setInterval(scrollVertically,50,targetSection);
    });
}
function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect()
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,70)
}




























