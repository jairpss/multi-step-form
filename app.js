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

const cb1 = document.getElementById('checkbx1')
const cb2 = document.getElementById('checkbx2')
const cb3 = document.getElementById('checkbx3')
const div1 = document.getElementById('opt-1')
const div2 = document.getElementById('opt-2')
const div3 = document.getElementById('opt-3')

cb1.addEventListener('change', (event) => {
    if (cb1.checked == true) {
        div1.style.backgroundColor = '#fafbff'
        div1.style.borderColor = '#473dff'
    } else {
        div1.style.backgroundColor = '#fff'
        div1.style.borderColor = '#d6d9e6'
    }
    
})

cb2.addEventListener('change', (event) => {
    if (cb2.checked == true) {
        div2.style.backgroundColor = '#fafbff'
        div2.style.borderColor = '#473dff'
    } else {
        div2.style.backgroundColor = '#fff'
        div2.style.borderColor = '#d6d9e6'
    }
    
})

cb3.addEventListener('change', (event) => {
    if (cb3.checked == true) {
        div3.style.backgroundColor = '#fafbff'
        div3.style.borderColor = '#473dff'
    } else {
        div3.style.backgroundColor = '#fff'
        div3.style.borderColor = '#d6d9e6'
    }
    
})
