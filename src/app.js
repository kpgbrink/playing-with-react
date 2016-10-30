const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


    class MyComponent extends React.Component {
      render() {
        return <div>Hello World</div>;
      }
    }

$( () => {
    ReactDOM.render(<MyComponent />, window.document.getElementById("container"));

});

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your baqckend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

        // Change things to show user they are signed in
        // Make profile image
        $(".profile-image").attr('src', profile.getImageUrl());
        $(".full-name").text(profile.getName());
};
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $(".profile-image").attr('src', 'images/profile/defaultProfilePic.png');
    $(".full-name").text("Full Name");
}
