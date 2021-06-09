const getContactForm = document.querySelector('.contact')
const getName = document.querySelector('#name')
const getEmail = document.querySelector('#email')
const getErrorMessage = document.querySelector('#error')


document.querySelector('.display-contact-form').addEventListener('click', function(){
    getContactForm.classList.toggle('hidden')
    document.querySelector('body').style.overflow = 'hidden'
})

document.querySelector('.close-contact').addEventListener('click', function(){
    document.querySelector('.contact').remove('hidden')
})

document.querySelector('.form-control').addEventListener('submit', function(e){
    let message = []
    if(getName.value === '' || getName.nodeValue.length == null){
        message.push('this field cannot be empty')
    }

    if(getEmail.value === ''){
        message.push('email is required')
    }
    if(message.length > 0){
        e.preventDefault()
        getErrorMessage.innerText = message.join(', ')
    }
})

const heading = 'Full Stack Web Developer'
let i = 0
const typing = () => {
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 150)
    }
}

typing()


const daysElement = document.querySelector('.days')
const hoursElement = document.querySelector('.hours')
const minsElement = document.querySelector('.mins')
const secondsElement = document.querySelector('.seconds')

const courseStartAt = '1 feb 2022'

function countDownTime(){
    const newYear = new Date(courseStartAt)
    const currentYear = new Date()
    const totalSeconds = (newYear - currentYear) / 1000

    const days = Math.floor(totalSeconds / 3600 /24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysElement.innerHTML = timeFormat(days)
    hoursElement.innerHTML = timeFormat(hours)
    minsElement.innerHTML = timeFormat(mins)
    secondsElement.innerHTML = timeFormat(seconds)

}

countDownTime()
setInterval(countDownTime, 1000)

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}