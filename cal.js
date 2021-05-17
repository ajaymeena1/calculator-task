var screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = '';
var y = 0;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        var x = buttonText;
        if (buttonText == 'Clr') {
            screenValue = "";
            screen.value = screenValue;
            document.getElementById('screen').style.color = 'black';

        }
        else if (x === "+" || x === "-" || x === "*" || x === "/" ) {
            if(y===0){
                screenValue += buttonText;
                screen.value = screenValue;
                y=1;
            }
            
    
        }
        else if (buttonText === '=') {
              var er = eval(screenValue);
            if(Infinity === er){
                screenValue = 'error';
                screen.value = screenValue;
                document.getElementById('screen').style.color = 'red';
            }
            else {
                screen.value = eval(screenValue);
                document.getElementById('screen').style.color = 'black';

            }
    
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById('screen').style.color = 'black';

            y=0;
        }

    })
}

