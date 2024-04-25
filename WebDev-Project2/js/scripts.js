// Interactive Image Gallery
$(document).ready(function() {
    // Initialize Bootstrap modal for each image
    $('.modal').modal();
});

// Content Toggle
function toggleContent() {
    var content = document.getElementById("toggleContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}

function toggleAccordion(titleElement) {
    var contentElement = titleElement.nextElementSibling;
    if (contentElement.style.display === 'none') {
        contentElement.style.display = 'block';
    } else {
        contentElement.style.display = 'none';
    }
}

function toggleAccordion(titleElement) {
    var contentElement = titleElement.nextElementSibling;
    if (contentElement.style.display === 'none') {
        contentElement.style.display = 'block';
    } else {
        contentElement.style.display = 'none';
    }
}
$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            dob: 'required',
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: 'Please enter your name',
            email: {
                required: 'Please enter your email',
                email: 'Please enter a valid email address'
            },
            dob: 'Please enter your date of birth',
            password: {
                required: 'Please enter a password',
                minlength: 'Password must be at least 8 characters'
            }
        }
    });

    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = calculatePasswordStrength(password);
        $('#passwordStrength').text('Password Strength: ' + strength);
    });

    function calculatePasswordStrength(password) {
        // Implement your password strength calculation logic here
        // This is just a placeholder
        return password.length;
    }
});

$(document).ready(function() {
    $.ajax({
        url: 'data.json', // Replace with the path to your JSON or XML file
        dataType: 'json', // Replace with 'xml' if using XML
        success: function(data) {
            // Iterate over the data and populate the content container
            $.each(data.posts, function(index, post) {
                $('#content-container').append('<h2>' + post.title + '</h2>');
                $('#content-container').append('<p>' + post.content + '</p>');
            });
        },
        error: function() {
            // Handle the error if the request fails
            $('#content-container').text('Failed to load content.');
        }
    });
});

$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting via the browser
      
      var formData = $(this).serialize(); // Serialize the form data
      
      $.ajax({
        type: 'POST',
        url: 'process.php',
        data: formData,
        dataType: 'json',
        encode: true
      })
      .done(function(data) {
        if (!data.success) {
          // If there are errors, display them using Toastr
          if (data.errors.name) {
            $('#name-group').addClass('has-error'); // Add error class to name group
            toastr.error(data.errors.name); // Display error message using Toastr
          }
          if (data.errors.email) {
            $('#email-group').addClass('has-error'); // Add error class to email group
            toastr.error(data.errors.email); // Display error message using Toastr
          }
          if (data.errors.superheroAlias) {
            $('#superhero-group').addClass('has-error'); // Add error class to superhero group
            toastr.error(data.errors.superheroAlias); // Display error message using Toastr
          }
        } else {
          // If successful, display success message using Toastr
          toastr.success(data.message);
          // Optionally, clear the form fields or reset the form
          $('form')[0].reset();
        }
      })
      .fail(function(data) {
        // If AJAX request fails, display error message using Toastr
        toastr.error('An error occurred. Please try again.');
      });
    });
  });


// Define the components
function Home() {
    document.getElementById('app').innerHTML = '<h1>Welcome to the Home page!</h1>';
}

function About() {
    document.getElementById('app').innerHTML = '<h1>About Us</h1>';
}

function Contact() {
    document.getElementById('app').innerHTML = '<h1>Contact Us</h1>';
}

function ViewDetails(itemId) {
    window.open(`details.html?id=${itemId}`, '_blank');
}

// Define the router
function Router() {
    const path = window.location.pathname;

    if (path === '/') {
        Home();
    } else if (path === '/about') {
        About();
    } else if (path === '/contact') {
        Contact();
    } else {
        document.getElementById('app').innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}

// Initial call to Router
Router();

// Update the view when the URL changes
window.onpopstate = function() {
    Router();
};

// Event listener for "View More" button
document.getElementById('viewMoreButton').addEventListener('click', function() {
    const itemId = 1; // Replace with the actual item ID
    ViewDetails(itemId);
});
  
  

