require('style-loader!../public/style.scss');

import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Layout from "./components/Layout"

$( () => {
    ReactDOM.render(<Layout />, window.document.getElementById("container"));
    
    $.ajax('https://apis.google.com/js/platform.js', {
        cache: true,
        dataType: 'script',
    });
});




