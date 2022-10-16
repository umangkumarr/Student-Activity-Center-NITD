// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from 'firebase/firestore' 
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getStorage } from "firebase/storage";
import { v4 } from "uuid";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
const eveRef=collection(db,'events');
const cRef=collection(db,'coordinators');

// get clubs data

async function getClubs(){
         
           var clubsData= await getDocs(colRef) 
              var clubs=[]
              clubsData.docs?.forEach((doc)=>{  
                 clubs.push({...doc.data(),id:doc.id})   
              })
                // console.log(clubs)
           return await clubs;
}

// upload images
const app=initializeApp(firebaseConfig2);
const storage = getStorage(app);

// function to upload image in db and get back link
const uploadFileToFirebase = async (file) => {
    if (file == null) return;
    const imageRef = ref(storage, `images/${v4()+"-"+file.name}`);
    const uploadByte= await uploadBytes(imageRef, file);
    const downloadUrl= await getDownloadURL(uploadByte.ref);
    return downloadUrl
};


// adding event in db firebase
const uploadEventDataToFirebase = async (data) => {
     const result =await addDoc(eveRef,data);
     return result;
};

// getting event in db firebase
const getEventDataFromFirebase = async ( ) => {
  const eventDetails =await getDocs(eveRef);
  var result=eventDetails.docs.map((doc)=>({...doc.data(), id:doc.id}))
  return result;
};


// Update event details in db firebase
const updateEventDataToFirebase = async (id,data) => {
  const updateRef=doc(db,'events',id);
  const result =await updateDoc(updateRef,data);
  return result;
};

// Delete event details in db firebase
const deleteEventDataFromFirebase = async (id) => {
  const deleteRef=doc(db,'events',id);
  const result =await deleteDoc(deleteRef);
  return result;
};


// get coordinators data

async function getCoordinators(){
         
  var coordinatorsData= await getDocs(cRef) 
     var coordinators=[]
     coordinatorsData.docs?.forEach((doc)=>{  
      coordinators.push({...doc.data(),id:doc.id})   
     })
       // console.log(clubs)
  return await coordinators;
}



export {  getClubs,
          uploadFileToFirebase,
          uploadEventDataToFirebase,
          getEventDataFromFirebase,
          updateEventDataToFirebase,
          deleteEventDataFromFirebase,
          getCoordinators
        }
