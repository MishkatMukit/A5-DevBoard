document.getElementById('btn-theme').addEventListener('click',
    function(){
        const color = getRandomColor();
        document.getElementById('bg-body').style.backgroundColor = color;
    }
)