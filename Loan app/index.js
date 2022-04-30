let User =prompt("What is Your Name");
let age = prompt("Kindly enter your age");
let incomeEarned = prompt('What is Your Monthly Income' , 30000)
let hasCriminalRecord = prompt ("Do you have any Criminal Record?", No)

switch(age) {
    case "<=18":
        alert("Not eligible for a loan");
        break;
    
    case ">18":
        alert("Eligible for a loan");
        break;
   
      case "No":
     alert("You qualify for a loan");
     default:
         alert("Come back another time")

};
switch(incomeEarned) {
    case "< =30000":
        alert ("Kindly come back later");
        break;
    case ">30000":
      alert("You are one step closer");
      break;
};

switch(hasCriminalRecord){
    case "No":
     alert("You qualify for a loan");
     default:
         alert("Come back another time");
};