require('style-loader!../public/style.scss');

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');




// Logo at top left of screen
class Logo extends React.Component {
    render() {
        return (
            <div>
                <h1> This is logo! </h1>
            </div>
            );
    }
}

// Menu at top right of screen
class MenuBar extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the menu bar</h1>
            </div>
            );
    }
}

// bar at left side of screen
class UserBar extends React.Component {
    render() {
        return (
            <div>
                <img className="profile-image" src="images/profile/defaultProfilePic.png"/>
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
                <h2 className="full-name">Full Name</h2>
                <a href="#" onclick="signOut();">Sign out</a> 
            </div>
            );
    }
}

// Content at right bottom of screen
class Content extends React.Component {
    render() {
        return (
            <div>
                <p> This is first content</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
                <p>This is content<br/>a<br/>a</p>
            </div>
            );
    }
}


class ReactPage extends React.Component {
  render() {
    return <div className="react-page">
            <div className="side-bar">
                <div className="logo">
                    < Logo/>    
                </div>
                <div className="user-bar">
                    < UserBar/>
                </div>
            </div>
            <div className="menu-bar-and-content">
                <div className="menu-bar">
                    < MenuBar/>
                </div>
                <div className="content">
                    < Content/>
                </div>
            </div>
        </div>;
  }
}


$( () => {
    ReactDOM.render(<ReactPage />, window.document.getElementById("container"));
    
    $.ajax('https://apis.google.com/js/platform.js', {
        cache: true,
        dataType: 'script',
    });
});


// Google sign in
window.onSignIn = function(googleUser) {
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

window.signOut = function() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    $(".profile-image").attr('src', 'images/profile/defaultProfilePic.png');
    $(".full-name").text("Full Name");
}