//-------------------------------------------------------------------
// Initialize Mail Script
//-------------------------------------------------------------------
function initMail() {
    return mail = {
        // Handles sending email and feedback
        //----------------------------------------------------------------------
        handleMailShare: function() {
            document.getElementById("sendMail").innerText = "SENDING...";

            var fromName = document.getElementById("fromName").value || "";
            var fromEmail = document.getElementById("fromEmail").value;
            var toName = document.getElementById("toName").value || "";
            var toEmail = document.getElementById("toEmail").value;
            var emailBody = document.getElementById("mailBody").value.trim();

            if (fromEmail && toEmail && (emailBody !== "")) {
                var request = 'services/email.ashx?fromEmail=' + fromEmail + '&fromName=' + fromName + '&toEmail=' + toEmail + '&toName' + toName + '&body=' + encodeURIComponent(emailBody);

                fetch(request)
                    .then(function(response) {
                        console.log(response);
                        document.getElementById("sendMail").innerText = "SEND";
                        document.getElementById("email-feedback").innerText = "Email Sent to : " + document.getElementById("toEmail").value;
                        document.getElementById("email-feedback").style.display = "block";
                    });
            } else {
                if (fromEmail === "") {
                    document.getElementById("fromMailError").style.display = "block"
                } else {
                    document.getElementById("fromMailError").style.display = "none"
                };
                if (toEmail === "") {
                    document.getElementById("toMailError").style.display = "block"
                } else {
                    document.getElementById("toMailError").style.display = "none"
                };
                if (emailBody === "") {
                    document.getElementById("mailBodyError").style.display = "block"
                } else {
                    document.getElementById("mailBodyError").style.display = "none"
                };
            }
        },

        // Create email message and set up from
        //----------------------------------------------------------------------
        setEmailMessage: function() {
            var a = document.createElement('a')
            a.href = window.location.href;

            var port = "";
            if (a.port !== "") port = ":" + a.port;

            var saveData = document.getElementById("cham-viz").getSaveData();

            document.getElementById("mailBody").value = "Check out this design I made using the Best Tile Visualizer tool!\n" + social.generateShareLink();

            document.getElementById("fromMailError").style.display = "none";
            document.getElementById("toMailError").style.display = "none";
            document.getElementById("mailBodyError").style.display = "none";
        },

        // Reset email form
        //----------------------------------------------------------------------
        resetEmailForm: function() {
            document.getElementById("email-feedback").innerText = "";
            document.getElementById("email-feedback").style.display = "none";
        },

        // Initialize Events
        //----------------------------------------------------------------------
        initEvents: function() {
            // Handle send email click
            //----------------------------------------------------------------------
            document.getElementById("sendMail").addEventListener("click", function(e) {
                e.preventDefault();
                mail.handleMailShare();
            });
        }
    }
}