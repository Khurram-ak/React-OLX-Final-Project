import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCIRX1WbUnE2JrcuEsgFPmqHBaM0NnJuGY",
    authDomain: "olx-firebase-f07e5.firebaseapp.com",
    projectId: "olx-firebase-f07e5",
    storageBucket: "olx-firebase-f07e5.appspot.com",
    messagingSenderId: "123315587115",
    appId: "1:123315587115:web:c30caf00cc707c97d3c26e"
};
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const storage = firebase.storage()


const sendPostData = async (postObj) => {
    const resp = await db.collection('Users').add(postObj)
    return resp
}

const storeImage = async (files) => {
    const allFiles = []
    for (let i = 0; i < files.length; i++) {
        let file = files[i]
        const storageRef = storage.ref(`images/${file.name}`)
        await storageRef.put(file)
        const url = await storageRef.getDownloadURL()
        allFiles.push(url)
    }
    return allFiles
}

const getData=()=>{
    return db.collection('Users').get()
}





export { sendPostData, storeImage,getData }

