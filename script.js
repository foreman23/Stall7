// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do?
// Response - What was actually done?



// Contact form validation script
let form = document.querySelector('.needs-validation')

form.addEventListener('submit', function(event)  {
    if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
})
