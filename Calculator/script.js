let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error"; 
            }
        } else if (btnText === 'AC') {
            string = "";
            input.value = string;
        } else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (btnText === '%') {
            string = (eval(string) / 100).toString();
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key >= '0' && key <= '9' || key === '.' || key === '%' || key === '+' || key === '-' || key === '*' || key === '/') {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
      
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = "Error"; 
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (key === 'Escape') {
        string = '';
        input.value = string;
    }
});