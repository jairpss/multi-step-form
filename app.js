//how to add and remove a class with a toggle?

const plans = document.querySelectorAll("#plans > div") 

for (let div of plans) {
    div.addEventListener("click", function() {
        for (let div of plans) {
            div.classList.remove('selected-plan')
            console.log("class removed")
        }
        this.classList.add('selected-plan')
        console.log("class added")
    })
}

const myswitch = document.getElementById('myswitch')
const pswitch = document.getElementsByClassName('switch-plan')

function(){
    if (myswitch.selected){
        pswitch.style.color = 'red'
    }
}

//how to change the color of a text with switch toggle?