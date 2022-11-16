// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-upform.component";
import {
  // auth,
  signInWithGooglePopup,
  // singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
// import { async } from "@firebase/util";

const SignIn = () => {

  // const getResult = async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // };

  // useEffect(() => {
  //   getResult().catch(console.error);
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignUpForm/>
      {/* <button onClick={singInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
    </div>
  );
};
export default SignIn;
