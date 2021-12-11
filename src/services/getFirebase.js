import firebase from "firebase"
import 'firebase/firestore'


//API KEYS
const firebaseConfig = {
    apiKey: "AIzaSyBDl77O9FL0vK7Yg1XbD2oNyIClTbRvTVs",
    authDomain: "aestickers-8d12f.firebaseapp.com",
    projectId: "aestickers-8d12f",
    storageBucket: "aestickers-8d12f.appspot.com",
    messagingSenderId: "787847911185",
    appId: "1:787847911185:web:db2e4ced652f6aa474deb0"
};

//Inicialización de la app
const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){    
    return firebase.firestore(app)
}