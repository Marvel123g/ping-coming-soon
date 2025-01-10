const button = document.querySelector('button');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

button.addEventListener('click', e =>{
    e.preventDefault()
    
    const emailValue = email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailValue || !emailRegex.test(emailValue)){
        emailError.style.display= 'block';
        email.classList.add('error');
    } else{
        emailError.style.display = "none";
        email.classList.remove('error');
        alert('Your Email has be submitted')
    };
});