function getValueByID(id){
    return document.getElementById(id).value
}

function getInTextByID(id){
    return document.getElementById(id).innerText
}
function setInnerTextByIDandValue(id, value){
     document.getElementById(id).innerText=value;
}
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}
function showTime() {
  // Get the current date and time
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  // Set AM/PM format
  if (hour >= 12) {
    if (hour > 12) {
      hour -= 12;
    }
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  // Add a leading zero to single-digit numbers
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Combine the time components into a string
  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  return currentTime;
}