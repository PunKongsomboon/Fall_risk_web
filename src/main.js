import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// import VueGoodTablePlugin from 'vue-good-table-next';

// // import the styles
// import 'vue-good-table-next/dist/vue-good-table-next.css'

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi2F-yQtHBZ410Jn6pu3f72Cd-PbpoXew",
    authDomain: "fall-risk-assessment-2fb44.firebaseapp.com",
    projectId: "fall-risk-assessment-2fb44",
    storageBucket: "fall-risk-assessment-2fb44.appspot.com",
    messagingSenderId: "166324756583",
    appId: "1:166324756583:web:83b7b8b1a927d50eb2b4c2",
    measurementId: "G-NW5EPL0VT7"
};

firebase.initializeApp(firebaseConfig)

const app = createApp(App)



app.use(router);

app.use(BootstrapVue3)
// app.use(VueGoodTablePlugin);

app.mount('#app')


