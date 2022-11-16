import {
    initializeApp
} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
import {
    Await
} from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDn9seZ0UhXiZE33cy87Buhyf1wdV5NQoY",
    authDomain: "online-store-db-ada47.firebaseapp.com",
    projectId: "online-store-db-ada47",
    storageBucket: "online-store-db-ada47.appspot.com",
    messagingSenderId: "1009297882176",
    appId: "1:1009297882176:web:90c758b1024dc80ceb33a5"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('erro creating the user', error.message)

        }
    }
    return userDocRef;
    //if user data does not exist

    //if user data exists



    //return userDocRef

}