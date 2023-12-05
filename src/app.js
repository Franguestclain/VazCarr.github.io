
  const formActions = document.querySelector("#form-actions");
  const account = document.querySelector("#account");
  const accountUsername = document.querySelector("#account p");
  const loader = document.querySelector('#loader');
  const formSign = document.querySelector('#form-signup');
  const formLog = document.querySelector('#form-login');
  const errorContainer = document.querySelector(".error");
  const errorM = document.querySelector("#error-message");
  const logoutBnt = document.querySelector("#logoutBtn");


  const getUser = () => {
    const parsed = JSON.parse(window.localStorage.getItem("user"));
    return parsed;
  }


 const handleSign = (e) => {
  e.preventDefault();
  errorContainer.style.display = 'none';

  const { name, lastname, email, password, password2 } = formSign.elements;

  const users = JSON.parse(window.localStorage.getItem("users"));

  const existingEmail = users.find((u) => u.email === email.value);

  if(existingEmail){
    // show error message: existing email
    errorM.textContent = "El correo ya existe";
    errorContainer.style.display = 'block';
  } else {
    if (password.value === password2.value) {
      users.push({name: name.value, lastname: lastname.value, email: email.value, password: password.value});
      window.localStorage.setItem('users', JSON.stringify(users));

      window.location.href = './login.html';

    } else {
      // show error message: password missmatch
      errorM.textContent = "Las contraseñas no coinciden";
      errorContainer.style.display = 'block';
    }
  }

}


const handleLogin = (e) => {
  e.preventDefault();
  errorContainer.style.display = 'none';

  const { email, password } = formLog.elements;

  const users = JSON.parse(window.localStorage.getItem("users"));

  const user = users.find((u) => u.email === email.value);

  if(!user){
    // show error message: existing email
    errorM.textContent = "El correo no existe";
    errorContainer.style.display = 'block';
  } else {
    if (user.password === password.value) {
      window.localStorage.setItem('user', JSON.stringify(user));

      window.location.href = './index.html';

    } else {
      // show error message: password missmatch
      errorM.textContent = "Contraseña incorrecta";
      errorContainer.style.display = 'block';
    }
  }
}

const handleLogout = (e) => {
  loader.style.display = 'none';
  window.localStorage.setItem('user', JSON.stringify({}));
  window.location.href = 'index.html';
}

  const initializeLocalStorage = () => {
    const users = window.localStorage.getItem("users");
    const user = window.localStorage.getItem("user");

    if(users === null){
      window.localStorage.setItem("users", JSON.stringify([]));
    }

    if(user === null) {
      window.localStorage.setItem('user', JSON.stringify({}));
    }

  }

  const startLoading = () => {
    const user = getUser();
    
    if (formActions && account) {
      if(user.email || user.name){
        accountUsername.textContent = user.name;
        formActions.style.display = 'none';
      } else {
        account.style.display = 'none';
      }
    }

    return new Promise(function (resolve, reject) {
      setTimeout(function(){ resolve()}, 2000);
    });
  };

  const main = async () => {
    initializeLocalStorage();

    if(formSign) formSign.addEventListener('submit', handleSign);
    if(formLog) formLog.addEventListener('submit', handleLogin);
    if(logoutBnt) logoutBnt.addEventListener('click', handleLogout);

    await startLoading();
    loader.style.display = 'none';
  }


  main();

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });