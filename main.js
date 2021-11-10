function createElement(type, ...classes) {
    let element = document.createElement(type);
    for (classtype of classes){
        element.classList.add(classtype)
    }
    return element
}

createText = text => document.createTextNode(text);

function notDone(){
  if(confirm("this page is not done would you like to return to the previous page?")){
    history.back();
  }
}