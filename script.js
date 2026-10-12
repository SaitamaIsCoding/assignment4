// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      
      // Custom validation for password matching
      if (form.id === 'registrationForm') {
        const password = document.getElementById('password')
        const confirmPassword = document.getElementById('confirmPassword')
        const confirmFeedback = document.getElementById('confirmPasswordFeedback')

        if (password && confirmPassword && password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity('Passwords do not match')
          if (confirmFeedback) {
            confirmFeedback.textContent = 'Passwords do not match.'
          }
        } else if (confirmPassword) {
          confirmPassword.setCustomValidity('')
        }
      }

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()