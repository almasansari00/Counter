
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var btnDel = document.createElement("Button");
    var txt = document.createTextNode("Delete");
    btnDel.className = "close";
    btnDel.appendChild(txt);
    li.appendChild(btnDel);
    var i=0;
    var inputValue = document.getElementById("myInput").value;
    localStorage.setItem("value[i]",JSON.stringify(inputValue));
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    var storeValue=JSON.parse(localStorage.getItem("value"))
    document.getElementById("myUL").appendChild(li);
   
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
