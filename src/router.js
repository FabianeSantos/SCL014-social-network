import {loginPage} from './lib/view/templateLogin.js';
import {registrationPage} from './lib/view/templateRegistro.js';
import {errorPage} from './lib/view/templateError.js';
import {homePage} from './lib/view/templateHome.js';


// const changeRoute = (hash) => {
//     console.log('changeRoute', hash);
//     showTemplate()
// }

export const initRoute = () => {
    // cuando carga la pagina el hash viene "".
        window.addEventListener('load', showTemplate(window.location.hash));
        console.log('cuando carga la pagina', window.location.hash );
        //cuando el usuario escribe manualmente, cambia el valor del hash.
        window.onhashchange = () => {
            showTemplate(window.location.hash);
            console.log('cuando el usuario cambia el hash manualmente', window.location.hash ); 
        }
      
    
    }


    //funcion que recibe el parametro hash, y direcciona al template que corresponde.
const showTemplate = (hash) => {
    console.log('showTemplate');
    // const router = hash.substring(1);
    document.querySelector('#root').innerHTML = '';

switch(hash){
    case '#/login':
        loginPage();
        break;
    case '#/register':
        registrationPage();
        break;
    case '#/forgot-password':
        errorPage();
        break;
    case '#/home':
        homePage();
        break;
    case '':
        loginPage();
        break;
    default :
        document.querySelector('#root').innerHTML = `<h1> Page not found</h1>`;

}
    

}




    