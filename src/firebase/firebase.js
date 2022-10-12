// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from 'firebase/firestore' 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID,
//   };
  const firebaseConfig2 = {
    apiKey: "AIzaSyD0lVD-j_dE1P-i2Wf_XJeRdAtb0Ya75yY",
    authDomain: "student-activity-center-d3de7.firebaseapp.com",
    projectId: "student-activity-center-d3de7",
    storageBucket: "student-activity-center-d3de7.appspot.com",
    messagingSenderId: "20235687200",
    appId: "1:20235687200:web:8328dbd15144b2cab97345",
    measurementId: "G-K5XQX6LQL2"
  };
// Initialize Firebase
initializeApp(firebaseConfig2);

// init services
const db=getFirestore();
// get clubs reference
const colRef=collection(db,'clubs');
// get data

async function getClubs(){
         
           var clubsData= await getDocs(colRef) 
              var clubs=[]
              clubsData.docs?.forEach((doc)=>{  
                 clubs.push({...doc.data(),id:doc.id})   
              })
                // console.log(clubs)
           return await clubs;
}


export {getClubs}
