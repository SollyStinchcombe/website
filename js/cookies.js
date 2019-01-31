$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(100);
     }, 100);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(100);
    }); 
}); 
