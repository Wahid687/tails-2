//--------------------------------------------------------------------
// Miscellanies tasks related functions
//--------------------------------------------------------------------
function initMisc() {
    return {
        // Show/Hide Loading
        //--------------------------------------------------------------------
        showLoading: function() {
            document.getElementById("loading-screen").style.display = "block";
            // $('.tabs .tab').css('visibility','hidden');
            dev.log("Show Loading");
        },
        hideLoading: function() {
            document.getElementById("loading-screen").style.display = "none";
            $('.tabs .tab').css('visibility', 'visible');
            dev.log("Hide Loading");
        },

        // Show/Hide Light box
        //--------------------------------------------------------------------
        showLightBox: function(id) {
            document.getElementById(id).style.display = "block";
            dev.log("Show light box : " + id);
        },
        hideLightBox: function(id) {
            document.getElementById(id).style.display = "none";
            dev.log("Hide light box : " + id);
        }
    }
}