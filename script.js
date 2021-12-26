document.addEventListener('click',function(event) {

    if (event.target.matches('#eq')) {
        let calcResult = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = calcResult;
        return;
    }    

    if (event.target.matches('#del')) {
        let delResult = document.getElementById('display').innerText.slice(0,-1);
        document.getElementById('display').innerText = delResult;
        return;
    }    
   
    if (event.target.matches('.clear')) {
        document.getElementById('display').innerText = '';
        return;
    }

    if (!event.target.matches('.number')) return;             
    
    
    let clickNumber = event.target.innerText;
    let beforeClickNumber = document.getElementById('display').innerText;

    document.getElementById('display').innerText = beforeClickNumber + clickNumber;
    

});
