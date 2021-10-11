document.addEventListener('DOMContentLoaded', (function () {
    if (localStorage.getItem('loginStatus') == 'true') {
        location.assign('./orders.html')
    }
    let loginForm = document.getElementById('loginform');
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        let logincredential = {
            username: this.username.value,
            password: this.password.value
        }

        if (logincredential.username === logincredential.password) {
        fetch("/https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(logincredential)
            }).then(function (res) {
                alert('Login Successful!!')
                localStorage.setItem('loginStatus', true)
                location.replace('./orders.html')
            })
            .catch(function (res) { 
                console.log(res)
             })}
             else{
                alert(`Please Enter Valid Credentials ${logincredential.username} ${logincredential.password}`)
             }
    }
    
    document.getElementsByClassName('.nabvar-items').onclick(function (e) {
        e.preventDefault();
        document.getElementsByClassName('.active').removeClass('active');
        $(e.target).addClass('active')

    });
}));