const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword')
const noUserPassword = document.getElementById('noUserPassword')
const noUserName = document.getElementById('noUserName')


userName.onkeyup = () => { if (noUserName) noUserName.style.display = 'none' }

userPassword.onkeyup = () => { if (noUserPassword) noUserPassword.style.display = 'none' }
