var list = [];
function clear() {
  document.getElementById('form').reset();
  
}
function del() {

  document.getElementById('List').innerHTML = "";
  document.getElementById('delete').style.display = "none";

 
// var del = document.getElementById('delete');
//  var i;
//  for (var i = 0; i < list.length; i++) {
//   document.getElementById('list').style.display = "none";
//  }
  
}

function add(){
 var newtask = document.getElementById('newTask').value;
 
 list.push(newtask);
  document.getElementById('List').innerHTML =  "<li>" + list + "</li>";
  document.getElementById('delete').style.display = "block";
  clear();
}



