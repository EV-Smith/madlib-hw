//"My fellow Americans, ask not what your country can do for you—ask what you can do for your country." 

var static_content1 = "My fellow ";
var static_content2 = ", ask not what ";
var static_content3 = " can do for ";
var static_content4 = "—ask what ";
var static_content5 = " can do for ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt) 
{
  evt.preventDefault(evt); 
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_content1 + element1 + static_content2 + element2 + static_content3 + element3 + static_content4 + element4 + static_content5 + element5);
}