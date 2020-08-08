// Página olvidó su contraseña
export const errorPage = () => {
    let googlee = document.querySelector('#google');
let enviar = document.querySelector('#start_btn');
    document.querySelector('#root').innerHTML = `
  <header>
      <img class="header-image" src="img/img-cel.png">
      <img class="header-image-desktop" src="img/img-desk.png">
      <h1>Art Space</h1>
    </header>

  <h4> Ingrese su correo para enviar su nueva contraseña </h4>

  <section class="input_section">
  <img class="icono" src="img/correo_icono.png" alt="Logo de correo electrónico">
  <input class="input" type="email" placeholder="Correo electrónico" id="input_email_Pass"> <br>
  <button class="btn" id="start_btn">Enviar</button> <br>
  <button class="btn" id="loginBtn">Inicio</button>
  </section>

  <section>
    <p>Ingresar con</p>
    <div>
      <img src="img/google_logo.png" id = "google" class="logo" alt="Logo google">
     
    </div>
  </section>
  <footer> &copy;2020 by Fabiane, Geraldine & Lady</footer>

  `;
    // Función que lleva desde recuperar contraseña a primera pagina
    btnLogin = document.getElementById('loginBtn');
    btnLogin.addEventListener('click', loginPage);
    enviar = document.querySelector('#start_btn');
    enviar.addEventListener('click', () => {
        pass(loginPage);
    });
    googlee = document.querySelector('#google');
    googlee.addEventListener('click', () => {
        loginG(homePage);
        // eslint-disable-next-line eol-last
    });
};
