let Display = document.getElementById('display')
let Button = document.querySelectorAll('#btn')
let Clearbtn = document.getElementById('clearbtn')
let Deletebtn = document.getElementById('deletebtn')
let Additionbtn = document.getElementById('additionbtn')

for (i = 0; i < Button.length; i++) {
    let Value = Button[`${i}`].value
    function forbuttons(event) {
        Display.append(Value)
        // Display.append(event.target.value)
    }
    Button[`${i}`].addEventListener('click', forbuttons)

    // function add(event) {
    //     let Addition = Value + event.target.value
    //     Display.innerText = Addition
    // }
    // Additionbtn.addEventListener('click', add)
}

function clear() {
    Display.innerText = ''
}
Clearbtn.addEventListener('click', clear)

let Figures = Display.innerText
function del() {
    Figures.append(substr(0, Figures.length - 1))
}
Deletebtn.addEventListener('click', del)
