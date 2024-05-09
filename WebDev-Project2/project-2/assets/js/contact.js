$(document).ready(function() {
  $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission action
      var formData = $(this).serialize(); // Serialize the form data for submission

      $.ajax({
          type: 'POST',
          url: 'http://localhost/Foundations-Of-Frontend-Development---Projects/project-1/project-1/submit_form.php', // Corrected URL
          data: formData,
          success: function(response) {
              $('.toast-body').text('Form submitted successfully!');
              $('#contactForm')[0].reset(); // Resets the form fields after submission
          },
          error: function(xhr, status, error) {
              $('.toast-body').text('Error occurred while submitting the form.');
          }
      });

      $('.toast').toast('show'); // Shows the toast notification regardless of success or error
  });
});
