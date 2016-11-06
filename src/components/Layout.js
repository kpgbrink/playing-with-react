import React from "react";

import Logo from "./Logo";
import MenuBar from "./MenuBar";
import UserBar from "./UserBar";
import Content from "./Content";

export default class Layout extends React.Component {
  render() {
    return (<div className="react-page">
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
        </div>);
  }
}
            