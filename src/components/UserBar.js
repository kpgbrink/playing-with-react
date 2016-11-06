import React from "react";

import ProfileImage from "./UserBar/ProfileImage";
import SignIn from "./UserBar/SignIn";
import SignOut from "./UserBar/SignOut";

const defaultProfileUrl = "images/profile/defaultProfilePic.png";
const defaultFullName = "Full Name";

// bar at left side of screen
export default class UserBar extends React.Component {
    constructor() {
        super();
        this.state = {
            profileUrl: defaultProfileUrl,
            fullName: defaultFullName
        }
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    
    handleSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();
        this.setState({
            profileUrl: profile.getImageUrl(),
            fullName: profile.getName()
        });
    }
    
    handleSignOut() {
        this.setState({
            profileUrl: defaultProfileUrl,
            fullName: defaultFullName
        });
    }

    render() {
        return (
            <div>
                <ProfileImage profileUrl={this.state.profileUrl}/>
                <SignIn onSignIn={this.handleSignIn}/>
                <h2 className="full-name">{this.state.fullName}</h2>
                <SignOut onSignOut={this.handleSignOut}/>
            </div>
            );
    }
}

