let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('button text :', buttonText);
        if(buttonText=='C'){
            screen.value="";
        }
        else if(buttonText=='x'){
            buttonText = "*";
            screen.value+=buttonText;
        }
        else if(buttonText== '='){
            screen.value=eval(screen.value);
        }
        else{
            screen.value+=buttonText;
        }
    })
}