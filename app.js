
let outputScreen=document.getElementById("result-box");
function display(num){
    outputScreen.value += num;

}
function calculated(){
 try{
      outputScreen.value=eval(outputScreen.value);   
 }
  catch{
    alert("Invalid Operation");
  }
}

function clearScreen(){
    outputScreen.value="";
}
function del(){
 
    outputScreen.value=outputScreen.value.slice(0,-1);

}

