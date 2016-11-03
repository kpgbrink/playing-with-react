import React from "react";

export default class SignIn extends React.Component {


    render() {
        return (
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        );
    }
}

window.onSignIn= function (googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // Change things to show user they are signed in
    // Make profile image
    $(".profile-image").attr('src', profile.getImageUrl());
    $(".full-name").text(profile.getName());
}