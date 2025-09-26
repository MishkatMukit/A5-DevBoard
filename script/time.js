const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let time =new Date();
let day = weekday[time.getDay()];
let month = months[time.getMonth()];
let date = time.getDate()
let year = time.getFullYear()
let fullDate = `${month} ${date} ${year}`
setInnerTextByIDandValue('header-day',day)
setInnerTextByIDandValue('header-date',fullDate)