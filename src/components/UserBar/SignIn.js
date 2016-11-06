import React from "react";

export default class SignIn extends React.Component {
    constructor() {
        super();
        
        this.state = {
            hi: 'here',
        };

        window.onSignIn = (googleUser) => {
            this.props.onSignIn(googleUser);
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        };
    }
    
    static get defaultProps() {
        return {
            onSignIn: () => {},
        };
    }

    render() {
        return (
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"/>
        );
    }
}
