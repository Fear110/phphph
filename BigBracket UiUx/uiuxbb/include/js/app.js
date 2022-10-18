const ui = new UI();
const http = new Http();
const signUpBtn = document.querySelector("#sign-up-btn");

signUpBtn.addEventListener('click', (e) => {
  const form = document.querySelector('#sign-up-form');
  let data = new FormData(form);

  if(!ui.validateSignUpForm(data)) {
    const request = JSON.parse(JSON.stringify(Object.fromEntries(data)));
    request.receiveLetter = document.getElementById("receiveLetter").checked;
    http.postSignUpData(request).then(data => {
      form.reset();
    }).then(error => {
      console.log(error);
    });
  }

})
