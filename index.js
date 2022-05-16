// buttons
const washBtn = document.getElementById('wash-btn')
const mowBtn = document.getElementById('mow-btn')
const weedBtn = document.getElementById('pull-weed-btn')

// populating items 
const servicesDisplay = document.getElementById('service-display')
const totalDisplay = document.getElementById('total-display')

// send inoice button
const sendBtn = document.getElementById('send-btn')

// wishing para in heading
const wishingPara = document.getElementById('wishing-para')

let chosenService = [];

washBtn.addEventListener('click', function () {
    let carService = {
        service: "Wash Car", value: 10
    }
    chosenService.push(carService)
    washBtn.disabled = true
    displayAll()
    calculation()

})

mowBtn.addEventListener('click', function () {
    let mowLawnService = {
        service: 'Mow-Lawn', value: 20
    }
    chosenService.push(mowLawnService)
    mowBtn.disabled = true;
    displayAll()
    calculation()
})

weedBtn.addEventListener('click', function () {
    let weedService = {
        service: 'Pull-Weed', value: 30
    }
    chosenService.push(weedService)
    weedBtn.disabled = true;
    displayAll()
    calculation()
})

function displayAll() {
    let display = ''
    console.log(chosenService.length)
    for (let i = 0; i < chosenService.length; i++) {
        display += `<div class="service-container">
        <div class="service-name">${chosenService[i].service}</div>
        <button class="remove-item" onclick= "removeItem(${chosenService.indexOf(chosenService[i])})">Remove</button>
        <div class="service-value">$${chosenService[i].value}</div>
    </div>`

    }
    servicesDisplay.innerHTML = display
}

function removeItem(index) {
    chosenService.splice(index, 1);
    displayAll()
    calculation()
}

function calculation() {
    let calc = 0
    let display = ''
    for (let i = 0; i < chosenService.length; i++) {
        calc += chosenService[i].value
        display = `
      <div class="payment-message">We accept cash, credit card, or PayPal</div>
      <div class="total-value">${calc}</div>
     `
    }
    totalDisplay.innerHTML = display
}

sendBtn.addEventListener('click', function () {
    servicesDisplay.innerHTML = ''
    totalDisplay.innerHTML = ''
    wishingPara.textContent = 'Thanks for Choosing Our Services 😜'
})