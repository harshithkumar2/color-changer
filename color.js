var i =0;
function change(){

  var bod = document.getElementById('body');
  color = ['#e7a1a1','green','blue','black','yellow','orange'];
  bod.style.backgroundColor = color[i];
  i = i + 1;
  if (i >= color.length ){
    i = 0;
  }
}
