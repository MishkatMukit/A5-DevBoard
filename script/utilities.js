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
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

//   am pm format
  if (hour >= 12) {
    if (hour > 12) {
      hour -= 12;
    }
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }
//  leading zero
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  return currentTime;
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 55) + 200; 
    const g = Math.floor(Math.random() * 55) + 200; 
    const b = Math.floor(Math.random() * 55) + 200; 
    
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    return hex;
}