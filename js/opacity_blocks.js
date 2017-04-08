(function(){
	var opacity_block = document.querySelectorAll('.opacity_block');
for(let i in opacity_block){
    
 opacity_block[i].classList.add('hidden_block');
    
	if(getCoords(opacity_block[i]).top <=100){ opacity_block[i].classList.add('visible_block');} 
	document.addEventListener('scroll',()=>{
		 
		 if(getCoords(opacity_block[i]).top-400 <= document.body.scrollTop){
			 opacity_block[i].classList.add('visible_block');
		 }
});
	
}
function getCoords(elem) {  
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: top,
    left: left
  };
}	
}());