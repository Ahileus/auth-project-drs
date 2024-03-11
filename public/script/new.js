const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword')
const noUserPassword = document.getElementById('noUserPassword')
const noUserName = document.getElementById('noUserName')
const message = document.getElementById('message')
const letter = document.getElementById('letter')
const capital = document.getElementById('capital')
const number = document.getElementById('number')
const length = document.getElementById('length')
const isNotOk = document.getElementById('isNotOk')
const isOk = document.getElementById('isOk')
const copyUserPassword = document.getElementById('copyUserPassword')
const btnRegister = document.getElementById('btn-register')

let validatorState = false

userName.onkeyup = () => { if (noUserName) noUserName.style.display = 'none' }
userPassword.onfocus = () => message.style.display = 'block'
userPassword.onblur = () => message.style.display = 'none'
copyUserPassword.onfocus = () => validatorNewPassword()
copyUserPassword.onblur = () => {
    isNotOk.style.display = 'none'
    isOk.style.display = 'none'
}

userPassword.onkeyup = () => validator(userPassword)
copyUserPassword.onkeyup = () => validatorNewPassword()

const validator = (element) => {

    const lowerCaseLetters = /[a-z]/g;
    if(element.value.match(lowerCaseLetters)) isState(letter);else notState(letter)
    
    const upperCaseLetters = /[A-Z]/g;
    if(element.value.match(upperCaseLetters)) isState(capital); else notState(capital)    

    const numbers = /[0-9]/g;
    if(element.value.match(numbers)) isState(number); else notState(number)

    if(element.value.length >= 8) isState(length); else notState(length)
    validatorNewPassword()
}

const isState = (element) => {
    element.classList.remove('invalid')
    element.classList.add('valid')
    validatorState = true
}

const notState = (element) => {
    element.classList.remove('valid')
    element.classList.add('invalid')
    validatorState = false
}

const validatorNewPassword = () => {
    if (copyUserPassword.value.length === 0) {
        btnRegister.setAttribute('disabled', 'disabled')
        isNotOk.style.display = 'none'
        isOk.style.display = 'none'
        return
    }

    if ((copyUserPassword.value.length === userPassword.value.length) && 
        (copyUserPassword.value === userPassword.value)) {
        if (validatorState) btnRegister.removeAttribute('disabled')
        isNotOk.style.display = 'none'
        isOk.style.display = 'block'
    } else {
        btnRegister.setAttribute('disabled', 'disabled')
        isNotOk.style.display = 'block'
        isOk.style.display = 'none'
    }
}