const firebaseConfig = {
    apiKey: "AIzaSyCVJcyl1RtMCNmCYCxwVK9anPEn1w9VfcQ",
    authDomain: "codethub-79b51.firebaseapp.com",
    projectId: "codethub-79b51",
    storageBucket: "codethub-79b51.appspot.com",
    messagingSenderId: "648356458949",
    appId: "1:648356458949:web:1249aa1d111dc87d2cdbac",
    measurementId: "G-8B1DWMCVJB"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth();
  const db= firebase.firestore();