import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

SignIn.propTypes = {
    
};
const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/photo',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };
function SignIn(props) {
    return (
        <div>
            <div className="text-center">
                <h2>Login Form</h2>

                <p>or login with social accounts</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    );
}

export default SignIn;