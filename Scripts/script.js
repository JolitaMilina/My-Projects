let result="";

let birthMonth= prompt ( "Enter your birth month in number (1-12)");
let birthDay= prompt ( "Enter your birth day in number (1-31)");

if (birthMonth==="1") {
  if (birthDay<="20") {
    result = "Capricorn";
  } else{
    result = "Aqarius";
  }
}

else if (birthMonth==="2") {
  if (birthDay<="19") {
    result = "Aqarius";
  } else{
    result = "Pisces";
  }
}

else if (birthMonth==="3") {
  if (birthDay<="21") {
    result = "Pisces";
  } else{
    result = "Aries";
  }
}

else if (birthMonth==="4") {
  if (birthDay<="20") {
    result = "Aries";
  } else{
    result = "Taurus";
  }
}

else if (birthMonth==="5") {
  if (birthDay<="21") {
    result = "Taurus";
  } else{
    result = "Geminis";
  }
}

else if (birthMonth==="6") {
  if (birthDay<="21") {
    result = "Geminis";
  } else{
    result = "Cancer";
  }
}

else if (birthMonth==="7") {
  if (birthDay<="23") {
    result = "Cancer";
  } else{
    result = "Leo";
  }
}

else if (birthMonth==="8") {
  if (birthDay<="23") {
    result = "Leo";
  } else{
    result = "Virgo";
  }
}

else if (birthMonth==="9") {
  if (birthDay<="23") {
    result = "Virgo";
  } else{
    result = "Libra";
  }
}

else if (birthMonth==="10") {
  if (birthDay<="23") {
    result = "Libra";
  } else{
    result = "Scorpio";
  }
}

else if (birthMonth==="11") {
  if (birthDay<="23") {
    result = "Scorpio";
  } else{
    result = "Capricorn";
  }
}

else if (birthMonth==="12") {
  if (birthDay<="22") {
    result = "Capricorn";
  } else{
    result = "Aquarius";
  }
}


else  {
  alert("You dont belong here")
}


 alert("Your zodiac sign is " + result);
