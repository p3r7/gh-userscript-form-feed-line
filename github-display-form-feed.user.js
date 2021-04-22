// ==UserScript==
// @name        display-form-feed - github.com
// @namespace   Violentmonkey Scripts
// @match       https://github.com/*
// @exclude     https://github.com/login
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant       none
// @version     1.0
// @author      -
// @description 4/22/2021, 9:46:27 AM
// ==/UserScript==


$(document).ready(function(){
    const form_feed="";
    $("td.js-file-line:contains('" + form_feed + "')").html('<hr/>');
    $("td.js-file-line > hr").css('margin', '10px auto auto 0');
});
