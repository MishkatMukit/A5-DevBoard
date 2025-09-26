const activityContainer  = document.getElementById('activity-container')
const allBtn = document.getElementsByClassName('btn-task');
let taskRemaining = parseInt(getInTextByID('task-remaining'));
let taskCompleted = parseInt(getInTextByID('task-completed'));


for(const btn of allBtn){
    btn.addEventListener('click',
        function(event){
            const taskName = event.target.parentNode.parentNode.childNodes[3].innerText;
            event.target.disabled=true;
            event.target.style.opacity=0.5;
            const cTime= showTime();
            const div = document.createElement('div');
            div.innerHTML=`<div class="bg-[#F4F7FF] p-2 my-2 rounded-lg"><p>You have Complete The Task <b>${taskName}</b> at <span class="text-blue-700">${cTime}</span></div>`
            
            activityContainer.appendChild(div);
            taskRemaining--;
            taskCompleted++;
            setInnerTextByIDandValue('task-remaining',taskRemaining)
            setInnerTextByIDandValue('task-completed',taskCompleted)
            alert(`Congratulations!
You have completed the task : ${taskName}`)
            if(taskRemaining===0){
                alert("Congratulations! You have completed all task.")
            }
            
    })
}
document.getElementById('btn-clear').addEventListener('click', 
    function(){
        document.getElementById('activity-container').innerText='';
})