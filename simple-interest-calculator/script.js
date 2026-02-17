const rate_slider = document.getElementById('rate_slider')
const rate_value = document.getElementById('rate_value')
const yearInput =  document.getElementById('years')
const principalInput = document.getElementById('principal')
const result = document.getElementById('result')

function convertYear(year){
 return newYear = new Date().getFullYear() + year
}

function compute(){
    const principal = parseInt(principalInput.value)
    const year = parseInt(yearInput.value,10)
    const rate = parseFloat(rate_slider.value)
    
    
    if (principal <= 0 ) {
        alert("Enter a valid principal value")
        principal.focus()
    }
    else
    {
        const interest = (principal * rate * year)/100

        result.innerHTML = `If you deposit $${principal},\<br>
        at an interest rate of ${rate}%.\<br>
        You will receive an amount of $${interest},\<br>
        in the year ${convertYear(year)}\<br>`
    } 
}



function updateRate() {
    rate_value.innerText = rate_slider.value
}

rate_slider.onchange = updateRate
