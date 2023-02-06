//-------------------------------------------------------------------
// Initialize Social Component
//-------------------------------------------------------------------
function initSocial(visualizer) {
    return {
        // Initialize Social Component
        //-------------------------------------------------------------------
        generateShareLink: function() {
            var saveData = document.getElementById(visualizer.vizId).getSaveData();
            var shareLink = location.protocol + '//' + location.host + location.pathname + '#visualizer/spec/' + encodeURIComponent(saveData.spec) + '/sel/' + saveData.sel;
            dev.log("Generate Share Link : " + shareLink);
            return shareLink;
        },

        // Share on Facebook
        //-------------------------------------------------------------------
        shareFacebook: function() {
            var shareWindow = window.open();

            url = `https://www.facebook.com/dialog/feed?
      app_id=1051205742058413
      &link=` + encodeURIComponent(this.generateShareLink()) + `
      &redirect_uri=` + encodeURIComponent(this.generateShareLink());

            shareWindow.location.href = url;
        },

        // Share on Twitter
        //-------------------------------------------------------------------
        shareTwitter: function() {
            var shareWindow = window.open();

            var url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(this.generateShareLink()) + "&text=Checkout this design I made using the Best Tile Visualizer!";

            console.log(url);
            shareWindow.location.href = url;
        },

        // Share on Pintrest
        //-------------------------------------------------------------------
        sharePintrest: function() {
            var shareWindow = window.open();
            var saveData = document.getElementById(visualizer.vizId).getSaveData();

            var url = `https://www.pinterest.com/pin/create/button/?
      url=` + encodeURIComponent(this.generateShareLink()) + `&description=Checkout this design I made using the Best Tile Visualizer!
      &media=https://proxy.chameleonpower.com/proxy//GetImage.ashx?spec=` + encodeURIComponent(saveData.spec) + `(focus=300)&sel=` + saveData.sel + `&Size=512&type=base`;

            shareWindow.location.href = url;
        }
    }
}

// Sample share links for reference
//---------------------------------
//https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fcdn.mtsl.com%2F%24%2FIQG&description=Checkout%20this%20design%20I%20made%20using%20the%20Enviroshake%20Quality%20Engineered%20Roofing%20visualizer!&media=https%3A%2F%2Frenderfarm2.chameleonpower.com%2Fproxy%2F%2FGetImage.ashx%3Fspec%3DEnviroshake%5CImages%5CExterior_10(focus%3D300)%26sel%3D1937700%2C-1%2C-1%2C-1%2C-1%2C-1%20%26Size%3D512%26type%3Dbase
//https://twitter.com/intent/tweet?text=Checkout%20this%20design%20I%20made%20using%20the%20Enviroshake%20Quality%20Engineered%20Roofing%20visualizer!%20https://cdn.mtsl.com/$/IQF
//https://www.facebook.com/dialog/feed?app_id=164503154874544&link=https://gafvirtualremodeler.chameleonpower.com//og_meta.aspx?Specifier=Enviroshake%5CImages%5CExterior_10~1937700,-1,-1,-1,-1,-1~0&redirect_uri=https://gafvirtualremodeler.chameleonpower.com//og_meta.aspx?Specifier=Enviroshake%5CImages%5CExterior_10~1937700,-1,-1,-1,-1,-1~0