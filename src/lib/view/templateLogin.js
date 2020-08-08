// Página de inicio
export const loginPage = () => {
  let btnHome = document.querySelector("#home_btn");
  let btnRegistration = document.querySelector("#registration-btn");
  document.querySelector("#root").innerHTML = `
   <header>
        <img class="header-image" src="img/img-cel.png">
        <img class="header-image-desktop" src="img/img-desk.png">
        <h1>Art Space</h1>
    </header>

    <section class="input_section">
        <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
        <input class="input" type="email" placeholder="Correo electrónico" id="input_email"> <br>
        <img class="icono" src="img/contraseña_icono.png" alt="">
        <input class="input" type="password" placeholder="Contraseña" id="input_password" class="input_password">
        <p id="errorMensaje" class="errorMensaje">¿Olvidó su contraseña?</p>
        <button class="btn" id="home_btn">Comenzar</button>
    </section>

    <section>
        <p>Ingresa con </p>
        <div>
        <img src="img/google_logo.png" id="google" class="logo" alt="Logo google">
        </div>
        <button class="btn" id="registration-btn">Registrarse</button>
    </section>
    <footer> 
        &copy;2020 by Fabiane, Geraldine & Lady
    </footer>
 <script type="module" src="main.js"></script>
   `;
  // Función que lleva desde la pagina de inicio a la segunda
  btnHome = document.querySelector("#home_btn");
  // eslint-disable-next-line no-use-before-define
  btnHome.addEventListener("click", () => {
    ingreso(homePage);
  });
  // Función que lleva desde la de inicio a la de registro
  btnRegistration = document.querySelector("#registration-btn");
  // eslint-disable-next-line no-use-before-define
  btnRegistration.addEventListener("click", registrationPage);
  // Función que lleva a recuperar tu contraseña
  mensaje = document.querySelector("#errorMensaje");
  // eslint-disable-next-line no-use-before-define
  mensaje.addEventListener("click", errorPage);
  // Función que lleva desde el login google a la segunda pantalla
  googlee = document.querySelector("#google");
  googlee.addEventListener("click", () => {
    loginG(homePage);
  });
};
