//when updating this script, please remember to minify and url encode
//this script and add it to the anchor in the index.html document
(function docheck(){
  function ku(e){
    is = document.getElementsByTagName('input');
    for(i=0; i<is.length; i++){
      if(is[i].attributes.getNamedItem('type').value=='checkbox'){
        switch (e.keyCode){
          case 84:
            is[i].checked=!is[i].checked;
            window.removeEventListener('keyup', ku, false);
            break;
          case 67: case 65: case 89:
            is[i].checked=true;
            window.removeEventListener('keyup', ku, false);
            break;
          case 85: case 78:
            is[i].checked=false;
            window.removeEventListener('keyup', ku, false);
            break;
        }
      }
    }
  }
  window.addEventListener('keyup', ku, false);
})();