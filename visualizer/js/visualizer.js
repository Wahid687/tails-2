//-------------------------------------------------------------------
// Initialize Visualizer Script
//-------------------------------------------------------------------
function initVisualizer(mainViz = null, subViz = null, misc) {
    return visualizer = {
        vizId: mainViz,
        subVizId: subViz,
        zoomFlag: false,

        // Show/Hide visualizer window
        //-------------------------------------------------------------------
        show: function() {
            document.getElementById("visualizer").style.display = "block";
        },
        hide: function() {
            document.getElementById("visualizer").style.display = "none";
        },

        // Load visualizer with id, spec & sel
        //-------------------------------------------------------------------
        loadViz: function(id = mainViz, spec, sel) {
            misc.showLoading();
            document.getElementById(id).load(spec, sel);
            dev.data('loading viz :', [id, spec, sel]);
        },

        // Zoom main visualizer
        //-------------------------------------------------------------------
        zoom: function() {
            if (!this.zoomFlag) {
                compare.off();

                document.getElementById(mainViz).zoom();
                this.zoomFlag = true;

                // document.getElementById("zoom").innerHTML = "<i class=\"fas fa-minus\"></i> ZOOM";
                document.getElementById("zoom").innerHTML = "ZOOM OUT";

                misc.showLoading();

                var zoomDone = setInterval(function() {
                    if (document.querySelector("#" + mainViz + " canvas")) {
                        misc.hideLoading();
                        clearInterval(zoomDone);
                    }
                }, 200);

                dev.log("Zoom in");

            }
        },

        // Un zoom main visualizer
        //-------------------------------------------------------------------
        unzoom: function() {
            if (this.zoomFlag) {
                document.getElementById(mainViz).unzoom();
                this.zoomFlag = false;
                //  document.getElementById("zoom").innerHTML = "<i class=\"fas fa-plus\"></i> ZOOM";
                document.getElementById("zoom").innerHTML = "ZOOM IN";
                dev.log("Zoom out");
            }
        },

        // If the image is user uploaded, Shows back to IM button
        //-------------------------------------------------------------------
        showBackToIM: function(spec) {
            if (spec.indexOf("_USER_") !== -1) {
                document.getElementById("back-to-IM").style.display = "block";
            } else {
                document.getElementById("back-to-IM").style.display = "none";
            }
        },

        // Generate back to IM link with current viz data
        //-------------------------------------------------------------------
        goBackToIM: function() {
            window.location.href = "IM.aspx?specifier=" + document.getElementById(mainViz).getSaveData().spec;
        },


        //-------------------------------------------------------------------
        // Visualizer Events
        //-------------------------------------------------------------------

        initEvents() {
            // Event visualizer load completed
            //-------------------------------------------------------------------
            document.getElementById(mainViz).addEventListener('ready', function(result) {
                dev.data("Visualizer Loaded", result);
                visualizer.showBackToIM(document.getElementById(mainViz).getSaveData().spec);
                // compare.off();
                visualizer.unzoom();
                misc.hideLoading();
                // productMenu.LoadVisualizerData(result);
            });

            // Event Surface apply completed
            //-------------------------------------------------------------------
            document.getElementById(mainViz).addEventListener('surface_apply_done', function(e) {
                dev.data("Visualizer Prod Applied", e);
                misc.hideLoading();
                visualizer.unzoom();
            });

            // Handle Zoom element click
            //-------------------------------------------------------------------
            document.getElementById("zoom").addEventListener("click", function() {
                if (visualizer.zoomFlag) {
                    visualizer.unzoom();
                } else {
                    compare.off();
                    visualizer.zoom();
                }
            });

            //surface select
            document.getElementById(mainViz).addEventListener('surface_select', function(result) {
                // console.log('surface_select', result.value.type);
                // productMenu.showTab(document.querySelector('.tabs div[data-type="' + result.value.type + '"]'));
            });






        }
    }
}