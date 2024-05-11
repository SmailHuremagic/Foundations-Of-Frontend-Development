document.getElementById('generateBtn').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userInfoHtml = `
            <img src="${user.picture.large}" alt="Generated User" style="border-radius: 50%;">
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
        `;
        document.getElementById('userInfo').innerHTML = userInfoHtml;
    });
});
