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
  apiKey: "AIzaSyAxAXqr5T6ILjpqyOvCHMaOdb3XCCkkrLk",
  authDomain: "student-activity-center-38c22.firebaseapp.com",
  projectId: "student-activity-center-38c22",
  storageBucket: "student-activity-center-38c22.appspot.com",
  messagingSenderId: "744434993637",
  appId: "1:744434993637:web:41cd222beb5adb8f8a470c"
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
