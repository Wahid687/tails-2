//----------------------------------------------------------------
//Landing Page
//----------------------------------------------------------------
function initLanding() {
    return {
        // Show/Hide Landing view
        show: function() {
            document.getElementById("landing").style.display = "block";
            dev.log("Show Landing");
        },
        hide: function() {
            document.getElementById("landing").style.display = "none";
            dev.log("Hide Landing");
        }
    };
}