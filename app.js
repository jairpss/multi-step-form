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
const month = document.getElementById('switch-month')
const year = document.getElementById('switch-year')

myswitch.addEventListener('change',(event) => {
    if (myswitch.checked == true) {
        year.classList.add('selected-switch')
        month.classList.remove('selected-switch')
        console.log("selected plan Yearly")
    } else {
        month.classList.add('selected-switch')
        year.classList.remove('selected-switch')
        console.log("selected plan monthly")
    }
})

// const myswitch = document.getElementById('myswitch')
// const pswitch = document.getElementsByClassName('switch-plan')

// myswitch.addEventListener('change',(event) => {
//     if (event.currentTarget.checked) {
//         pswitch.classList.add('selected-switch')
//         console.log("selected plan")
//     } else {
//         pswitch.classList.remove('selected-switch')
//     }
// })
//how to change the color of a text with switch toggle? 