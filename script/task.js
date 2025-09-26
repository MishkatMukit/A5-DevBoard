

const allBtn=document.getElementsByClassName('btn-task');
console.log(allBtn)
for(const btn of allBtn){
    btn.addEventListener('click',
        function(event){
            const taskName = event.target.parentNode.parentNode.childNodes[3].innerText;
            console.log(taskName);
    })
}