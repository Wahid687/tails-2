//-------------------------------------------------------------------
// Initialize Upload
//-------------------------------------------------------------------
function initUpload() {
    return {
        // Show/Hide upload component
        //-------------------------------------------------------------------
        show: function() {
            // document.querySelector("im-upload").setAttribute("active", "1");
            document.getElementById('imgInp').click(); // Goes straight to file upload dialog
            dev.log("Show Upload");
        },
        hide: function() {
            document.querySelector("im-upload").setAttribute("active", "0");
            dev.log("Hide Upload");
        },


        // Initialize Events
        //-------------------------------------------------------------------
        initEvents: function() {

            // Close IM upload window
            //-------------------------------------------------------------------
            /*
            document.querySelector("im-upload #upload-section>div .modal-close .times img").addEventListener("click", function () {
              upload.hide();
            });*/

            // Show loading on upload
            //-------------------------------------------------------------------
            document.querySelector("im-upload").addEventListener("upload", function() {
                if (document.getElementById("imgInp").value !== "") misc.showLoading();
            });

            document.getElementById('imgToUpload').addEventListener('load', function() { // Goes straight to visualizer
                document.querySelector('#upload-section .btn-upload').click();
            });
        }
    }
}