import { sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

const actionCodeSettings = {
    url: 'https://localhost:5173',
    handleCodeInApp: true,
};

export const Signin = () => {

    const [email, setEmail] = useState('');

    async function onSignin() {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                alert('Email sent');
            })
            .catch((error) => {
                alert('Email not sent')
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
            );
    }

    async function onSigninByGoogle() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (!credential) return;
                const token = credential.accessToken;
                const user = result.user;
                alert("Signin sucessfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert("Signin unsucessfull");
            }
            );
    }


    return (
        <>
            <div className="text-3xl font-bold underline">
                <p>Signin Page</p>
            </div>
            <div>
                <input type="text" placeholder="email" className="" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={onSignin}>Signin</button>
            </div>
            <div>
                <button onClick={onSigninByGoogle}>Login By Google</button>
            </div>
        </>
    );
}