import {
  ingreso,
  loginG,
  pass,
  inscription,
} from './lib/index.js';
import {loginPage} from './lib/view/templateLogin.js';
import {registrationPage} from './lib/view/templateRegistro.js';
import {errorPage} from './lib/view/templateError.js';
import {homePage} from './lib/view/templateHome.js';

/* eslint-disable no-use-before-define */
// Funciones importadas funcionalidad firebase

// Enlaces





document.getElementById('root') = loginPage();