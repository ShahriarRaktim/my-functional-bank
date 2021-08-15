document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
   if(userEmail == 'raktim@gmail.com' && userPassword == 'raktim'){
       window.location.href = 'banking.html';
   }
})

