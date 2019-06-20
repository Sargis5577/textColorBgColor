document.body.addEventListener("keyup",function(){
  applyStyles()
})
button.addEventListener("click",function(e){
  var url = '/' + bgColor.value + '/' + fColor.value + '/' + fSize.value;
  history.pushState({
      bgColor : bgColor.value,
      fColor : fColor.value,
      fSize : fSize.value
  },'new item',url)
})
window.addEventListener("popstate",function(e){
  var state = e.state;

  bgColor.value = state.bgColor;
  fColor.value = state.fColor;
  fSize.value = state.fSize

  applyStyles()
})
function applyStyles(){
  content.style.backgroundColor = bgColor.value;
  content.style.color = fColor.value;
  content.style.fontSize = fSize.value
}
