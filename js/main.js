const scriptURL = 'https://script.google.com/macros/s/AKfycbyso68v-aMxnaSBmpldVi3HsPcZEJXhDE1BAVCzsjcr6B2Cheu5tE2qBxQdPXawtKFxyw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("message")
    
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML = "Thank you for subscrbing! We'll inform you of any updates using your email address"
        setTimeout(function() {
            message.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})