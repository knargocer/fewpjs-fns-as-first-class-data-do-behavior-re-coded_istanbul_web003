/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str){
  const hour = str.split(":")[0].parseInt;
  const mint = str.split(":")[1].parseInt;
  
  if(hour<12){
    return "Good Morning";
  }
  else if(hour>12 && hour>17){
    return "Good Afternoon";
  }
  else if(hour>17){
    return  "Good Evening";
  }
}

function displayMessage(str){
  document.getElementById("greeting").innerHTML = "str" ;
}

