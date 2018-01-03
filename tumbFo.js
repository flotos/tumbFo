// ==UserScript==
// @name         tumblr Fo
// @namespace    https://github.com/flotos/tumbFo
// @version      1.0
// @description  Follow&Like automatically on tumblr
// @author       Florian Peyron | flotos
// @match        *://*.tumblr.com/search*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/flotos/tumbFo/master/tumbFo.js
// @updateURL    https://raw.githubusercontent.com/flotos/tumbFo/master/tumbFo.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
    console.log("Started");
    // Your code here...
    Array.from(
        document
        .getElementsByClassName('follow-text'))
        .forEach((elm, index) =>
            {
                setTimeout(() => {
                    console.log("Clicked", index);
                    elm.click();
                }, index * (Math.random() * (10000)+2000));
            }
        );
        Array.from(
        document
        .getElementsByClassName('post_control post-control-icon like'))
        .forEach((elm, index) =>
            {
                setTimeout(() => {
                    console.log("Clicked", index);
                    elm.click();
                }, index * (Math.random() * (10000)+2000));
            }
        );
    }, 4000);
    setTimeout(() => {
   location.reload(); }, Math.random() * (20000)+50000);

})();

