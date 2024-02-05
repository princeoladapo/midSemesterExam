//FORM
const validate = () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let passwordDisplay2 = document.getElementById('passwordDisplay2')
    let passwordDisplay1 = document.getElementById('passwordDisplay1')

    if(password !== 'dapo1990'){
    alert('Please insert your correct password')
    passwordDisplay2.innerHTML = 'Insert correct password'
     return false
    } else if(username !== 'Oladapo'){
        alert('Please enter the correct username')
        passwordDisplay1.innerHTML = 'Please enter the correct username'
        return false 
    } else{
        alert('LOGIN SUCCESFUL')
    }
    }
