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