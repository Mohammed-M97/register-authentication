document.getElementById('login-btn').addEventListener('click', () => {
    let email = document.getElementById('email-input').value
    let password = document.getElementById('password-input').value
    axios.post('https://reqres.in/api/login', {

        'email': email,
        'password': password
        
      })
      .then(function (response) {
        let token = response.data.token

        localStorage.setItem('token', token)
        console.log("your token is: ", token);

        window.location = "webPage.html"
      })
      .catch(function (error) {
        
        alert(error.response.data.error)
      });
})