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
const yearDivPro = document.getElementById('plan-yearly-pro')
const yearDivArc = document.getElementById('plan-yearly-arc')
const yearDivAdv = document.getElementById('plan-yearly-adv')
const addZeroAdv = document.getElementById('add-zero-adv')
const addZeroArc = document.getElementById('add-zero-arc')
const addZeroPro = document.getElementById('add-zero-pro')


myswitch.addEventListener('change',(event) => {
    if (myswitch.checked == true) {
        year.classList.add('selected-switch')
        month.classList.remove('selected-switch')
        yearDivPro.style.display = 'block'
        yearDivArc.style.display = 'block'
        yearDivAdv.style.display = 'block'
        addZeroAdv.style.display = 'inline'
        addZeroArc.style.display = 'inline'
        addZeroPro.style.display = 'inline'
        console.log("selected plan Yearly")
    } else {
        month.classList.add('selected-switch')
        year.classList.remove('selected-switch')
        yearDivPro.style.display = 'none'
        yearDivArc.style.display = 'none'
        yearDivAdv.style.display = 'none'
        addZeroAdv.style.display = 'none'
        addZeroArc.style.display = 'none'
        addZeroPro.style.display = 'none'
        console.log("selected plan monthly")
    }
})
