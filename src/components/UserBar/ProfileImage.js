import React from "react";

export default class ProfileImage extends React.Component {
    constructor() {
        super();
        this.defaultProfileImageSrc = "images/profile/defaultProfilePic.png";
    }
    
    render() {
        return (
            <img className="profile-image" src={this.defaultProfileImageSrc}/>
        );
    }
}