export const firebaseInit = () => {
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_Rz1-a1WxTNJKMmcTC7GFrId9cohERmI",
    authDomain: "art-space-9b451.firebaseapp.com",
    databaseURL: "https://art-space-9b451.firebaseio.com",
    projectId: "art-space-9b451",
    storageBucket: "art-space-9b451.appspot.com",
    messagingSenderId: "314586407373",
    appId: "1:314586407373:web:bc09d6d389f84bf9422484"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.initializeApp({
  //   firebaseConfig,
  //   apiKey: "AIzaSyB_Rz1-a1WxTNJKMmcTC7GFrId9cohERmI",
  //   authDomain: "art-space-9b451.firebaseapp.com",
  //   projectId: "art-space-9b451"
  // });

}