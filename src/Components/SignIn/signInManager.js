import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializeSignIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }
}

export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignIn: true,
                displayName,
                email,
                imgSrc: photoURL,
                success: true
            };
            return signedInUser;
        }).catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);
        });
}

export const gitHubSignIn = () => {
    const gitHubProvider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(gitHubProvider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignIn: true,
                displayName,
                email,
                imgSrc: photoURL,
                success: true
            };
            return signedInUser;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserInfo(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const SignInUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(() => {
        console.log('user name updated successfully');
    }).catch(error => {
        console.log(error);
    });
}