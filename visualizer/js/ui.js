//-------------------------------------------------------------------
// Misc UI event handlers
//-------------------------------------------------------------------
function initUI() {

    // Close Feedback on cancel
    //-------------------------------------------------------------------
    document.querySelector("cham-feedback button.cancel").addEventListener("click", function() {
        misc.hideLightBox('feedback-lightbox');
    });

    document.querySelector("cham-feedback").addEventListener("sent", function() {
        alert('Thanks for your feedback!');
        misc.hideLightBox('feedback-lightbox');
    });

    // Close IM upload window
    //-------------------------------------------------------------------
    document.querySelector("im-upload #upload-section>div .modal-close .times img").addEventListener("click", function() {
        upload.hide();
    });

}