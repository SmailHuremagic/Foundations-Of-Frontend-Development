$(document).ready(function(){
    $("#generateBtn").click(function(){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data){
                var user = data.results[0];
                var fullName = user.name.first + ' ' + user.name.last;
                var email = user.email;
                var address = user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.country;
                
                var userInfoHTML = `
                    <h2>${fullName}</h2>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <img src="${user.picture.large}" alt="User Image">
                `;
                $("#userInfo").html(userInfoHTML);
            }
        });
    });
});
